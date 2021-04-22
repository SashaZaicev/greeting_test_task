import React from 'react';
import './Modal.scss'

type ModalType = {
    unShowModalWindow: ()=> void
    firstName: string
    secondName: string
}

const Modal: React.FC<ModalType> = (props) => {
    const closeModal = () => {
        props.unShowModalWindow()
    }

    return (
        <div className="modalWindowBlock">
            <div className="modal">
                <div>Здравствуйте,{props.firstName} {props.secondName}
                    <div>
                        <button onClick={closeModal}>Закрыть</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;