import React from 'react';
import style from './Works.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";
import Title from "../Common/Components/title/Title";
import socialNetworkImage from '../assets/images/socialnetwork.png'
import todolistImage from '../assets/images/todolist.jpg'
import cardsImage from '../assets/images/cards.jpg'
import {Fade} from "react-awesome-reveal";

const Works = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const cards = {
        backgroundImage: `url(${cardsImage})`
    }

    return (
        <div className={style.worksBlock} id="projects">
            <Fade>
                <div className={`${styleContainer.container} ${style.worksContainer}`}>
                    <Title text="MY PROJECTS"/>
                    <div className={style.container}>
                        <Work
                            title="Social network"
                            description="TypeScript, Redux/hoc, react-router-dom, axios, thunk, Formik, reselect, WebSocket, AntDesign (in progress)"
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
                            title="Cards"
                            description="TypeScript, Redux/hoc, react-router-dom, axios, thunk, MaterialUI"
                            style={cards}
                            href={"https://vsmaliakou.github.io/friday/"}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Works;