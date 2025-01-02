import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import Footer from "../components/Footer.jsx";
import longLogo from "../assets/images/logo_long.png";

function NavBar() {
    return (
        <div className="page">
            <div className="header">
                <img src={longLogo} className="logo" />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about-me">About</Link>
                    <Link to="/projects-list">Projects</Link>
                </nav>
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default NavBar;