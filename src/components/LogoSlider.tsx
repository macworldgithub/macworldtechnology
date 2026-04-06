import { motion } from "framer-motion";

const logos = [
  { src: "/logo1.png" },
  { src: "/logo2.png" },
  { src: "/logo3.png" },
  { src: "/logo4.png" },
  { src: "/logo5.png" },
  { src: "/logo6.png" },
  { src: "/logo7.png" },
  { src: "/logo8.png" },
  { src: "/logo9.png" },
];

const LogoSlider = () => {
  // Duplicate logos for infinite loop effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Top Brands That Have Trusted Us
        </h2>
        <p className="text-gray-400 text-lg">
          Join the league of successful businesses that trust OmnisuitAI!
        </p>
      </div>

      <div className="overflow-hidden relative">
        {/* Gradient overlays for smooth fading effect on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex justify-center items-center w-32 md:w-40 lg:w-48">
              <img
                src={logo.src}
                alt="brand"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                style={{
                  filter: "drop-shadow(0.5px 0.5px 0px rgba(255,255,255,0.3)) drop-shadow(-0.5px -0.5px 0px rgba(255,255,255,0.3))"
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;

