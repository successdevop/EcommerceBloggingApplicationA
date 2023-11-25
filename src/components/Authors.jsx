import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Authors({ authorsData }) {
  return (
    <div className="">
      <h5 className="text-[#232536] font-Sen text-[3.2rem] font-bold leading-[4.8rem] tracking-[-.2rem] text-center mb-8">
        List of Authors
      </h5>

      <div className="grid gap-6 lmd:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4">
        {authorsData?.map((author) => (
          <Link
            to={`${author.id}`}
            key={author.id}
            className="bg-[#F4F4F4] transition-all hover:bg-[#FBF6EA] grid gap-8 justify-items-center text-center p-8"
          >
            <img src={author.authorImage} alt="author's image" />
            <div className="grid gap-4">
              <h5 className="text-[#232536] font-Sen text-[2.8rem] font-bold leading-[4rem] tracking-[-.1rem]">
                {author.authorName}
              </h5>
              <p className="text-[#6D6E76] text-[1.4rem] leading-[2rem]">
                {author.authorJob}
              </p>
              <div className="flex gap-4 justify-center">
                <FaFacebook size={"2.4rem"} fill="#232536" />
                <FaTwitter size={"2.4rem"} fill="#232536" />
                <FaInstagram size={"2.4rem"} fill="#232536" />
                <FaLinkedin size={"2.4rem"} fill="#232536" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Authors.propTypes = {
  authorsData: PropTypes.array,
};
export default Authors;
