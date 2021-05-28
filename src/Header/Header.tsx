import React from 'react';
import style from './Header.module.css';
import Nav from "./Nav/Nav";
import BurgerNav from "./burgerNav/BurgerNav";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
}

export default Header;
