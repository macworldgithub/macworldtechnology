import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
    { src: "/logo1.png" },
    { src: "/logo2.png" },
    { src: "/logo3.png" },
    { src: "/logo4.png" },
    { src: "/logo5.png" },
    { src: "/logo6.png" },
    { src: "/logo7.png" },

    { src: "/logo8.png", big: true },
    { src: "/logo9.png", big: true },
    { src: "/logo5.png"},


];

// 👇 Always 5 per slide
const chunkSize = 5;
const logoGroups = [];
for (let i = 0; i < logos.length; i += chunkSize) {
    logoGroups.push(logos.slice(i, i + chunkSize));
}

const LogoSlider = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="w-full bg-white py-14">
            {/* Slider */}
            <div className="overflow-hidden max-w-7xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-5 items-center"
                    >
                        {logoGroups[index].map((logo, i) => (
                            <div key={i} className="flex justify-center">
                                <img
                                    src={logo.src}
                                    alt="brand"
                                    className={`object-contain transition ${logo.big
                                            ? "h-16 md:h-22"   // 👈 Bigger logos
                                            : "h-10 md:h-12"   // 👈 Normal logos
                                        }`}
                                />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-10 gap-2">
                {logoGroups.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-2 rounded-full transition ${index === i
                                ? "bg-blue-500 scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;