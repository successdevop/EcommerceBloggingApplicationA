import { BrandLogo } from "../utility/icons";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Links from "./Links";
import GlobalButton from "./GlobalButton";

function Navbar() {
  const [showNavLink, setShowNavLink] = useState(false);

  return (
    <div className="bg-[#232536]">
      <nav className="p-8 mx-auto max-w-[120rem] md:px-16 lmd:flex justify-between">
        <div className="flex justify-between items-center">
          <BrandLogo />
          <div
            onClick={() => setShowNavLink((open) => !open)}
            className="lmd:hidden"
          >
            {showNavLink ? (
              <IoClose size={"2.4rem"} fill="#fff" />
            ) : (
              <FaBars size={"2.4rem"} fill="#fff" />
            )}
          </div>
        </div>
        <Links showLink={showNavLink}>
          <GlobalButton
            text="Subscribe"
            className={"bg-white"}
            href={"footer"}
          />
        </Links>
      </nav>
    </div>
  );
}

export default Navbar;
