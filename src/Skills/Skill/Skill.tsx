import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './Skill.module.css'
import Tilt from "react-parallax-tilt";

type SkillType = {
    title: string
    icon: IconProp
}

const Skill: React.FC<SkillType> = (props) => {
    return (
        <Tilt className={style.skill} tiltMaxAngleX={20} tiltMaxAngleY={20}>
                <div className={style.icon}>
                    <FontAwesomeIcon icon={props.icon} size="5x"/>
                </div>
                <h3 className={style.title}>{props.title}</h3>
        </Tilt>

    );
}

export default Skill;