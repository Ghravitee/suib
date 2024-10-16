import { motion } from "framer-motion";
import suib2 from "../assets/suib-2.webp";

const Tokenomics = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="w-full py-16 px-4 text-white"
      style={{ backgroundColor: "#73C2FB" }}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.img
          src={suib2}
          alt="Meme 2"
          className="w-full rounded-lg" // Add rounded corners
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animation occurs only once when in view
        />
        <div className="flex flex-col items-start w-full lg:w-[80%]">
          <motion.h2
            className="arc text-[3rem] lg:text-[5rem] text-center mb-4"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            TOKENOMICS
          </motion.h2>
          <div className="flex flex-col gap-4 w-full">
            {[
              { label: "Token Name", value: "$SUIBA" },
              { label: "Total Supply", value: "1,000,000,000" },
              { label: "Tax", value: "0%" },
              { label: "CA", value: "0x00000000000000000000" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="py-7 px-4 flex justify-start font-bold items-center bg-white rounded-md text-black text-2xl lg:text-4xl"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {item.label}: {item.value}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
