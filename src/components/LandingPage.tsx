import React from "react";
import Splashes from "./Splashes";
import Logo from "../assets/text-logo2.svg";
import Arrow from "../assets/arrow4-black.svg";
import { ScrollButton } from "./Buttons";
// import SocialIcons from "../components/SocialIcons.tsx";
// import SEO from "./seo"

const LandingPage = React.forwardRef((props, ref) => {
  return (
    <main
      {...props}
      ref={ref as any}
      className=" w-full h-screen items-center justify-center"
      style={{ position: "sticky", top: "0" }}
    >
      <Logo className="absolute top-0 left-0 h-12 z-10 m-4" />
      <div className="gradient relative w-full h-screen"> </div>
      <div className=" absolute opacity-25 bottom-0 right-0 top-0 left-0" />
      <div className=" w-full h-full absolute bottom-0 right-0 top-0 left-0 flex">
        <Splashes />
        <div className="relative h-full w-full mx-auto items-center justify-center flex flex-col lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div style={{ maxWidth: "580px" }} className="inline-block">
            <h1 className="mb-2 relative DM-sans text-3xl md:text-6xl text-darkPrimary leading-none md:mb-3 whitespace-nowrap">
              Hi, I&apos;m
              <span className="text-teal-100"> Izabelle Wilding</span>
            </h1>
            <h1 className="mb-3 relative DM-sans text-3xl md:text-6xl text-darkPrimary leading-none md:mb-3 whitespace-nowrap">
              Frontend Developer
            </h1>
          </div>
          <ScrollButton
            linkto="projects"
            content={
              <div className="flex justify-center mt-8 md:mt-12">
                {<Arrow className=" h-8 md:h-12 bounce" />}
              </div>
            }
          />
        </div>
      </div>
    </main>
  );
});

export default LandingPage;
