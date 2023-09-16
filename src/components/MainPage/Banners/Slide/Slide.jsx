import styles from "./../Banners.module.css";
const Slide = (el) => {

    return (
        <>
            <img className={styles.image} src={el.el.links[0]} alt="Баннер" />
        </>
    )
}

export default Slide;