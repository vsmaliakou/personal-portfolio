import React, {useState} from 'react';
import style from './BurgerNav.module.css';
import {Link} from 'react-scroll'

const BurgerNav = () => {

    const [isOpen, setIsOpen] = useState(false)
    const onClickBtn = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div className={isOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href="">Home</a>
                <Link activeClass={style.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                >Skills</Link>
                <Link activeClass={style.active}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                >Projects</Link>
                <Link activeClass={style.active}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                >Contacts</Link>
            </div>
            <div className={isOpen ? style.burgerBtnWhite : style.burgerBtn} onClick={onClickBtn}>menu</div>
        </div>
    );
}

export default BurgerNav;
