import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>VITALI SMALIAKOU</h2>
                <div className={style.container}>
                    <img className={style.icon}/>
                    <img className={style.icon}/>
                    <img className={style.icon}/>
                    <img className={style.icon}/>
                </div>
                <h3>2021 Все права и все дела</h3>
            </div>
        </div>
    );
}

export default Footer;