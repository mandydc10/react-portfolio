import { Link, NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";
import Footer from "../components/Footer.jsx";
import longLogo from "../assets/images/logo_long.png";

function NavBar() {
    return (
        <div className="page">
            <div className="header">
                <img src={longLogo} className="logo" />
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-me">About</NavLink>
                    <NavLink to="/projects-list">Projects</NavLink>
                </nav>
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default NavBar;