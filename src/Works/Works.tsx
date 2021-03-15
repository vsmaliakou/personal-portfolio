import React from 'react';
import style from './Works.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.container}>
                    <Work title="Portfolio" description="my portfolio tratata"/>
                    <Work title="Todolist" description="my todolist blabla"/>
                </div>
            </div>
        </div>
    );
}

export default Works;