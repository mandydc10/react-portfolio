import * as React from "react";
import { keyframes } from "framer-motion";
import { motion } from "framer-motion";
import "./Icons.css";
import { svgVariantsMenuOpen, svgVariantsUnderscoreRotate } from "../../animations.jsx";

const IconTerminal = () => (
    <svg
        className="menu_icon"
        fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <motion.polyline id="menu-hat" points="4 17 10 11 4 5"
            variants={svgVariantsMenuOpen}
            initial="initial"
            animate="animate"
        />
        <motion.line id="menu_line" x1="12" x2="20" y1="19" y2="19"
            variants={svgVariantsUnderscoreRotate}
            initial="initial"
            animate="animate" />
    </svg>
)

export default IconTerminal;