import React from 'react';
import style from './Works.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";
import Title from "../Common/Components/title/Title";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text="MY WORKS"/>
                <div className={style.container}>
                    <Work title="the name of the project" description="short description" />
                    <Work title="the name of the project" description="short description" />
                </div>
            </div>
        </div>
    );
}

export default Works;