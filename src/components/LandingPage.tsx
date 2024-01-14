import React from "react";
import Image from "next/image";
import { ScrollButton } from "./Buttons";
import { outfit } from "../app/fonts";
import DownArrow from "../assets/down-arrow2-svgrepo-com.svg";

const LandingPage = React.forwardRef((props, ref) => {
  return (
    <main
      {...props}
      ref={ref as any}
      className="w-full h-screen items-center justify-center"
      style={{ position: "sticky", top: "0" }}
    >
      <Image
        alt="hero image"
        src="/assets/richard-horvath-_nWaeTF6qo0-unsplash.jpg"
        layout="fill"
        objectFit="cover"
      />
      {/* <Logo className=" ml-8 absolute top-0 left-0 h-12 z-10 m-4 svg-midPrimary" /> */}
      <div className="h-full absolute bottom-0 right-0 top-0 left-0 flex">
        <div className="relative justify-center align-center h-full w-full flex flex-col  text-center">
          <h1
            style={{ color: "#c7bcf6", fontWeight: 300 }}
            className={`mb-2 uppercase leading-none md:mb-3 landing-title font-extralight ${outfit.className}`}
          >
            Izabelle Wilding
          </h1>
          <h1
            className={`mb-3 relative text-xl sm:text-2xl leading-none md:mb-3 ml-3 text-white opacity-70 ${outfit.className}`}
          >
            Software Engineer - UI/UX Specialist
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
