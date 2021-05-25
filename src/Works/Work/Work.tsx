import React from "react";
import style from './Work.module.css'

type WorkType = {
    title: string
    description: string
    style: {backgroundImage: string}
    href: string
}

const Work: React.FC<WorkType> = (props) => {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <a href={props.href}><div className={style.opacityBlock} /*onClick={() => "https://vsmaliakou.github.io/social-network/"}*/>
                    <h3 className={style.workTitle}>{props.title}</h3>
                    <span className={style.description}>{props.description}</span>
                </div></a>
            </div>
        </div>
    )
}

export default Work