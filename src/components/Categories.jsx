import { nanoid } from "nanoid";
import {
  BusinessIcon,
  EconomyIcon,
  StartUpIcon,
  TechnologyIcon,
} from "../utility/icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CATEGORY } from "../assets/constants/routePaths";

function Categories({ marginTop = 8, textAlign, text = "Choose A Catagory" }) {
  return (
    <div className={`mt-[${marginTop}rem]`}>
      <h4
        className={`text-${textAlign} text-[#232536] text-[3.6rem] mb-[3rem] font-Sen font-bold leading-[4.8rem] tracking-[-.2rem]`}
      >
        {text}
      </h4>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {categoryData.map((category) => (
          <Link key={category.id} to={`${CATEGORY}/${category.header}`}>
            <div
              className={`border border-[#6D6E76] p-8 flex-[1_0_25%] group transition-all hover:bg-[#FFD050]`}
            >
              <category.icon
                className={
                  "h-[8rem] w-[8rem] bg-[#FBF6EA] rounded-[1rem] p-6 group-hover:bg-white"
                }
              />
              <h5 className="text-[#232536] font-Sen text-[2.8rem] font-bold leading-[4rem] tracking-[-.1rem] mt-6">
                {category.header}
              </h5>
              <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
                {category.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  marginTop: PropTypes.number,
  textAlign: PropTypes.string,
  text: PropTypes.string,
};

export default Categories;

const categoryData = [
  {
    id: nanoid(),
    icon: BusinessIcon,
    header: "Business",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: nanoid(),
    icon: StartUpIcon,
    header: "Startup",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: nanoid(),
    icon: EconomyIcon,
    header: "Economy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: nanoid(),
    icon: TechnologyIcon,
    header: "Technology",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];
