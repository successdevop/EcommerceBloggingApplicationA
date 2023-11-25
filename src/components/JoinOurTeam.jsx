import { CONTACT } from "../assets/constants/routePaths";
import GlobalButton from "./GlobalButton";

function JoinOurTeam() {
  return (
    <div className="flex gap-8 flex-col items-center text-center">
      <h4 className="max-w-[41.4rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
        Join our team to be a part of our story
      </h4>
      <p className="text-[#6D6E76] max-w-[40.5rem] text-[1.6rem] leading-[2.8rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <GlobalButton
        href={CONTACT}
        text="Join Now"
        className={"bg-[#FFD050] hover:bg-[#EDC14A] hover:text-red"}
      />
    </div>
  );
}

export default JoinOurTeam;
