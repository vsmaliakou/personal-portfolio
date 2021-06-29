import React, {ChangeEvent} from 'react';
import style from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/Components/title/Title";
import {Fade} from "react-awesome-reveal";
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage, setContacts, setMessage, setName} from "./contacts-reducer";
import {AppRootStateType} from "../store";

const Contacts = () => {

    const name = useSelector<AppRootStateType, string>(state => state.contacts.name)
    const contacts = useSelector<AppRootStateType, string>(state => state.contacts.contacts)
    const message = useSelector<AppRootStateType, string>(state => state.contacts.message)

    const dispatch = useDispatch()

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.currentTarget.value))
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setContacts(e.currentTarget.value)
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const click = () => {
        dispatch(sendMessage(name, contacts, message))
    }

    return (
        <div className={style.contactsBlock} id="contacts">
            <Fade>
                <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                    <Title text="CONTACT ME"/>
                    <form className={style.form}>
                        <div className={style.inputContainer}>
                            <input type="text" placeholder="Your Name" onChange={onChangeName}/>
                            <input type="text" placeholder="Your Email" onChange={onChangeEmail}/>
                        </div>
                        <textarea className={style.textarea} placeholder="message" onChange={onChangeMessage}/>
                        <div className={style.button}>
                            <button type="button" className={style.submitBTN} onClick={click}>CONTACT NOW</button>
                        </div>
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;