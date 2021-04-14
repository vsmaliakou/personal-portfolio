import React from "react";
import style from './Work.module.scss'

type WorkType = {
    title: string
    description: string
    style: {backgroundImage: string}
}

const Work: React.FC<WorkType> = (props) => {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <div className={style.opacityBlock}>
                    <h3 className={style.workTitle}>{props.title}</h3>
                    <span className={style.description}>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Work