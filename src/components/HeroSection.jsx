import { MdArrowRight } from "react-icons/md";
import BackgroundImage from "../assets/images/bgImgB.png";
import GlobalButton from "./GlobalButton";
import { BLOG } from "../assets/constants/routePaths";

function HeroSection() {
  return (
    <div
      className=""
      style={{
        background: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.8)), url(${BackgroundImage}) no-repeat center/cover`,
      }}
    >
      <div
        className={`px-8 py-16 md:p-16 text-center grid gap-12 justify-items-center lg:gap-[5rem] lg:py-[7rem] lg:justify-items-start lg:text-left max-w-[120rem] mx-auto`}
      >
        <p className="text-[#e2e2e2] text-[1.6rem] uppercase font-medium leading-[2rem] tracking-[.3rem] md:text-[1.6rem]">
          posted on <span className="font-black text-white">startup</span>
        </p>

        <h5 className="max-w-[80rem] font-Sen text-[5.6rem] font-bold leading-[6.4rem] tracking-[-.2rem] text-white">
          Step-by-step guide to choosing great font pairs
        </h5>

        <div className="mb-4">
          <p className="mb-8 text-[#e2e2e2] text-[1.6rem] leading-[2.8rem]">
            By <span className="text-[#FFD050]">James West</span> | May 23, 2022
          </p>
          <p className="max-w-[60rem] text-[#e2e2e2] text-[1.6rem] leading-[2.8rem]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>

        <GlobalButton
          text="Read more"
          className={"bg-[#FFD050] flex items-center"}
          href={BLOG}
        >
          <MdArrowRight size={"2rem"} />
        </GlobalButton>
      </div>
    </div>
  );
}

export default HeroSection;
