import styles from "./../Modal.module.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {changeIsFetching, NewQuery, postNewQueryThunk} from "../../../../redux/modal-reducer";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {useState} from "react";
import preloader from "./../../../../assets/icons/loader.svg";
import {useLocation, useNavigate} from "react-router-dom";

const QueryModal = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products.productsList);
    let product: any;
    const pathname = useLocation().pathname.split('/');
    let isFetching = useAppSelector(state => state.modal.isFetching);
    let [isLegalEntity, setIsLegalEntity] = useState(false);

    if (pathname.length === 4) {
        product = products.find(el => el._id === pathname[3]);
    }

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm<NewQuery>({
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<NewQuery> = (data) => {
        if (product) {
            data.id = product._id;
        }
        data.username = 'root';
        data.password = 'rootuser';
        dispatch(postNewQueryThunk(data));
        reset({
            name: '',
            email: '',
            phoneNumber: '',
            isLegalEntity: false,
            comment: '',
            salesChannel: '',
            id: ''
        })
        dispatch(changeIsFetching(true));
        setIsLegalEntity(false);
    }

    return (
        <div className={styles.queryModalContent}>
            <h2 className={styles.queryTitle}>
                <span>Оставьте заявку</span> <br/>
                и мы с Вами свяжемся!
            </h2>
            {isFetching ?
                <div>
                    <img src={preloader} alt="Отправляем"/>
                    <h3>Отправляем заявку</h3>
                </div>
                :
                <div className={styles.formWrapper}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <label className={styles.label}>
                            <input className={errors?.name ? styles.input + " " + styles.errorBorder : styles.input}
                                   type="text" {...register('name')} placeholder="Ваше имя"/>
                        </label>
                        <label className={styles.label}>
                            <input className={errors?.email ? styles.input + " " + styles.errorBorder : styles.input}
                                   type="email"
                                   placeholder="Email (обязательно)" {...register('email', {
                                required: "Поле нужно заполнить",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Неправильный формат почты"
                                }
                            })}/>
                            {errors?.email &&
                                <p className="errorMessage">{errors?.email?.message || "Ошибка заполнения"}</p>}
                        </label>
                        <label className={styles.label}>
                            <input
                                className={errors?.phoneNumber ? styles.input + " " + styles.errorBorder : styles.input}
                                type="tel"
                                placeholder="Номер телефона" {...register('phoneNumber', {
                                required: "Поле нужно заполнить",
                                pattern: {
                                    value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/,
                                    message: "Неправильный формат номера"
                                }
                            })}/>
                            {errors?.phoneNumber &&
                                <p className="errorMessage">{errors?.phoneNumber?.message || "Ошибка заполнения"}</p>}
                        </label>
                        <label className={styles.label}>
                            <input className={styles.input} type="text"
                                   placeholder="Ваш вопрос или комментарий" {...register('comment')}/>
                        </label>
                        <label htmlFor="checkbox"
                               className={"custom-checkboxes " + styles.label + " " + styles.checkboxLabel}
                               onChange={() => setIsLegalEntity(!isLegalEntity)}>
                            <input type="checkbox" id="checkbox" {...register('isLegalEntity')}/>
                            <span className="custom-checkboxes-span"></span>
                            <span
                                className={isLegalEntity ? styles.checkboxText + " " + styles.selectedCheckboxText : styles.checkboxText}>
                            Вы юридическое лицо?
                        </span>
                        </label>
                        {
                            isLegalEntity &&
                            <label className={styles.label}>
                                <label className={styles.upLabel}>
                                    Ваш регион, орг. форма, основной канал сбыта
                                </label>
                                <input
                                    className={errors?.salesChannel ? styles.input + " " + styles.errorBorder : styles.input}
                                    type="text" {...register('salesChannel', {
                                    required: "Поле нужно заполнить"
                                })}/>
                                {errors?.salesChannel &&
                                    <p className="errorMessage2">{errors?.salesChannel?.message || "Ошибка заполнения"}</p>}
                            </label>
                        }
                        <label className={styles.label}>
                            <input className={styles.submitButton} type="submit" value={"Оставить заявку"}/>
                        </label>
                    </form>
                </div>}
        </div>
    )
}

export default QueryModal;