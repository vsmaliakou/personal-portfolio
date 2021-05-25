import React from 'react';
import style from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import avatar from '../assets/images/photo_2021-05-10_14-45-17.jpg'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h1>Hi! I'm Vitali Smaliakou</h1>
                    <h3>I am a Front-end Developer</h3>
                </div>
                <div >
                    <img className={style.photo} src={avatar} alt='img'/>
                </div>
            </div>
        </div>
    );
}

export default Main;