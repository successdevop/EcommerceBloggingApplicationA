import { useRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { navLinks } from "../assets/data/data";

function Links({ showLink, children }) {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: showLink
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <div
      className={`linksContainer lmd:!h-auto`}
      ref={linksContainerRef}
      style={linkStyles}
    >
      <ul
        className="grid justify-items-center gap-8 pt-10 pb-5 lmd:flex lmd:items-center lmd:p-0"
        ref={linksRef}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              className="no-underline text-[1.6rem] font-normal leading-[2.8rem] text-[#fff]"
              to={link.href}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
        {children}
      </ul>
    </div>
  );
}

Links.propTypes = {
  showLink: PropTypes.bool,
  children: PropTypes.node,
};
export default Links;
