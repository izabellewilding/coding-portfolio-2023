import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export const ScrollButton = (props: any) => {
  console.warn(props.linkto);
  return (
    <ScrollLink
      to={props.linkto}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className="p-3 w-full DM-sans text-lg "
      role="button"
    >
      {props.content}
    </ScrollLink>
  );
};

export const NavigationButton = ({ ...props }) => {
  return (
    <Link
      href={props.linkto}
      className="p-3 w-full DM-sans text-lg "
      role="button"
    >
      <div>{props.content}</div>
    </Link>
  );
};

export const TextButton = ({ ...props }) => {
  return (
    <div className="p-3 rounded-full text-lightPrimary uppercase DM-sans text-lg bg-secondary button-hover ">
      {props.text}
    </div>
  );
};
