import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import styled from "styled-components";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImage from '../assets/profileImage.png';

const bounceTransition = {
  duration: 0.6,
  yoyo: Infinity,
  ease: "easeInOut",
};

const bounceVariants = {
  initial: { y: 0 },
  animate: { y: ["0%", "-20%", "0%"] },
};

const borderVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1 } },
};

const textBounceVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: ["0%", "-20%", "0%"],
    transition: {
      duration: 0.6,
      yoyo: Infinity,
      ease: "easeInOut"
    }
  }
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[400px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center">
\      <div className="md:w-1/2 z-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}> Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a Full-Stack Developer with a passion for building scalable and efficient web applications. 
          I have experience working with various programming languages and frameworks and I'm always eager to learn new things and explore new technologies. 
          I'm currently looking for opportunities to work on exciting projects and collaborate with talented individuals! Feel free to reach out to me if you have any questions or would like to work together! I'm looking forward to hearing from you! 🚀
        </motion.p>
      </div>
      <motion.div
        variants={bounceVariants}
        initial="initial"
        animate="animate"
        transition={bounceTransition}
        className="relative md:w-1/2 flex justify-center mt-10 md:mt-0 z-10"
      >
        <div className="relative">
          <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}>
            <motion.div
              variants={borderVariants}
              initial="hidden"
              animate="visible"
              className="rounded-full p-2"  // Slightly thicker border
              style={{
                background: 'linear-gradient(45deg, #8B0000, #8B008B, #4B0082, #000080, #00008B)',
              }}
            >
              <motion.img 
                src={profileImage} 
                alt="Profile" 
                className="w-80 h-80 rounded-full object-cover"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1, type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </Tilt>
          <motion.h3
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2, color: "#FF69B4" }}
            className="absolute top-[-40px] text-center w-full text-2xl font-bold text-pink-500 cursor-pointer"
          >
            Hover over me!
          </motion.h3>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
