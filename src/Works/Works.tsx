import React from 'react';
import style from './Works.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";
import work1 from '../assets/image/work1.jpeg'
import work2 from '../assets/image/work2.gif'

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.container}>
                    <Work title="the name of the project" description="short description" src={work1}/>
                    <Work title="the name of the project" description="short description" src={work2}/>
                </div>
            </div>
        </div>
    );
}

export default Works;