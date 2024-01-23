import React from "react";
import PropTypes from "prop-types";
import "../styles/bounce.scss";
import "../styles/fonts.scss";
import "../styles/imports.scss";
import "../styles/all.scss";
import "../styles/nav.scss";
import "../styles/social-icons.scss";

const Layout = ({ children }: any) => {
  return (
    <div className="relative">
      <div className="">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
