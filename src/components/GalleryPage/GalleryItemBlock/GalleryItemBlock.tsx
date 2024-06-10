import styles from "./GalleryItemBlock.module.css";
const GalleryItemBlock = ({...props}) => {

    return (
        <div className={styles.item}>
            <img src={props.image} alt="Фото"/>
        </div>
    )
}

export default GalleryItemBlock;