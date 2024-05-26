import {
  mobile,
  backend,
  creator,
  web,
  gt,
  pictionair,
  javascript,
  website,
  java,
  avs,
  typescript,
  html,
  mgba,
  fra,
  cprogram,
  sandeza,
  dungeoncrawler,
  asl,
  delta,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  ups,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: cprogram,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Delta Air Lines",
    icon: delta,
    iconBg: "#FFFFFF",
    date: "August 2024 - December 2024",
    points: [
      "Incoming Fall 2024 Intern",
    ],
  },
  {
    title: "Data Science / Software Engineering Intern",
    company_name: "United Parcel Service",
    icon: ups,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Present",
    points: [
      "Incoming Summer 2024 Intern",
    ],
  },

  {
    title: "Undergraduate Research Intern",
    company_name: "Georgia Institute of Technology",
    icon: gt,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - May 2024",
    points: [
      "Utilized Large Language Models (LLMs) with a focus on Prompt Engineering and Chain-of-Thought methodologies to effectively describe diverse driving scenarios.",
      "Generated and guided autonomous vehicle reactions through the application of LLMs, ensuring realistic and adaptive responses in various driving environments.",
      "Applied Free-shot/Zero-shot learning techniques to enhance the capabilities of LLMs in addressing dynamic challenges within the driving environment.",
      "Simulated autonomous vehicle reactions, showcasing a comprehensive understanding of their practical implications in the field of autonomous vehicle technology.",
    ],
  },

  {
    title: "Front End Developer Intern",
    company_name: "Sandeza.io",
    icon: sandeza,
    iconBg: "#FFFFFF",
    date: "May 2023 - December 2023",
    points: [
      "Built a visually engaging and responsive website for Sandeza using Webflow, HTML, and CSS, resulting in a modern online presence that effectively showcased the company’s products and services.",
      "Ensured cross-browser compatibility and optimized mobile responsiveness, leading to a 15% increase in user engagement and a 25% improvement in session duration across all devices and browsers."      ,
    ],
  },
  {
    title: "Data Analyst/ML Intern",
    company_name: "AVS Academy",
    icon: avs,
    iconBg: "#f8f8f8",
    date: "July 2021 - February 2022",
    points: [
      "Developed predictive models using Machine Learning for financial risk assessment, processing over 250,000 datasets to predict loan default probabilities with a model accuracy of 88%.",
      "Coordinated with cross-functional teams to ensure data integrity by collecting, wrangling, and cleaning extensive datasets using MS Excel and implemented interactive dashboards using Power BI to streamline model results.",
    ],
  }
 
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };