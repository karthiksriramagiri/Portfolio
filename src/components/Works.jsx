import React from 'react';
import { motion } from 'framer-motion';
import dungeoncrawler from '../assets/tech/dungeoncrawler.png'; // Adjust the path based on your project structure
import asl from '../assets/tech/asl.png';
import mgba from '../assets/tech/mgba.png';
import pictionair from '../assets/tech/pictionair.png';
import fra from '../assets/tech/fra.png';
import website from '../assets/tech/website.png';

// Assuming textVariant and styles are defined somewhere in your project
const textVariant = () => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
});

const styles = {
  sectionSubText: "uppercase text-gray-500 tracking-widest text-lg mb-2", // Adjusted for small caps and letter spacing
  sectionHeadText: "text-6xl font-extrabold mb-8 text-white" // Adjusted for large, bold text
};

const projects = [
  {
    title: "Portfolio Website",
    image: website,
    description: "The website you're on! I developed this portfolio website using a variety of modern web technologies. The site is built with React.js for a robust and efficient front-end structure, styled with Tailwind CSS for streamlined and customizable design. To enhance the visual appeal and interactivity, I incorporated Framer Motion for smooth animations and dynamic transitions!",
    githubLink: "https://github.com/yourusername/project-two"
  },
  {
    title: "American Sign Language Interpreter",
    image: asl,
    description: "I developed a real-time hand gesture recognition system using Python, OpenCV, and TensorFlow/Keras to classify American Sign Language (ASL) gestures. By debugging and customizing the TensorFlow/Keras environment, I was also able to boost the system's accuracy from 80% to 95%. This project demonstrates my experience in machine learning and computer vision!",
    githubLink: "https://github.com/karthiksriramagiri/ASL-Project/tree/main"
  },
  {
    title: "GBA Emulator Game",
    image: mgba,
    description: "I developed a 2D arcade game using C for the Game Boy Advance (GBA) emulator. I utilized Direct Memory Access(DMA) to optimize graphics rendering speed by up to 50% and Mode 3 for pixel-level real-time rendering. The game features gameplay mechanics, such as collision detection and a user interface that includes a live gameplay timer!.",
    githubLink: "https://github.com/yourusername/project-two"
  },
  {
    title: "Dungeon Crawler",
    image: dungeoncrawler,
    description: "I developed an immersive Dungeons game for Android using Android Studio and Java, showcasing both creativity and technical proficiency. The game features complex mechanics, optimized graphics, and sound to ensure an engaging user experience. It's also a retro-style game with a modern twist, offering a unique and nostalgic experience for players!",
    githubLink: "https://github.com/krish-shar/CS2340A_Team3"
  },
  {
    title: "PictionAiR",
    image: pictionair,
    description: "PictionAiR, an augmented reality (AR) Pictionary game features multi-player drawing capabilities. Developed using Swift and XCode, the game has a responsive user interface and includes a suite of over 50 drawable categories. My team and I leveraged OpenAI’s API, and also integrated Convolutional Neural Networks and ChatGPT to achieve a 90% accuracy rate in sketch recognition and interpretation!",
    githubLink: "https://github.gatech.edu/PictionAiR/PictionAiR"
  },
  {
    title: "Predictive Modeling for Financial Risk",
    image: fra,
    description: "I generated predictive models using machine learning for financial risk assessment, processing over 250,000 datasets to predict loan default probabilities with a model accuracy of 88%. I coordinated with cross-functional teams to ensure data integrity by collecting, wrangling, and cleaning extensive datasets using MS Excel. Additionally, I implemented interactive dashboards using Power BI to streamline the presentation of model results.",
    githubLink: "https://karthikeyasriramag.wixsite.com/loandefualting"
  }
  // Add more projects as needed
];

const ProjectCard = ({ project }) => {
  return (
    <motion.a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded overflow-hidden shadow-lg bg-[#1D1836] hover:bg-[#2A2546] transition duration-300 ease-in-out"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <img className="w-full h-64 object-cover" src={project.image} alt={project.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-white">{project.title}</div>
        <p className="text-secondary text-base">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
};

const Works = () => {
  return (
    <motion.div 
      id="projects"
      className="relative container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      <motion.div variants={textVariant()} initial="hidden" animate="visible">
        <p className={styles.sectionSubText}>WHAT I'VE DONE SO FAR</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Works;
