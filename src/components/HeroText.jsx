import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Good"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Dekstop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          Hello I'm Nizham
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Depeloper <br /> Dedicated to Crafting
          </motion.p>
          {/* <div>get flip word</div> */}
          <motion.div
            className="font-black text-white text-8xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Web Solution
          </motion.p>
        </div>
      </div>
      {/* MObile view */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="font-black text-white text-8xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="text-4xl font-medium"
        >
          Hello, I'm Nizham
        </motion.p>
        <div>
          <motion.p
            className="font-black text-white text-8xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-black text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div
            className="font-black text-white text-8xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="font-black text-white text-6xl relative h-24"
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-6xl"
            />
          </motion.div>
          <motion.p
            className="font-black text-white text-8xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-black text-neutral-300"
          >
            Web Aplications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
