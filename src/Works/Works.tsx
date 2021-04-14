import React from 'react';
import style from './Works.module.scss'
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
                <Title text="MY WORKS"/>
                <div className={style.container}>
                    <Work
                        title="Social network"
                        description="short description 1"
                        style={socialNetwork}
                    />
                    <Work
                        title="Todolist"
                        description="short description 2"
                        style={todolist}
                    />
                    <Work
                        title="Counter"
                        description="short description 3"
                        style={counter}
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;