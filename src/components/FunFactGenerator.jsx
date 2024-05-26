import React, { useState } from 'react';
import { motion } from 'framer-motion';

const funFacts = [
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
  "A day on Venus is longer than a year on Venus.",
  "Bananas are berries, but strawberries aren't.",
  "Humans share 50% of their DNA with bananas.",
  "There are more stars in the universe than grains of sand on all the Earth's beaches.",
  "A single cloud can weigh more than a million pounds.",
  "Octopuses have three hearts.",
  "Butterflies can taste with their feet.",
  "The Eiffel Tower can be 15 cm taller during the summer.",
  "Koalas have fingerprints almost identical to humans.",
  "Sloths can hold their breath longer than dolphins can.",
  "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
  "An ostrich's eye is bigger than its brain.",
  "Sea otters hold hands when they sleep to keep from drifting apart.",
  "A small child could swim through the veins of a blue whale.",
  "Rabbits and parrots can see behind themselves without moving their heads.",
  "A flock of crows is known as a murder.",
  "The unicorn is the national animal of Scotland.",
  "Bees sometimes sting other bees.",
  "Apples, potatoes, and onions all taste the same if you eat them with your nose plugged.",
  "A group of flamingos is called a 'flamboyance'.",
  "There are more trees on Earth than stars in the Milky Way.",
  "A day on Mercury is twice as long as a year on Mercury.",
  "Horses and cows sleep standing up.",
  "A snail can sleep for three years.",
  "The heart of a shrimp is located in its head.",
  "Elephants are the only animals that can't jump.",
  "A rhinoceros's horn is made of hair.",
  "It is impossible for most people to lick their own elbow.",
  "A crocodile cannot stick its tongue out.",
  "A shrimp's heart is in its head.",
  "Starfish do not have a brain.",
  "Polar bears have black skin under their white fur.",
  "Kangaroos can't walk backwards.",
  "A duck's quack doesn't echo, and no one knows why.",
  "An eagle can kill a young deer and fly away with it.",
  "Snakes can help predict earthquakes.",
  "A small child could swim through the veins of a blue whale.",
  "Gorillas burp when they are happy.",
  "Nearly three percent of the ice in Antarctic glaciers is penguin urine.",
  "Bats always turn left when leaving a cave.",
  "Dolphins sleep with one eye open.",
  "Penguins propose to their mates with a pebble.",
  "The shortest war in history lasted 38 minutes.",
  "A sneeze travels about 100 miles per hour.",
  "It is physically impossible for pigs to look up into the sky.",
  "A cat has 32 muscles in each ear.",
  "Tigers have striped skin, not just striped fur.",
  "Fleas can jump 350 times their body length.",
  "Most elephants weigh less than the tongue of a blue whale.",
  "Giraffes have no vocal cords.",
  "Cats have fewer toes on their back paws.",
  "A jellyfish is 95% water.",
  "The dot over the letter 'i' is called a tittle.",
  "Flamingos are born grey, not pink.",
  "A group of porcupines is called a prickle.",
  "The king of hearts is the only king in a deck of cards without a mustache.",
  "Bananas glow blue under black lights.",
  "Wombat poop is cube-shaped.",
  "An apple, potato, and onion all taste the same if you eat them with your nose plugged.",
  "The longest recorded flight of a chicken is 13 seconds.",
  "A goldfish has a memory span of three seconds.",
  "An octopus has three hearts and nine brains.",
  "A chameleon's tongue is twice the length of its body.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "A group of frogs is called an army.",
  "Some bamboo plants can grow almost a meter in just one day.",
  "Slugs have four noses.",
  "Only female mosquitoes bite.",
  "Koalas sleep up to 22 hours a day.",
  "The human nose can remember 50,000 different scents.",
  "A tarantula can live without food for more than two years.",
  "A newborn kangaroo is the size of a lima bean.",
  "Some octopuses lay 56,000 eggs at one time.",
  "The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.",
  "Sea otters hold hands when they sleep to keep from drifting apart.",
  "Mantis shrimps can punch with the force of a bullet.",
  "There's a species of jellyfish that is immortal.",
  "Elephants are the only mammals that can't jump.",
  "A group of ravens is called an 'unkindness'.",
  "The only letter that doesn't appear on the periodic table is 'J'.",
  "A baby octopus is about the size of a flea when it is born.",
  "The longest time between two twins being born is 87 days.",
  "A group of giraffes is called a 'tower'.",
  "There are more stars in the universe than grains of sand on Earth.",
  "A group of owls is called a 'parliament'.",
  "The tongue of a blue whale weighs as much as an elephant.",
  "The smell of freshly cut grass is actually a plant distress call.",
  "Goats have rectangular pupils in their eyes.",
  "A group of ferrets is called a 'business'.",
  "Cows have best friends and get stressed when they are separated.",
  "A swarm of 20,000 bees followed a car for two days because their queen was stuck inside.",
  "Pineapples take about two years to grow.",
  "Octopuses have blue blood.",
  "An ostrich's eye is bigger than its brain.",
  "Jellyfish are considered biologically immortal. They don't age and will never die unless they are killed.",
  "A blue whale's heart is the size of a small car.",
  
];

const FunFactGenerator = () => {
  const [funFact, setFunFact] = useState("");

  const getNewFunFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFunFact(funFacts[randomIndex]);
  };

  return (
    <motion.div
      className="flex flex-col items-center bg-black-100 p-8 rounded-2xl"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-white font-medium mb-4">Did You Know?</h3>
      <p className="text-white mb-4">{funFact || "Click the button to learn a fun fact!"}</p>
      <button
        onClick={getNewFunFact}
        className="bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-primary"
      >
        Get Fun Fact
      </button>
    </motion.div>
  );
};

export default FunFactGenerator;
