import React from 'react';
import GreetingStore from "./GreetingStore";
import {observer} from "mobx-react-lite";

type GreetingType = {
    store: {
        firstName: string,
        lastName: string
    }
    errors: boolean
}

const GreetingForm: React.FC<GreetingType> = observer((props) => {

    const error = props.errors ? 'Обязательное поле' : '';
    const borderError =
        (props.errors && props.store.firstName === '')
            ? 'inputError' : ""
    const borderError2 = (props.errors && props.store.lastName === '')
        ? 'inputError' : ""

    return (
        <div>
            <div>
                <input className={borderError ? borderError : ''}
                       type="text"
                       value={props.store.firstName}
                       placeholder='first name'
                       onChange={GreetingStore.handlefirstNameInput}
                       name={'firstName'}
                       maxLength={50}
                       pattern='A-Za-zА-Яа-яЁё'
                       autoFocus={true}
                       required
                />
                <input className={borderError2 ? borderError2 : ''}
                       type="text"
                       value={props.store.lastName}
                       placeholder='second name'
                       onChange={GreetingStore.handlelastNameInput}
                       name={'lastName'}
                       maxLength={50}
                       required
                       pattern='A-Za-zА-Яа-яЁё'
                /></div>
            <div>
                <button
                    onClick={GreetingStore.showModalWindow}
                >Готово
                </button>
            </div>
            <div className={props.errors ? 'error' : ""}>{error}</div>
        </div>
    );
})

export default GreetingForm;