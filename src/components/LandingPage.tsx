import React from "react";
import Splashes from "./Splashes";
import Logo from "../assets/text-logo2.svg";
import Arrow from "../assets/arrow4-black.svg";
import { ScrollButton } from "./Buttons";
// import SocialIcons from "../components/SocialIcons.tsx";
// import SEO from "./seo"
import Image from "next/image";
import { outfit } from "../app/fonts";
import DownArrow from "../assets/down-arrow2-svgrepo-com.svg";

const LandingPage = React.forwardRef((props, ref) => {
  return (
    <main
      {...props}
      ref={ref as any}
      className=" w-full h-screen items-center justify-center"
      style={{ position: "sticky", top: "0" }}
    >
      <Image
        alt="hero image"
        src="/assets/richard-horvath-_nWaeTF6qo0-unsplash.jpg"
        layout="fill"
        objectFit="cover"
      />
      <Logo className="absolute top-0 left-0 h-12 z-10 m-4" />
      <div className="relative w-full h-screen" />
      <div className="absolute opacity-25 bottom-0 right-0 top-0 left-0" />
      <div className=" w-full h-full absolute bottom-0 right-0 top-0 left-0 flex">
        {/* <Splashes /> */}
        <div className="ml-6 relative justify-center h-full w-full flex flex-col px-4 ">
          {/* <div className="inline-block"> */}
          <h1
            style={{ color: "#b1a8ea", fontSize: "100px" }}
            className="mb-2 uppercase relative text-3xl leading-none md:mb-3"
          >
            Izabelle Wilding
          </h1>
          <h1
            className={`mb-3 relative text-2xl md:text-3xl leading-none md:mb-3 whitespace-nowrap ${outfit.className}`}
          >
            Software Engineer - UX Specialist -
          </h1>
        </div>
      </div>
      <ScrollButton
        linkto="projects"
        content={
          <div className="flex absolute justify-center mt-8 md:mt-12 bottom-10 left-0 right-0 ">
            <DownArrow />
          </div>
        }
      />
    </main>
  );
});

export default LandingPage;
