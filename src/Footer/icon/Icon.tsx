import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './Icon.module.css'
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type IconType = {
    icon: IconProp
    href: string
}

const Icon: React.FC<IconType> = (props) => {
    return (
        <div className={style.icon}>
            <a href={props.href}><FontAwesomeIcon  icon={props.icon} size="1x"/></a>
        </div>
    );
}

export default Icon;