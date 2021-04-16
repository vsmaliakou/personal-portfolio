import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/title/Title";
import {faCss3Alt, faJs, faReact} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text="MY SKILLS"/>
                <div className={style.skills}>
                    <Skill title="JavaScript" description="Some text" icon={faJs}/>
                    <Skill title="CSS" description="more text" icon={faCss3Alt}/>
                    <Skill title="ReactJS" description="this text too" icon={faReact}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;