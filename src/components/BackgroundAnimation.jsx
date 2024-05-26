import React from 'react';
import { motion } from 'framer-motion';

const generateDots = () => {
  const dots = [];
  for (let i = 0; i < 50; i++) { // Increased the number of dots for a denser animation
    const speed = Math.random() * 5 + 3; // Random speed between 3 and 8 seconds for consistency
    const size = Math.random() * 4 + 3; // Random size between 3 and 7 pixels

    dots.push(
      <motion.div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        initial={{ x: '-100%' }} // Start from just outside the left edge
        animate={{ x: '100vw' }} // Move to just outside the right edge
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      />
    );
  }
  return dots;
};

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {generateDots()}
    </div>
  );
};

export default BackgroundAnimation;
