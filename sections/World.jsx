'use client';

import { motion } from 'framer-motion';

import { useState } from 'react';

import styles from '../styles';

import { staggerContainer, fadeIn } from '../utils/motion';

import { TitleText, TypingText } from '../components';

const World = () => {
  let [num, setNum] = useState(0);
  // const rand = () => (
  //   Math.floor(Math.random() * 1000)
  // );
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        vieport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="| People In the world"
          textStyles="text-center"
        />
        <TitleText
          title={(
            <>
              Track friends around you
              and invite them to play together in
              the same world
            </>
          )}
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] rounded-full
          p-[6px] bg-[#5d6680]"
          >
            <img
              src="people-01.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] rounded-full
          p-[6px] bg-[#5d6680]"
          >
            <img
              src="people-02.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] rounded-full
          p-[6px] bg-[#5d6680]"
          >
            <img
              src="people-03.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] rounded-full
          p-[6px] bg-[#5d6680]"
          >
            <img
              src="people-03.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-10 left-[60%] w-[196px] h-[150px] rounded-[45px]
          p-[8px] bg-gradient-to-r from-gray-500 bg-[#5d6680] opacity-90 glassmorphism
            hover:cursor-pointer"
            onMouseEnter={() => setNum(num + Math.floor(Math.random() * 1000))}
            onMouseLeave={() => setNum(setInterval(() => (
              num !== 0 ? num - 10 : null
            ), 5000))}
          >
            <img
              src="potrait-02.png"
              alt="people"
              className="w-full h-full rounded-[40px]"
            />
            <p className="mt-[-40px] font-bold text-white ml-[5px] ">Hawkins Labs</p>
            <img
              src="people-01.png"
              alt="people"
              className="w-1/4 h-1/4 ml-[30px] mt-[-60px]"
            /><img
              src="people-02.png"
              alt="people"
              className="w-1/4 h-1/4 ml-[10px] mt-[-32px]"
            />
            <p className="mt-[-25px] font-semi-bold text-sm text-white ml-[75px]">+{num}users</p>
          </div>
          <div className="absolute top-1/2 left-[10%] w-[196px] h-[150px] rounded-[45px]
          p-[8px] bg-gradient-to-r from-gray-500 bg-[#5d6680] opacity-90 glassmorphism hover:cursor-pointer"
            onMouseEnter={() => setNum(num + Math.floor(Math.random() * 1000))}
            onMouseLeave={() => setNum(setInterval(() => (
              num !== 0 ? num - 10 : null
            ), 5000))}
          >
            <img
              src="potrait-01.png"
              alt="people"
              className="w-full h-full rounded-[40px]"
            />
            <p className="mt-[-40px] font-bold text-white ml-[5px] ">The Upside Down</p>
            <img
              src="people-01.png"
              alt="people"
              className="w-1/4 h-1/4 ml-[30px] mt-[-60px]"
            /><img
              src="people-02.png"
              alt="people"
              className="w-1/4 h-1/4 ml-[10px] mt-[-32px]"
            />
            <p className="mt-[-25px] font-semi-bold text-sm text-white ml-[75px]">+{num + Math.floor(Math.random() + 300)} users</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
