import { React, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Hamburger from "./Hamburger.tsx"


const links = [
    { name: "Home", to: "hero", id: 1 },
    { name: "About", to: "about", id: 2 },
    { name: "Portfolio", to: "portfolio", id: 3 },
    { name: "Services", to: "services", id: 4 },
    { name: "Contact", to: "contact", id: 5 }
];

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: 1
        }
    }
};

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const path01Controls = useAnimation();
    const path02Controls = useAnimation();
    const textControls = useAnimation()

    const path01Variants = {
        open: { d: "M3.06061 2.99999L21.0606 21" },
        closed: { d: "M0 9.5L24 9.5" }
    };

    const path02Variants = {
        open: { d: "M3.00006 21.0607L21 3.06064" },
        moving: { d: "M0 14.5L24 14.5" },
        closed: { d: "M0 14.5L15 14.5" }
    };

    const textVariants = {
        fadeOut: {
            opacity: 0,
            y: 0,
            transition: {
                delay: 0,
                duration: .25,
                ease: "easeOut",
            },
        },
        fadeIn: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0,
                duration: 1,
                ease: "easeOut",
            },
        },
    }

    const onClick = async () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            await path02Controls.start(path02Variants.moving);
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
            textControls.start(textVariants.fadeOut);
        } else {
            path01Controls.start(path01Variants.closed);
            await path02Controls.start(path02Variants.moving);
            path02Controls.start(path02Variants.closed);
            textControls.start(textVariants.fadeIn);
        }
    };

    function ScrollButton({ text, section, callback = null }) {

        const scrollTo = (ref) => {
            let element = document.getElementById(section);
            element && element.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        function onClick() {
            if (callback) {
                callback()
                scrollTo(section)
            }
            else {
                scrollTo(section)
            }
        }

        return (
            <button className="cursor-pointer" onClick={onClick}>
                {text}
            </button>
        );
    };

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{
                            width: 450
                        }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.7, duration: 0.2 }
                        }}
                        className='fixed text-4xl text-white bg-theme top-0 left-0 z-10 h-screen'
                    >
                        <motion.div
                            className="my-24 mx-12 space-y-12"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            {links.map(({ name, to, id }) => (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                    className="block"
                                    key={id}
                                >
                                    <ScrollButton text={name} section={to} callback={onClick} />
                                </motion.div>

                            ))}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                                className="block absolute bottom-24 text-xl">
                                <button onClick={onClick}>Close Menu</button>
                            </motion.div>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} path01Variants={path01Variants} path02Variants={path02Variants} path01Controls={path01Controls} path02Controls={path02Controls} textVariants={textVariants} textControls={textControls} onClick={onClick} />
        </div>
    );
}