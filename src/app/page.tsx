"use client";

import React, { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import LandingPage from "../components/LandingPage";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const landingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        setSticky(aboutRef.current.getBoundingClientRect().top <= 80);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHeaderNavigation = (navitem: string) => {
    if (navitem === "landing" && landingRef.current) {
      landingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (navitem === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (navitem === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (navitem === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <Header isSticky={isSticky} onNav={handleHeaderNavigation} />
      <LandingPage ref={landingRef} />
      <div className="relative bg-white z-20">
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>
    </Layout>
  );
};

export default IndexPage;
