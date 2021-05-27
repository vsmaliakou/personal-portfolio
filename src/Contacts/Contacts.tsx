import React, {useState} from 'react';
import style from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/Components/title/Title";
import {Fade} from "react-awesome-reveal";

const Contacts = () => {

    const [isClicked, setIsClicked] = useState(false)
    const click = () => {
        setIsClicked(true)
    }
    const close = () => {
        setIsClicked(false)
    }

    return (
        <div className={style.contactsBlock}>
            <Fade>
                <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                    <Title text="CONTACT ME"/>
                    <form className={style.form}>
                        <div className={style.inputContainer}>
                            <input type="text" placeholder="Your Name"/>
                            <input type="text" placeholder="Your Email"/>
                        </div>
                        <textarea className={style.textarea} placeholder="message"/>
                        <div className={style.button}>
                            <button type="button" className={style.submitBTN} onClick={click}>CONTACT NOW</button>
                        </div>
                        {isClicked && <div className={style.message}>Sorry, this block is not ready yet.<br/>
                            To contact me, send an email to my mail:<br/>
                            vsmaliakou@yandex.by
                            <button type="submit" className={style.close} onClick={close}>X</button>
                        </div>}
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;