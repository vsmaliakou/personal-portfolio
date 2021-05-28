import React from 'react';
import style from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import avatar from '../assets/images/photo_2021-05-10_14-45-17.jpg'
import Particles from 'react-particles-js'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

const particlesOpt = {
    particles: {
        number: {
            value: 50
        },
        size: {
            value: 3
        },
        line_linked: {
            color: {
                value: "#847d7d"
            }
        }
    },
}

const Main = () => {
    return (
        <div className={style.main} id="main">
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={`${style.mainContainer} ${styleContainer.container}`}>
                <div className={style.text}>
                    <h1>Hi! I'm Vitali Smaliakou</h1>
                    <h3>I am a <ReactTypingEffect text={"Front-end Developer"} speed={80} eraseSpeed={80}/></h3>
                </div>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <div>
                        <img className={style.photo} src={avatar} alt='img'/>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

export default Main;