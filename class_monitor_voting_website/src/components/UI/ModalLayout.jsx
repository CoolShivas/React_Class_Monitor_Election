
import classes from "./ModalLayout.module.css";
import { createPortal } from 'react-dom';


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.hideInputFormABC}></div>
}


const Modal = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById("overlay");

const ModalLayout = (props) => {

    return <>
        {createPortal(<Backdrop
            hideInputFormABC={props.hideInputFormABC}
        ></Backdrop>, portalElement)}

        {createPortal(<Modal> {props.children} </Modal>, portalElement)}
    </>
}

export default ModalLayout;