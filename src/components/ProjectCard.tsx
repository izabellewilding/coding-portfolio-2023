import React from "react";
import Github from "../assets/github-darkRed.svg";
import Home from "../assets/add_to_home_screen-24px.svg";
import Image from "next/image";

const LinkButton = ({ icon, href = "/", label }: any) => {
  return (
    <a
      href={href}
      className="flex flex-row items-center text-sm  DM-sans text-white"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="view on Guthub"
    >
      {icon}
      <p className="mr-2">{label}</p>
    </a>
  );
};

const ProjectCard = ({ siteLink = "/", ...props }) => {
  return (
    <div
      {...props}
      className="project-card shadow-lg DM-sans w-full max-w-screen relative min-w-full h-full"
    >
      <section
        className="relative bg-gray-800 text-white p-5 h-full lg:p-10 flex flex-col md:justify-between "
        style={{
          backgroundColor: `${props.backgroundcolor}`,
        }}
      >
        <div>
          <div className="quicksand quicksand-letter-spacing text-sm  uppercase">
            {props.date}
          </div>
          <div className="font-bold text-3xl mb-6">{props.cardtitle}</div>
          <ul className=" text-gray-200 text-lg list-disc p-4">
            <li> {props.listitem1}</li>
            <li> {props.listitem2}</li>
            <li> {props.listitem3}</li>
          </ul>
        </div>
        <section className="flex flex-row md:flex-col">
          {props.sitelink && (
            <LinkButton
              href={props.sitelink}
              icon={<Home className="button-icons svg-lightPrimary" />}
              label="View"
            />
          )}
          <LinkButton
            href={props.gitlink}
            icon={<Github className="button-icons svg-lightPrimary" />}
            label="Source Code"
          />
        </section>
      </section>{" "}
      <section className="project-image-wrapper  rounded-md">
        <Image
          src={props.cardImage}
          alt="Project image"
          className="project-image rounded-md"
          layout="fill"
          objectFit="cover"
        />
      </section>
    </div>
  );
};

export default ProjectCard;
