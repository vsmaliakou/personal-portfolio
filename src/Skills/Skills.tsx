import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="JS" description="Some text"/>
                    <Skill title="CSS" description="more text"/>
                    <Skill title="React" description="this text too"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;