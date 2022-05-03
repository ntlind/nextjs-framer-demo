import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


export default function SlideInViewportTransition({
    children,
    delay = 0,
    duration = .85,
    initialX = 0,
    fontSize = "100%",
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
                    ease: [0.85, 0, 0.15, 1],
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
                    viewport={{ once: true }}
                    className="text-contrast"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}