import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/suib-logo.PNG";

const HeroSection = () => {
  // Variants for animations
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 1 },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 1.5 },
    },
  };

  const contractBoxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 2 },
    },
  };

  return (
    <main className="relative">
      <div className="max-w-[65rem] mx-auto">
        <div className="flex flex-col justify-center items-center relative">
          <div className="relative">
            <motion.img
              src={logo}
              alt="suib"
              className="mx-auto"
              height={400}
              width={600}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            />
            <h1 className="absolute left-0 right-0 mx-auto md:-bottom-5 -bottom-14 arc uppercase font-bold text-[5rem] text-center text-white">
              $SUIB
            </h1>
          </div>
          <FaXTwitter className="text-7xl absolute left-[20%] bottom-10 bg-white p-3 flex justify-center items-center rounded-full" />
          <FaTelegramPlane className="text-7xl absolute right-[20%] bottom-10 bg-white p-3 flex justify-center items-center rounded-full" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
