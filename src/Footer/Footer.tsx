import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Icon from './icon/Icon';
import {
    faFacebookF,
    faGooglePlusG,
    faInstagram,
    faLinkedinIn,
    faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.copyright}>2021</span>
                <div className={style.IconContainer}>
                    <Icon icon={faFacebookF}/>
                    <Icon icon={faInstagram}/>
                    <Icon icon={faTelegramPlane}/>
                    <Icon icon={faGooglePlusG}/>
                    <Icon icon={faLinkedinIn}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;