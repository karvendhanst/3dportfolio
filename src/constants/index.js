import {
  css,
  express,
  github,
  html,
  javascript,
  mongodb,
  nodejs,
  react,
  redux,
  tailwindcss,
  bootstrap,
  sql
} from "../assets/icons";

// Import project images
import p1 from "../assets/images/project1.png";
import p2 from "../assets/images/project2.png";
import p3 from "../assets/images/project3.png";
import p4 from "../assets/images/project4.png";
import p5 from "../assets/images/project5.png";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/karvendhanst/",
  },
];

export const projects = [
  {
    name: "React Movie App",
    description:
      "A React application that users to View Trending movies, TV series, Web series Latest and Trending . Its a Dynamic Web Application using TMDB API to Fetch Data",
    image: p1,
    liveUrl: "karvendhan-react-moviesite.vercel.app/",
    sourceCode: "https://github.com/karvendhanst/React-movie-website",
  },
  {
    name: "Tour and Travel App",
    description:
      "Tour and Travel website using React and Bootstrap . React application that users to View Tours Packages and Locations to View with Filtering Options with Responsive Design",
    image: p2,
    sourceCode: "https://github.com/karvendhanst/react-travel-app",
    liveUrl: "https://karvendhanst.github.io/react-travel-app",
  },
  {
    name: "Zomato Clone",
    description:
      "Food Ordering Website Like Zomato Using HTML, CSS , Bootstrap and Javascript with Responsive Design and Cart Functionlity with Mathematical operations",
    image: p3,
    sourceCode: "https://github.com/karvendhanst/foodorderapp",
    liveUrl: "https://karvendhanst.github.io/foodorderapp",
  },
  {
    name: "Youtube Clone",
    description:
        "A Responsive Youtube Clone website using HTML, CSS with Fixed Sidebar . Used iframe to users to view a Youtube Video in Our Site Directly without moving Youtube",
    image: p4,
    sourceCode: "https://github.com/karvendhanst/youtubeclone",
    liveUrl:
      "https://karvendhanst.github.io/youtubeclone",
  },
  {
    name: "Organic Shop",
    description:
        "Fruits and Vegetables Online Ecommerce Website Using HTML and CSS. This App Helps user to Buy Vegetables and Fruits Online. with interactive and Responsive Design",
    image: p5,
    sourceCode: "https://github.com/karvendhanst/organicshop",
    liveUrl: "https://karvendhanst.github.com/organicshop",
  },
];

