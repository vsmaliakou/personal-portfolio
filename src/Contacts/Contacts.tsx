import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                    <button type="submit" className={style.submitBTN}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;