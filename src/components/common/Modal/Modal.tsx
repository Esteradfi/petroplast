import React, {ReactNode} from "react";
import styles from "./Modal.module.css";

interface ContentComponentProps {
    children: ReactNode;
}
const Modal: React.FC<ContentComponentProps> = ({ children }) => {
    return (
        <div className={styles.modal}>
            {children}
        </div>
    )
}

export default Modal;