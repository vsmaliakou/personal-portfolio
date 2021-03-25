import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h1 className={style.title}>Contacts</h1>
                <form className={style.form}>
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="password"/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button>SEND</button>
            </div>
        </div>
    );
}

export default Contacts;