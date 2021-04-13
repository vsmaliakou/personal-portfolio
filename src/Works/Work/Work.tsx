import React from "react";
import style from './Work.module.css'

type WorkType = {
    title: string
    description: string
}

const Work: React.FC<WorkType> = (props) => {
    return (
        <div className={style.work}>
            <div className={style.image}>
                <a className={style.view}>Смотреть</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Work