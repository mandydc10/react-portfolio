import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAnimate, motion } from "framer-motion";

import Footer from "../components/Footer.jsx";
import IconTerminal from "../components/icons/IconTerminal.jsx";

import longLogo from "../assets/images/logo_long.png";

import "./NavBar.css";

function NavBar({ children }) {
    const [scope, animate] = useAnimate();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuAnimation = () => {

        {
            setMenuOpen(!menuOpen);

            !menuOpen
                ? animate("#menu-hat", { rotate: 90 }, { duration: 1 }) &&
                animate("#menu_line", { rotate: -45, y: -8 }, { duration: 1 })
                &&
                animate(".dropdown-nav", { height: 260 }, { duration: 1 })
                : animate("#menu-hat", { rotate: 0 }, { duration: 1 }) &&
                animate("#menu_line", { rotate: 0, y: 0 }, { duration: 1 })
                && animate(".dropdown-nav", { height: 0 }, { duration: 0.5 })

        }
    }

    return (
        <div className="page" ref={scope}>
            <div className="header">

                {/* <div > */}
                <nav className="logo-menu-items">
                    <NavLink to="/" className="logo">
                        <img src={longLogo} />
                    </NavLink>

                    <div className="horizontal-nav horizontal-nav-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about-me">About</NavLink>
                        <NavLink to="/projects-list">Projects</NavLink>
                    </div>
                    <NavLink to="/contact-me" className="horizontal-nav btn nav-btn">
                        Contact me
                    </NavLink>
                </nav>

                <button className="menu-btn" onClick={menuAnimation}>
                    <svg
                        className="menu_icon"
                        fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <motion.polyline id="menu-hat" points="4 17 10 11 4 5"
                        />
                        <motion.line id="menu_line" x1="12" x2="20" y1="19" y2="19"
                        />
                    </svg>
                </button>
                {/* </div> */}
                <motion.div className="dropdown-nav" >
                    {menuOpen &&
                        <nav className="dropdown-links-container">
                            <NavLink className="dropdown-links" to="/" onClick="() => !menuOpen">Home</NavLink>
                            <NavLink className="dropdown-links" to="/about-me" onClick="() => !menuOpen">About</NavLink>
                            <NavLink className="dropdown-links" to="/projects-list" onClick="() => !menuOpen">Projects</NavLink>
                            <NavLink className="dropdown-links" to="/contact-me" onClick="() => !menuOpen">Contact me</NavLink>
                        </nav>
                    }
                </motion.div>
            </div>

            <Outlet />
            <Footer />
        </div >
    );
}

export default NavBar;