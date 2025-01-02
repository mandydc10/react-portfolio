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
            !menuOpen ? animate("#menu-hat", { rotate: 90 }, { duration: 1 }) && animate("#menu_line", { rotate: -45, y: -8 }, { duration: 1 }) && setMenuOpen(true) : animate("#menu-hat", { rotate: 0 }, { duration: 1 }) && animate("#menu_line", { rotate: 0, y: 0 }, { duration: 1 }) && setMenuOpen(false)
        }
    }

    return (
        <div className="page">
            <div className="header">
                <NavLink to="/">
                    <img src={longLogo} className="logo" />
                </NavLink>
                <nav className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-me">About</NavLink>
                    <NavLink to="/projects-list">Projects</NavLink>
                </nav>
                <button className="menu-btn" onClick={menuAnimation}>
                    <svg ref={scope}
                        className="menu_icon"
                        fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <motion.polyline id="menu-hat" points="4 17 10 11 4 5"
                        />
                        <motion.line id="menu_line" x1="12" x2="20" y1="19" y2="19"
                        />
                    </svg>
                </button>
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default NavBar;