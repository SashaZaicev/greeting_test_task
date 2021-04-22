import React from 'react';
import './Modal.scss'

const Modal = (props: any) => {
    return (
        <div className="modalWindowBlock">
            <div className="modal">
                <div>Здравствуйте,{props.firstName} {props.secondName}
                    <div>
                        <button onClick={props.showModalWindow}>Закрыть</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;