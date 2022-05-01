import { motion, AnimatePresence } from "framer-motion";

export default function SlideInTransition({
    children,
    delay = 0.55,
    duration = 0.8,
    initialX = 0,
    fontSize = "100%",
    renderOnce = true,
}) {
    const variants = {
        fadeIn: {
            initial: {
                opacity: 1,
                x: initialX,
                y: fontSize,
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: delay,
                    duration: duration,
                    ease: [0, 0.55, 0.45, 1],
                    staggerChildren: 0.1,
                },
            },
        },
    };
    return (
        <div className="overflow-hidden mt-4">
            <AnimatePresence>
                <motion.div
                    initial="initial"
                    variants={variants.fadeIn}
                    whileInView="animate"
                    viewport={{ once: renderOnce }}
                    className="text-contrast"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}