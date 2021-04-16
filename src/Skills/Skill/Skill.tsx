import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './Skill.module.scss'

type SkillType = {
    title: string
    description: string
    icon: IconProp
}

const Skill: React.FC<SkillType> = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <FontAwesomeIcon icon={props.icon} size="5x"/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Skill;