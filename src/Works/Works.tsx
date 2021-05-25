import React from 'react';
import style from './Works.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";
import Title from "../Common/Components/title/Title";
import socialNetworkImage from '../assets/images/socialnetwork.png'
import todolistImage from '../assets/images/todolist.jpg'
import counterImage from '../assets/images/counter.jpg'


const Works = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const counter = {
        backgroundImage: `url(${counterImage})`
    }

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text="MY PROJECTS"/>
                <div className={style.container}>
                    <Work
                        title="Social network"
                        description="TypeScript, Redux/hoc, react-router-dom, axios, thunk, Formik, reselect, WebSocket, AntDesign"
                        style={socialNetwork}
                        href={"https://vsmaliakou.github.io/social-network/"}
                    />
                    <Work
                        title="Todolist"
                        description="TypeScript, Redux/hoc, react-router-dom, axios, thunk, Formik, MaterialUI"
                        style={todolist}
                        href={"https://vsmaliakou.github.io/todolist/"}
                    />
                    <Work
                        title="Counter"
                        description="TypeScript, Redux, thunk, work with Local Storage"
                        style={counter}
                        href={"https://vsmaliakou.github.io/counter/"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;