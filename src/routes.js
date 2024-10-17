// routes.js

import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services/index.js";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Gallery from "./Gallery/Gallery.jsx";
import ProjectDetails from "./components/ProjectDetails";

const routes = [
  {
    name: "Home",
    route: "/",
    component: <HeroSection />,
  },
  {
    name: "About",
    route: "/about",
    component: <About />,
  },
  {
    name: "Services",
    route: "/services",
    component: <Services />,
  },
  {
    name: "Projects",
    route: "/projects",
    component: <Projects />,
  },
  {
    name: "Contact",
    route: "/contact",
    component: <Contact />,
  },
  {
    name: "Experience",
    route: "/experience",
    component: <Experience />,
  },
  {
    name: "Education",
    route: "/education",
    component: <Education />,
  },
  {
    name: "Gallery",
    route: "/gallery",
    component: <Gallery />,
  },
  {
    name: "Project Details",
    route: "/project-details",
    component: <ProjectDetails />,
  },
];

export default routes;
