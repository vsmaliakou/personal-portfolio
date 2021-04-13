import React from 'react';
import style from './Title.module.css'

type TitleType = {
    text: string
}

const Title: React.FC<TitleType> = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    );
}

export default Title;