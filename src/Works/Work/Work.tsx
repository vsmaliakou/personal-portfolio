import React from "react";
import style from './Work.module.css'


type WorkType = {
    title: string
    description: string
    src: string
}

const Work: React.FC<WorkType> = (props) => {
    return (
        <div className={style.container}>
            <div className={style.imgBlock}>
                <img src={props.src}/>
                <button>Look</button>
            </div>
            <h2>{props.title}</h2>
            <span>{props.description}</span>
        </div>
    )
}

export default Work