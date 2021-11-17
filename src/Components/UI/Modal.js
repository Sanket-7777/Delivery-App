import { Fragment } from "react";
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClose}></div>
    )
}
const ModalOverlays = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
        </Fragment>


    )
}

export default Modal;