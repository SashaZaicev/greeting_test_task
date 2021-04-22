import React from 'react';
import "./GreetingUser.scss"
import Modal from "./Modal";
import {observer} from "mobx-react-lite";
import GreetingStore from "./GreetingStore";
import GreetingForm from "./GreetingForm";

const GreetingUser = observer(() => {

        // const [show, setShow] = useState(false)
        // const [firstName, setFirstName] = useState('')
        // const [lastName, setLastName] = useState('')

        // const showModalWindow = () => {
        // setShow(!show)
        // if (show) {
        //     setFirstName('')
        //     setLastName('')
        // }
        // }
//     const handlefirstNameInput = (e: any) => {
//         const firstName = e.target.value;
//         setFirstName(firstName)
//     };
//     const handlelastNameInput = (e: any) => {
//         const lastName = e.target.value;
//         setLastName(lastName)
//     }
// }
        const store = GreetingStore.store
        const errors = GreetingStore.store.error
        return (
            <div className="greetingBox">
                {store.show ? <Modal
                        showModalWindow={GreetingStore.showModalWindow}
                        firstName={store.user.firstName}
                        secondName={store.user.lastName}/> :
                    <div className='bodyForm'>
                        <GreetingForm
                            errors={errors}
                            store={store.user}
                        />
                        {/*{errors ?*/}
                        {/*    <><input className='inputError' type="text"*/}
                        {/*             value={GreetingStore.store.user.firstName}*/}
                        {/*             placeholder='first name'*/}
                        {/*             onChange={GreetingStore.handlefirstNameInput}*/}
                        {/*             name={'firstName'}*/}
                        {/*             maxLength={50}*/}
                        {/*             pattern='A-Za-zА-Яа-яЁё'*/}
                        {/*    />*/}
                        {/*        <div className={errors ? 'error' : ""}>Обязательное поле</div>*/}
                        {/*    </>*/}
                        {/*    : <input type="text"*/}
                        {/*             value={GreetingStore.store.user.firstName}*/}
                        {/*             placeholder='first name'*/}
                        {/*             onChange={GreetingStore.handlefirstNameInput}*/}
                        {/*             name={'firstName'}*/}
                        {/*             maxLength={50}*/}
                        {/*             pattern='A-Za-zА-Яа-яЁё'*/}
                        {/*             autoFocus={true}*/}
                        {/*    />}*/}
                        {/*{errors ?*/}
                        {/*    <><input className='inputError'*/}
                        {/*             type="text"*/}
                        {/*             value={GreetingStore.store.user.lastName}*/}
                        {/*             placeholder='second name'*/}
                        {/*             onChange={GreetingStore.handlelastNameInput}*/}
                        {/*             name={'lastName'}*/}
                        {/*             maxLength={50}*/}
                        {/*             pattern='A-Za-zА-Яа-яЁё'*/}
                        {/*    />*/}
                        {/*        <div className={errors ? 'error' : ""}>Обязательное поле</div>*/}
                        {/*    </>*/}
                        {/*    : <input type="text"*/}
                        {/*             value={GreetingStore.store.user.lastName}*/}
                        {/*             placeholder='second name'*/}
                        {/*             onChange={GreetingStore.handlelastNameInput}*/}
                        {/*             name={'lastName'}*/}
                        {/*             maxLength={50}*/}
                        {/*             required*/}
                        {/*             pattern='A-Za-zА-Яа-яЁё'*/}
                        {/*    />}*/}
                        {/*<button*/}
                        {/*    onClick={GreetingStore.showModalWindow}*/}
                        {/*>Готово*/}
                        {/*</button>*/}
                    </div>
                }
            </div>
        )
    }
)

export default GreetingUser;