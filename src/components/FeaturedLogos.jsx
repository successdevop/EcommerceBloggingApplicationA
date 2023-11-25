import { nanoid } from "nanoid";
import { logoA, logoB, logoC, logoD, logoE } from "../utility/icons";

const logoData = [logoA, logoB, logoC, logoD, logoE];

function FeaturedLogos() {
  return (
    <div className="xlg:flex xlg:gap-12 xlg:items-end justify-center">
      <div className="text-center mb-12 xlg:mb-0">
        <p className="text-[#6D6E76] text-[1.4rem] leading-[2rem] xlg:text-left">
          We are
        </p>
        <h4 className="text-[#6D6E76] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
          Featured in
        </h4>
      </div>
      <div className="grid gap-[5rem] justify-items-center md:grid-cols-3 lmd:grid-cols-5">
        {logoData.map((Item) => (
          <Item key={nanoid()} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedLogos;
