import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/suib-logo.PNG";
import InfiniteScroll from "./InfiniteScroll";

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

  return (
    <main className="relative">
      <div className="max-w-[65rem] mx-auto">
        <div className="flex flex-col justify-center items-center relative">
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

          <h1 className="absolute left-0 right-0 mx-auto md:-bottom-4 -bottom-10 arc uppercase font-bold text-[5rem] text-center text-white">
            $SUIBA
          </h1>
        </div>
        <div className="flex gap-4 items-center justify-center mt-10">
          <FaXTwitter className="text-7xl  bg-white p-3 flex justify-center items-center rounded-full" />
          <FaTelegramPlane className="text-7xl  bg-white p-3 flex justify-center items-center rounded-full" />
        </div>
      </div>
      <InfiniteScroll />
    </main>
  );
};

export default HeroSection;
