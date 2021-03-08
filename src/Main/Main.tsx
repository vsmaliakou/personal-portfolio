import React from 'react';
import style from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Vitali Smaliakou</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;