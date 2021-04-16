import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h1>Hi! I'm Vitali Smaliakou</h1>
                    <h3>I am a Front-end Developer</h3>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;