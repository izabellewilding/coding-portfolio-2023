import React from "react";
import Github from "../assets/github-darkRed.svg";
import Home from "../assets/add_to_home_screen-24px.svg";
import Image from "next/image";
import Link from "next/link";

interface LinkButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ icon, href = "/", label }) => {
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

interface ProjectCardProps {
  siteLink?: string;
  gitlink: string;
  backgroundcolor: string;
  date: string;
  cardtitle: string;
  listItems: string[];
  sitelink?: string;
  cardImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
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
          <div className="quicksand quicksand-letter-spacing text-sm uppercase">
            {props.date}
          </div>
          <div className="font-bold text-3xl mb-6">{props.cardtitle}</div>
          <ul className="text-gray-300 text-md list-disc p-4">
            {props.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
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
      <Link
        href={props.sitelink || props.gitlink}
        target="_blank"
        className="project-image-wrapper rounded-md"
      >
        <Image
          src={props.cardImage}
          alt="Project image"
          className="project-image rounded-md"
          layout="fill"
        />
      </Link>
    </div>
  );
};

export default ProjectCard;
