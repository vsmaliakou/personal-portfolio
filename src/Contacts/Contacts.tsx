import React, {useState} from 'react';
import style from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/Components/title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <Title text="CONTACT ME"/>
                <form className={style.form}>
                    <div className={style.inputContainer}>
                        <input type="text" placeholder="Your Name"/>
                        <input type="text" placeholder="Your Email"/>
                    </div>
                    <textarea className={style.textarea} placeholder="message"/>
                    <div className={style.button}>
                        <input type="submit"className={style.submitBTN} value="CONTACT NOW"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;