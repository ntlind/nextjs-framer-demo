import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
export default ({ isOpen, setIsOpen, path01Variants, path02Variants, path01Controls, path02Controls, textVariants, textControls, onClick }) => {

    return (
        <button onClick={onClick} className="flex flex-row items-center justify-center">
            <motion.div initial="initial"
                animate={textControls}
                className="mx-4">
                Menu
            </motion.div>
            <svg width="28" height="28" viewBox="0 0 24 24">
                <motion.path
                    {...path01Variants.closed}
                    animate={path01Controls}
                    transition={{ duration: 0.2 }}
                    stroke="#000000"
                />
                <motion.path
                    {...path02Variants.closed}
                    animate={path02Controls}
                    transition={{ duration: 0.2 }}
                    stroke="#000000"
                />
            </svg>
        </button>
    );
};
