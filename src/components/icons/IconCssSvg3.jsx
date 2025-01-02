import * as React from "react";
import { keyframes } from "framer-motion";
import { motion } from "framer-motion";
import "./Icons.css";
import { svgVariantsPulse } from "../../animations.jsx";


const IconCSS = () => (
    <motion.svg
        className="skills_icon"
        variants={svgVariantsPulse}
        initial="initial"
        animate="animate"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="icon_css 1">
            <path
                id="Vector"
                d="M27.377 28.889L16.001 32L4.625 28.889L2 0H30.002L27.377 28.889Z"
                fill="#1F62AE"
            />
            <path
                id="Vector_2"
                d="M16 2V29.75L25.232 27.008L27.688 2H16Z"
                fill="#347DC6"
            />
            <path
                id="Vector_3"
                d="M24.363 6H7.60699L7.99999 10H16L8.24999 12.99L8.619 17H19.502L19.158 21L16 21.99L12.861 20.984L12.533 19H8.803L9.26199 23.987L16 25.99L22.728 23.986L23.719 12.99H16.026L24 10L24.363 6Z"
                fill="white"
            />
        </g>
    </motion.svg >
)

export default IconCSS;
