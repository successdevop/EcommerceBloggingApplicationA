import { Link } from "react-router-dom";
import { navLinks } from "../assets/data/data";
import { BrandLogo } from "../utility/icons";
import { PRIVACY } from "../assets/constants/routePaths";
import GlobalButton from "./GlobalButton";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#232536] px-[3rem] py-[3rem] md:p-[4rem]" id="footer">
      <div className="max-w-[120rem] mx-auto bg-[#232536]">
        <div className="mb-[3rem] md:flex items-center justify-between">
          <BrandLogo />
          <ul className="mt-[2.5rem] flex gap-8 md:m-0">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.id}
                className="text-[1.6rem] text-white leading-[2.8rem]"
              >
                {link.text}
              </Link>
            ))}
            <Link
              to={PRIVACY}
              className="text-[1.6rem] text-white leading-[2.8rem]"
            >
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div className="relative">
          <div className="mb-12 bg-[#4C4C4C] opacity-[.5] relative py-[15rem] lg:p-[10rem]"></div>
          <div className="grid gap-10 lg:grid-cols-2 absolute top-[50%] translate-y-[-50%] px-4 md:px-[5rem]">
            <h2 className="max-w-[56.2rem] text-white font-Sen font-bold text-[2.3rem] leading-[3rem] lg:text-[3.6rem] lg:leading-[4.8rem] lg:tracking-[-.2rem]">
              Subscribe to our news letter to get latest updates and news
            </h2>
            <div className="grid gap-6 lg:grid-cols-[4fr_1fr] lg:items-start">
              <input
                type="text"
                name=""
                id=""
                className="capitalize border-[.2rem] border-[#4C4C4C] bg-transparent px-[2rem] py-[1rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem] rounded-xl"
                placeholder="Enter your email"
              />
              <GlobalButton text="Subscribe" className={"bg-[#FFD050]"} />
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:flex items-center justify-between">
          <div>
            <p className="text-white text-[1.6rem] leading-[2.8rem] opacity-70">
              Finstreet 118 2561 Fintown
            </p>
            <p className="text-white text-[1.6rem] leading-[2.8rem] opacity-70">
              Hello@finsweet.com 020 7993 2905
            </p>
          </div>
          <div className="flex gap-10">
            <FaFacebook fill="#6D6E76" size={"1.6rem"} />
            <FaTwitter fill="#6D6E76" size={"1.6rem"} />
            <FaInstagram fill="#6D6E76" size={"1.6rem"} />
            <FaLinkedin fill="#6D6E76" size={"1.6rem"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
