import { motion } from "framer-motion";
import suib from "../assets/suib-1.webp";

function About() {
  return (
    <section className="py-28">
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
              className="text-[1.2rem] md:text-[1.2rem] lg:text-[1.5rem] mb-4 text-white text-center md:text-left leading-loose"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Meet <span className="font-bold">$SUIBA</span>, the new pup on the
              block! . <span className="font-bold">$SUIBA</span> is the perfect
              blend of fun and finance, inspired by the legendary Shiba Inu but
              now on $SUI ecosystem for people who missed holding the first one.
              It&apos;s not just about making profits, it&apos;s about being
              part of a community that believes in the power of
              decentralization. Join the pack, let&apos;s take{" "}
              <span className="font-bold">$SUIBA</span> to the moon ! Oh I mean
              let’s dive into the profits ocean , cause{" "}
              <span className="font-bold">$SUIBA</span> network is a dip ocean
              chain.
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
