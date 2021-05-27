import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Icon from './icon/Icon';
import {
    faLinkedinIn,
    faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.copyright}>Vitali Smaliakou 2021</span>
                <div className={style.IconContainer}>
                    <Icon icon={faLinkedinIn} href='https://www.linkedin.com/in/vitali-smaliakou-50110a210/'/>
                    <Icon icon={faTelegramPlane} href='https://t.me/vsmaliakou'/>
                    <Icon icon={faCode} href='https://www.codewars.com/users/vsmaliakou'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;