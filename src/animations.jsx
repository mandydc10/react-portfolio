const transitionAttributes = {
    times: [0, 1],
    duration: 2,
    repeat: Infinity,
    type: "keyframes",
    ease: "easeInOut",
}

export const svgVariantsPulse = {
    initial: { scale: 0.8 },
    animate: {
        scale: [0.8, 1.3, 0.8],
        transition: transitionAttributes,
    }
}

export const svgVariantsRotate = {
    initial: { rotate: 0 },
    animate: {
        rotate: [0, 360],
        transition: {
            times: [0, 1],
            duration: 3,
            repeat: Infinity,
            type: "keyframes",
            ease: "easeInOut",
        }
    }
}

export const svgVariantsSpin = {
    initial: { rotate: 0 },
    animate: {
        rotate: [0, 360],
        transition: {
            times: [0, 3],
            duration: 5,
            repeat: Infinity,
            type: "keyframes",
        }
    }
}

export const svgVariantsBounce = {
    initial: { y: 5 },
    animate: {
        y: [5, -5, 5],
        transition: transitionAttributes,
    }
}

export const svgVariantsBounce2 = {
    initial: { y: -5 },
    animate: {
        y: [-5, 5, -5],
        transition: transitionAttributes,
    }
}

export const svgVariantesRotateY = {
    initial: { rotateY: 0 },
    animate: {
        rotateY: [0, 360],
        transition: transitionAttributes,
    }
}

export const svgVariantsRoll = {
    initial: { x: 0 },
    animate: {
        rotate: [0, 360],
        x: [0, 200],
        transition: {
            times: [0, 1],
            duration: 5,
            repeat: Infinity,
            type: "keyframes",
            ease: "easeInOut",
        }
    }
}

export const svgVariantsFade = {
    initial: { opacity: 1 },
    animate: {
        opacity: [1, 0, 1],
        transition: {
            times: [0, 1],
            duration: 4,
            repeat: Infinity,
            type: "keyframes",
            ease: "easeInOut",
        }
    }
}