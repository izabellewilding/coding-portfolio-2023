import React from "react";
import "../styles/all.scss";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    date: "January 2024",
    cardImage: "/assets/usgs-dashboard.png",
    backgroundcolor: "#3139c7",
    cardtitle: "Global Earthquake Data Dashboard - NextJS",
    sitelink: "https://usgs-earthquake-dashboard.netlify.app/",
    gitlink: "https://github.com/izabellewilding/earthquake-dashboard",
    listItems: [
      "USGS API integration.",
      "Realtime data feed earthquakes across the world.",
      "Data visualization with Chart.js charts.",
    ],
  },
  {
    date: "April - July 2020",
    cardImage: "/assets/pottery-ecommerce-homepage.png",
    backgroundcolor: "#000344",
    cardtitle: "eCommerce - Using Stripe and Gatsby",
    sitelink: "https://pottery-ecommerce.netlify.app/",
    gitlink: "https://github.com/izabellewilding/gatsby-stripe-ecommerce",
    listItems: [
      "Stripe Checkout redirect for secure payments.",
      "Loads Stripe products from Stripe API at build time using SSG.",
      "Custom built shopping cart built with React Context provider.",
    ],
  },
  {
    date: "November 2021",
    cardImage: "/assets/avatars.png",
    backgroundcolor: "#2249c2",
    cardtitle: "Generative Art Node CLI tool",
    gitlink: "https://github.com/izabellewilding/avatar-generator",
    listItems: [
      "Custom built node CLI tool.",
      "Generates avatars from a combination of random SVG assets.",
      "Made as part of an NFT project.",
    ],
  },
  {
    date: "May 2022",
    cardImage: "/assets/memory-card-game.png",
    backgroundcolor: "#4c5de1",
    cardtitle: "Memory Card Game",
    gitlink: "https://github.com/izabellewilding/memory-card-game-react",
    sitelink: "https://cool-vacherin-fe385b.netlify.app/",
    listItems: [
      "An interactive card game built using React & Zustand",
      "React Spring animations for card flip.",
      "Game logic in a single Zustand store.",
    ],
  },
  {
    date: "August 2020",
    cardImage: "/assets/antique-society.png",
    backgroundcolor: "#000344",
    cardtitle: "Technical Test for Kerve Creative (Bath)",
    gitlink: "https://github.com/izabellewilding/Kerve-Test-Antiques",
    sitelink: "https://kerve-test.netlify.app/",
    listItems: [
      "Website built with flat HTML, SASS, and JavaScript.",
      "Responsive to 4 key breakpoints (small mobile to large screen).",
      "JavaScript and CSS animations.",
    ],
  },
  {
    date: "July 2020",
    cardImage: "/assets/todo-app.png",
    backgroundcolor: "#000344",
    cardtitle: "Tdolist - Todo app built with React Hooks",
    gitlink: "https://github.com/izabellewilding/react-todo-app",
    sitelink: "https://tdolist.netlify.app/",
    listItems: [
      "Progressive Web App Configured (Works Offline).",
      "Modern User Interface.",
      "Saves todos in browser storage.",
    ],
  },
  {
    date: "July 2020",
    cardImage: "/assets/registration-form.png",
    backgroundcolor: "#643ede",
    cardtitle: "React Hooks Registration Form",
    gitlink: "https://github.com/izabellewilding/registration-form",
    sitelink: "https://react-registration-form.netlify.app/",
    listItems: [
      "Follows HTML and accessibility best practices with password and email validation.",
      "CSS-in-JS styled-component styling.",
      "Unit testing with React-Testing Library.",
    ],
  },
];

const Projects: React.FC = React.forwardRef<any, any>((props, ref) => {
  return (
    <main ref={ref as any} {...props} className="w-full bg-zinc-100 ">
      <div className="relative py-20 w-full min-h-screen max-w-screen-xl m-auto flex justify-center items-center">
        <div className="header-offset" />
        <div className="inline-block pb-16 w-full p-4 md:p-10">
          <h1
            className="uppercase text-md  text-blue-950"
            style={{ letterSpacing: 3 }}
          >
            Selected Work
          </h1>
          <h2
            className=" text-4xl text-blue-950"
            style={{ paddingBottom: "10vh" }}
          >
            Take a Look
          </h2>
          <section className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 justify-between">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
});

export default Projects;
