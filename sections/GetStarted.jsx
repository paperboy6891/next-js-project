'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import { StartSteps, TitleText, TypingText } from '../components';

import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      vieport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col
     gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="GET STARTED"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-0.75 flex-justify-center flex-col"
      >
        <TypingText title="| How Metaverses Works" />
        <TitleText title={<>Get started with <br /> just a few clicks</>} />
        <div className="mt-[34px]  flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, ind) => (
            <StartSteps
              key={feature}
              number={ind + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
