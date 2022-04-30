import { motion } from "framer-motion";


export default function EaseInTransition({ children, delay = .25, duration = .85, initialX = 0, initialY = -50, renderOnce = false }) {
    const variants = {
        fadeIn: {
            initial: {
                opacity: 0,
                x: initialX,
                y: initialY,
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: delay,
                    duration: duration,
                    ease: "easeOut",
                    staggerChildren: 0.1,
                },
            },
        },
    };
    return (
        <>
            <motion.div
                initial="initial"
                variants={variants.fadeIn}
                whileInView="animate"
                viewport={{ once: renderOnce }}
            >
                {children}
            </motion.div>
        </>
    );
}