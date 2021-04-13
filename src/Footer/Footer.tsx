import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>VITALI SMALIAKOU</h2>
                <div className={style.container}>
                    <img className={style.icon}/>
                    <img className={style.icon}/>
                    <img className={style.icon}/>
                    <img className={style.icon}/>
                    <img className={style.icon}/>
                </div>
                <h3 className={style.titleBottom}>2021 Все права и все дела</h3>
            </div>
        </div>
    );
}

export default Footer;