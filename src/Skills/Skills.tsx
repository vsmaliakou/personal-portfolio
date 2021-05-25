import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/title/Title";
import {faCss3Alt, faGitAlt, faHtml5, faJs, faReact, faSass} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text="MY SKILLS"/>
                <div className={style.skills}>
                    <Skill title="ReactJS" icon={faReact}/>
                    <Skill title="JavaScript" icon={faJs}/>
                    <Skill title="HTML" icon={faHtml5}/>
                    <Skill title="CSS" icon={faCss3Alt}/>
                </div>
                <h5>As well as TypeScript, Redux, REST API, Git, axios, hoc, hook, thunk</h5>
            </div>
        </div>
    );
}

export default Skills;