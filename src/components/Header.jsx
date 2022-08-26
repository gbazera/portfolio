import { useRef, useState } from "react";

function Header() {
    const [burgerActive, setBurgerActive] = useState(false);
    const [navActive, setNavActive] = useState(false);
    
    const toggleMenu=()=>{
        setBurgerActive(!burgerActive);
        setNavActive(!navActive);
    }

    return(
        <nav className="container">
            <a className="logo" href="/#">giorgi bazerashvili</a>
            <ul className={`nav-links ${navActive ? 'active' : null}`}>
                <li><a href="/#">home</a></li>
                <li><a href="/#projects">projects</a></li>
                <li><a href="/#contact">contact</a></li>
            </ul>
            <button className="burger" onClick={toggleMenu}><i className={`bx ${burgerActive ? 'bx-x' : 'bx-menu'}`}></i></button>
        </nav>
    );
}

export default Header;