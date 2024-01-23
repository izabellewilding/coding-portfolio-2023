import React from "react";
import Link from "next/link";
import FloatingIcons from "./FloatingTechIcons";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = React.forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="relative bg-black pt-12 pb-12 overflow-hidden z-10"
    >
      <FloatingIcons />
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 text-light"
        style={{ height: "80px", transform: "translateZ(0)" }}
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 px-4">
            <h4 className="text-3xl  text-lightPrimary mb-6">Get in touch</h4>
            <p className="text-gray-500">izabellewilding@gmail.com</p>
          </div>
          <div className="w-full lg:w-6/12 px-4 md:pt-0">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-700 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com"
                    >
                      Resume
                    </Link>
                  </li> */}
                  <li>
                    <a
                      href="https://www.izabelleart.com/#/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      Art
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}
              <a className="text-gray-600">Izabelle Wilding</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
export default Contact;
