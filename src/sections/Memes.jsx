import { motion } from "framer-motion";
import suib1 from "../assets/suib-1.webp";
import suib2 from "../assets/suib-2.webp";
import suib3 from "../assets/suib-3.webp";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Memes = () => {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full py-10">
      {/* <h2 className="text-center text-4xl font-bold mb-8 text-white">Memes</h2> */}
      <div className="flex flex-wrap justify-center gap-4">
        <motion.img
          src={suib1}
          alt="Meme 1"
          className="w-full md:w-1/3 h-auto rounded-lg"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animation occurs only once when in view
        />
        <motion.img
          src={suib2}
          alt="Meme 2"
          className="w-full md:w-1/3 h-auto rounded-lg"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animation occurs only once when in view
        />
        <motion.img
          src={suib3}
          alt="Meme 3"
          className="w-full md:w-1/3 h-auto rounded-lg"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animation occurs only once when in view
        />
      </div>
      <div className="flex items-center gap-6 justify-center">
        <FaXTwitter className="text-7xl  bg-white p-3 flex justify-center items-center rounded-full" />
        <FaTelegramPlane className="text-7xl  bottom-10 bg-white p-3 flex justify-center items-center rounded-full" />
      </div>
    </div>
  );
};

export default Memes;
