import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'; // Import styled-components
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const useTypingEffect = (words, typingSpeed = 100, deleteSpeed = 50, delayBetweenWords = 2000) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (isTyping) {
            if (subIndex < words[index].length) {
                setTimeout(() => {
                    setSubIndex(subIndex + 1);
                }, typingSpeed);
            } else if (subIndex === words[index].length) {
                setTimeout(() => {
                    setIsTyping(false);
                }, delayBetweenWords);
            }
        } else {
            if (subIndex > 0) {
                setTimeout(() => {
                    setSubIndex(subIndex - 1);
                }, deleteSpeed);
            } else {
                setIsTyping(true);
                setIndex((index + 1) % words.length);
            }
        }
        setText(words[index].substring(0, subIndex));
    }, [subIndex, index, isTyping, words, typingSpeed, deleteSpeed, delayBetweenWords]);

    return text;
};

const Hero = () => {
    const typingText = useTypingEffect([
        "Full-Stack Developer",
        "Programmer",
        "Backend Developer",
        "Android Developer",
        "Data Analyst",
        "ML Enthusiast",
        "Software Engineer",
        "Web Developer"
    ]);

    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[300px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white text-[48px] sm:text-[60px] md:text-[72px] lg:text-[80px] font-bold"
                    >
                        Hi, I'm <span className='text-[#915EFF]'>Karthik</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-[#915EFF] text-[42px] sm:text-[52px] md:text-[62px] font-medium"
                    >
                        I am a <span>{typingText}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-white-100 text-[29px] sm:text-[31px] md:text-[36px] font-light mt-2"
                    >
                        I'm also a computer science student at Georgia Tech <br className='sm:block hidden' />
                        and I love to code, trade stocks, and play video games!
                    </motion.p>
                    <motion.a
                        href="https://drive.google.com/file/d/1z6P0QndLXYYWJi_i56oCrFNGmRcBYGU9/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <ResumeButton>
                            Resume
                        </ResumeButton>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

const ResumeButton = styled.div`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  color: white;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;
  &:hover {
    filter: brightness(1.1);
  }
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

export default Hero;
