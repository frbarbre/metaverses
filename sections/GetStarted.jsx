'use client';

import { motion } from "framer-motion"

import styles from "../styles"
import { startingFeatures } from "../constants"
import { StartSteps, TitleText, TypingText } from "../components"
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion"

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col-reverse gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img 
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" textStyles={"text-center lg:text-left"}/>
        <TitleText title={<>Get started with just a few clicks</>} textStyles={"text-center lg:text-left"} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] mx-auto lg:mx-0">
          {startingFeatures.map((feature, index) => (
            <motion.div
              variants={fadeIn('up', 'tween', index * 0.5, 1)}
              key={feature}
            >
              <StartSteps 
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
