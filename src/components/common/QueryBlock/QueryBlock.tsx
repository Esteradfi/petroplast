import styles from "./QueryBlock.module.css";
import {changeIsOpen, setIsQueryModal} from "../../../redux/modal-reducer";
import {useAppDispatch} from "../../../redux/hooks";

const QueryBlock = () => {
    const dispatch = useAppDispatch();

    const openQueryModal = () => {
        dispatch(changeIsOpen(true));
        dispatch(setIsQueryModal(true));
    }

    return (
        <article className={"container " + styles.QueryBlock}>
            <h3 className={styles.title}>
                Оставьте заявку и мы Вам позвоним!
            </h3>
            <button onClick={openQueryModal} className={styles.button}>
                Оставить заявку
            </button>
        </article>
    )
}

export default QueryBlock;