import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = () => {
    return <div className="backdrop"></div>;
}

const ModalOverlay = (props) =>{
    return(
        <div className="modal">
            <div className="modal-content">{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById("overlay-modal");

const Modal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    );
}

export default Modal;

