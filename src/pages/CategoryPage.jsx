import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";
import { setPageHandler } from "../features/pagination/paginationSlice";
import {
  BusinessIcon,
  EconomyIcon,
  StartUpIcon,
  TechnologyIcon,
} from "../utility/icons";

import { CATEGORY } from "../assets/constants/routePaths";
import GlobalButton from "../components/GlobalButton";

function CategoryPage() {
  const { postCategory } = useParams();
  const { dataBase, page, maxPagePost } = useSelector(
    (store) => store.pagination
  );
  const dispatch = useDispatch();

  const sortedArr = dataBase.posts.filter(
    (item) => item.postCategory === postCategory
  );

  const navigate = useNavigate();

  return (
    <div className="mb-[10rem]">
      <div className="bg-[#F4F0F8] py-[5rem] px-8 grid gap-6">
        <div className="max-w-[120rem] mx-auto">
          <h2 className="text-[#232536] text-center font-Sen text-[5.2rem] font-bold leading-[6.4rem] tracking-[-.2rem]">
            {postCategory}
          </h2>
          <p className="mb-4 max-w-[51.5rem] text-center mx-auto text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <p className="text-center text-[#232536] text-[1.6rem] font-medium leading-[2rem] tracking-[.3rem] uppercase">
            Blog {">"} Business
          </p>
        </div>
      </div>
      {/* navigate */}
      <div className="max-w-[120rem] mx-auto mt-16">
        <GlobalButton
          text="Go Back"
          className={"bg-[#FFD050] inline-flex"}
          onclick={() => navigate(-1)}
        />
      </div>
      <div className="max-w-[120rem] mx-auto mt-[6rem] xlg:grid xlg:grid-cols-[4fr_1fr] xlg:gap-8">
        <div className="p-[1rem]">
          <div className="grid gap-16 lg:gap-[5rem]">
            {sortedArr
              .slice(
                `${page * maxPagePost - maxPagePost}`,
                `${page * maxPagePost}`
              )
              .map((item) => {
                return <SinglePost key={item.postId} {...item} />;
              })}
          </div>
          <div className="flex items-center justify-center gap-10 mt-12">
            <span
              onClick={() => dispatch(setPageHandler(page - 1))}
              className={`${
                page > 1 ? "" : "opacity-0 invisible"
              } text-[#6D6E76] cursor-pointer font-Sen text-[2rem] hover:text-[#232536] font-semibold leading-[3.2rem]`}
            >
              {"< Prev"}
            </span>
            <span
              onClick={() => dispatch(setPageHandler(page + 1))}
              className={`${
                page < sortedArr.length / maxPagePost
                  ? ""
                  : "opacity-0 invisible"
              } text-[#6D6E76] cursor-pointer font-Sen text-[2rem] hover:text-[#232536] font-semibold leading-[3.2rem]`}
            >
              {"Next >"}
            </span>
          </div>
        </div>
        <div>
          <div className="px-[1rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem] mt-4 xlg:mt-0">
            Categories
          </div>
          <div className="grid gap-8 grid-cols-2 mt-[2rem] px-[1rem] xlg:grid-cols-1 xlg:self-start">
            {categoryData.map((category) => (
              <Link
                key={category.postCategory}
                to={`${CATEGORY}/${category.postCategory}`}
                className={`${
                  postCategory === category.postCategory ? "bg-[#FFD050]" : ""
                }`}
              >
                <div
                  className={`border border-[#6D6E76] p-4 gap-4 items-center flex group transition-all hover:bg-[#FFD050]`}
                >
                  <category.icon
                    className={
                      "h-[5rem] w-[5rem] bg-[#FBF6EA] rounded-[1rem] p-5 group-hover:bg-white"
                    }
                  />
                  <h5 className="text-[#232536] font-Sen text-[2rem] font-bold leading-[3rem] tracking-[-.1rem]">
                    {category.postCategory}
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;

const categoryData = [
  {
    icon: StartUpIcon,
    postCategory: "Startup",
  },
  {
    icon: BusinessIcon,
    postCategory: "Business",
  },
  {
    icon: EconomyIcon,
    postCategory: "Economy",
  },
  {
    icon: TechnologyIcon,
    postCategory: "Technology",
  },
];
