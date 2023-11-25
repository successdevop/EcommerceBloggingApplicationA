import { Link, useNavigate, useParams } from "react-router-dom";
import JoinOurTeam from "../components/JoinOurTeam";

import {
  BusinessIcon,
  EconomyIcon,
  StartUpIcon,
  TechnologyIcon,
} from "../utility/icons";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import GlobalButton from "../components/GlobalButton";
import { BLOG } from "../assets/constants/routePaths";

function BlogPostPage() {
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [singlePost, setSinglePost] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const { dataBase } = useSelector((store) => store.pagination);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setTimeout(() => {
        setSinglePost(() => dataBase.posts.find((post) => post.postId === id));
        setLoading(false);
      }, 1000);
    };
    fetchPost();
  }, [dataBase.posts, id]);

  useEffect(() => {
    if (singlePost) {
      setAuthor(() => {
        return dataBase.authors.find(
          (author) => author.id === singlePost.authorId
        );
      });
      setLoading(false);
    }
  }, [dataBase.authors, singlePost]);

  if (!singlePost && loading) {
    return (
      <h1 className="pt-16 pb-[6.4rem] px-4 max-w-[76rem] mx-auto text-[4rem] text-[#592EA9]">
        Loading.....
      </h1>
    );
  }

  if (!singlePost && !loading) {
    <h1 className="pt-16 pb-[6.4rem] px-4 max-w-[76rem] mx-auto text-[4rem] text-[#592EA9]">
      Not Found.....
    </h1>;
  }
  return (
    <div>
      {/* top */}
      <div className="pt-16 pb-[6.4rem] px-4 max-w-[76rem] mx-auto">
        <div className="flex gap-4 items-center">
          <img
            src={author?.authorImage}
            alt="women"
            className="h-[8.8rem] w-[8.8rem] rounded-full object-cover"
          />
          <div>
            <h4 className="text-[#592EA9] font-Sen text-[2.8rem] font-bold leading-[4rem] tracking-[-.1rem]">
              {author?.authorName}
            </h4>
            <p className="text-[#6D6E76] text-[1.6rem] leading-[2rem]">
              Posted on {singlePost?.postDate}
            </p>
          </div>
        </div>
        <h1 className="mt-[2.4rem] mb-[3.4rem] max-w-[76.8rem] text-[#232536] font-Sen text-[4.8rem] font-bold leading-[6.4rem] tracking-[-.2rem]">
          {singlePost?.postTitle}
        </h1>
        <div className="flex items-center gap-4">
          {singlePost?.postCategory === "Startup" && <StartUpIcon />}
          {singlePost?.postCategory === "Business" && <BusinessIcon />}
          {singlePost?.postCategory === "Technology" && <TechnologyIcon />}
          {singlePost?.postCategory === "Economy" && <EconomyIcon />}

          <span className="text-[#232536] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
            {singlePost?.postCategory}
          </span>
        </div>
      </div>
      {/* button */}
      <div className="max-w-[128rem] mx-auto mb-16">
        <GlobalButton
          text="Go Back"
          className={"bg-[#FFD050]"}
          onclick={() => navigate(-1)}
        />
      </div>

      {/* body */}
      <div className="max-w-[128rem] mx-auto">
        <img
          src={singlePost?.postImage}
          alt="f"
          className="w-full max-h-[50rem] object-cover"
        />
        <div>
          <div className="max-w-[80rem] mx-auto mt-[6rem]">
            <h2 className="mb-[1.6rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>
            <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div className="max-w-[80rem] mx-auto mt-[6rem]">
            <h2 className="mb-[1.6rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>
            <p className="mb-[2.4rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>

            <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>

            <ul className="my-[2.4rem] list-disc pl-[2.5rem] grid gap-4">
              <li className="text-[#16172294] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
                Lorem ipsum dolor sit amet
              </li>
              <li className="text-[#16172294] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
                Non blandit massa enim nec scelerisque
              </li>
              <li className="text-[#16172294] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
                Neque egestas congue quisque egestas
              </li>
            </ul>

            <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div className="max-w-[80rem] mx-auto mt-[6rem]">
            <h2 className="mb-[1.6rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>
            <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
        </div>
      </div>

      {/* what to read next */}
      <div className="mt-[10rem] max-w-[120rem] mx-auto">
        <h2 className="text-[#000] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
          What to read next
        </h2>
        <div className="mt-[5rem] px-4 border-b-2 pb-[2rem] flex flex-col lg:gap-[4rem]">
          {dataBase.posts.slice(15, 18).map((post) => (
            <Link
              key={post.postId}
              className="lg:flex lg:gap-[4rem] lg:items-center"
              to={`${BLOG}/${post.postId}`}
            >
              <div className="">
                <img
                  src={post.postImage}
                  alt="post image"
                  className="min-h-[28rem] max-h-[30rem] min-w-full object-cover lg:h-[28rem] lg:w-[39.7rem]"
                />
              </div>
              <div className="mt-10 lg:mt-4">
                <h5 className="text-[#592EA9] text-[1.6rem] font-semibold leading-8 tracking-[.3rem] uppercase mb-8">
                  {post.postCategory}
                </h5>
                <h2 className="max-w-[62.4rem] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem] mb-[1.6rem]">
                  {post.postTitle}
                </h2>
                <p className="text-[#6D6E76] max-w-[62.4rem] text-[1.6rem] leading-[2.8rem] mb-[3.2rem] lmd:m-0">
                  {post.postContent}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* join our team */}
      <div className="my-[10rem]">
        <JoinOurTeam />
      </div>
    </div>
  );
}

export default BlogPostPage;
