import { motion } from "framer-motion";
import suib from "../assets/suib-1.PNG";

function About() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[80rem] px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="lg:w-1/2 lg:pl-10 custom-paragraph">
            <motion.h2
              className=" text-[5rem] text-center md:text-left arc text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About
            </motion.h2>
            <motion.p
              className="text-[1.5rem] mb-4 text-white text-center md:text-left"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to $SUIB, the first Shiba Inu-themed meme coin on the Sui
              blockchain! Born from the fusion of internet culture and
              blockchain innovation, $SUIB is here to bring fun, community, and
              decentralized financial opportunities to the Sui ecosystem.
            </motion.p>
            <motion.p
              className="text-[1.5rem] text-white text-center md:text-left"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              At its core, $SUIB captures the playful spirit of Shiba Inu and
              pairs it with the cutting-edge technology of the Sui chain, known
              for its scalability, low fees, and lightning-fast transactions.
              Whether you’re a meme enthusiast, a crypto aficionado, or someone
              looking to join an exciting new community, $SUIB is the perfect
              token for you.
            </motion.p>
          </div>
          <motion.img
            src={suib}
            alt="BaseDoggo"
            className="w-full lg:w-[40%] mb-10 lg:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
