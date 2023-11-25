import { dataBase } from "../assets/data/dataBase";
import Authors from "../components/Authors";
import JoinOurTeam from "../components/JoinOurTeam";
import { aboutImgA, aboutImgB, discoveryImg } from "../utility/images";

function AboutPage() {
  return (
    <div>
      {/* section 1 */}
      <div className="max-w-[120rem] mx-auto p-[2rem] pt-[4rem] grid justify-items-center text-center lg:grid-cols-2 lg:text-left lg:mt-12 lmd:items-center">
        <div className="mb-12 lg:mb-0 lg:p-8 lg:pb-16">
          <p className="mb-[1.6rem] text-[#232536] text-[1.6rem] font-medium leading-[2rem] tracking-[.3rem] uppercase">
            ABOUT US
          </p>
          <h1 className="max-w-[70rem] text-[#232536] font-Sen text-[4.8rem] font-bold leading-[6.4rem] tracking-[-.2rem] lg:max-w-[49.6rem]">
            We are a team of content writers who share their learnings
          </h1>
        </div>
        <div className="max-w-[60rem] text-[1.6rem] leading-[2.8rem] text-[#4C4C4C] lg:max-w-[47.7rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      {/* section two */}
      <section className="max-w-[120rem] mx-auto">
        <div
          style={{ background: `url(${discoveryImg}) no-repeat center/cover` }}
          className="min-h-[35rem] relative lg:min-h-[44.4rem]"
        >
          <div className="absolute bottom-0 left-[10%] w-[86rem] overflow-hidden">
            <div className="max-w-[63rem] inline-flex gap-[2rem] flex-wrap items-center py-8 px-12 lg:gap-[6rem] bg-[#FFD050] lg:p-[1rem]">
              <span className="items-center">
                <h2 className="text-[#232536] font-Sen text-[2rem] lg:text-[5.6rem] font-bold lg:leading-[6.4rem] tracking-[-.2rem] inline-flex items-center">
                  12<span className="lg:text-[4rem]">+</span>
                </h2>
                <p className="text-[#232536] lg:text-[1.6rem] leading-[2.8rem]">
                  Blogs Published
                </p>
              </span>
              <span>
                <h2 className="text-[#232536] font-Sen text-[2rem] lg:text-[5.6rem] font-bold lg:leading-[6.4rem] tracking-[-.2rem] flex items-center">
                  18K<span className="lg:text-[4rem]">+</span>
                </h2>
                <p className="text-[#232536] lg:text-[1.6rem] leading-[2.8rem]">
                  Views on Finsweet
                </p>
              </span>
              <span>
                <h2 className="text-[#232536] font-Sen text-[2rem] lg:text-[5.6rem] font-bold lg:leading-[6.4rem] tracking-[-.2rem] flex items-center">
                  30K<span className="lg:text-[4rem]">+</span>
                </h2>
                <p className="text-[#232536] lg:text-[1.6rem] leading-[2.8rem]">
                  Total active users
                </p>
              </span>
            </div>
            <div className="grid grid-cols-[1fr_3fr] max-w-[86rem]">
              <div className="h-5 bg-[#592EA9]"></div>
              <div className="h-5 bg-[#FFD050]"></div>
            </div>
          </div>
        </div>
        {/* mission and vision */}
        <div className="bg-[#F4F0F8] p-[5rem] lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-[8rem] lg:mb-0">
            <p className="text-[#232536] text-[1.6rem] font-semibold leading-8 tracking-[.3rem] uppercase">
              our mission
            </p>
            <h2 className="mt-[2.4rem] mb-[1.6rem] max-w-[48.1rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4rem] tracking-[-.1rem]">
              Creating valuable content for creatives all around the world
            </h2>
            <p className="max-w-[51.5rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem] mb-[1.6rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          {/* vision */}
          <div>
            <p className="text-[#232536] text-[1.6rem] font-semibold leading-8 tracking-[.3rem] uppercase">
              Our vision
            </p>
            <h2 className="mt-[2.4rem] mb-[1.6rem] max-w-[47.5rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4rem] tracking-[-.1rem]">
              A platform that empowers individuals to improve
            </h2>
            <p className="max-w-[51.5rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </section>

      {/* section three */}
      <section className="p-[2rem] mt-[10rem] grid gap-8 lg:items-center lmd:grid-cols-2 lg:gap-[6rem] lmd:justify-items-center max-w-[120rem] mx-auto relative">
        <div className="grid gap-4 lg:gap-8 order-2 lmd:order-1">
          <h2 className="text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
            Our team of creatives
          </h2>
          <h5 className="max-w-[51.9rem] font-Sen text-[2.4rem] font-bold leading-[3.2rem] text-[rgba(35,37,54,0.75)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h5>
          <p className="max-w-[51.9rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="order-1 lmd:order-2 lg:relative">
          <img
            src={aboutImgA}
            alt="about img"
            className="w-full block relative"
          />
        </div>
        <span className="h-[6.8rem] w-[6.8rem] bg-[#FFD050] hidden lg:block lg:absolute lg:right-[45%] lg:z-50 rounded-tl-[3rem]"></span>
      </section>

      {/* section four */}
      <section className="p-[2rem] mt-[10rem] grid gap-8 lg:items-center lmd:grid-cols-2 lg:gap-[6rem] lmd:justify-items-center max-w-[120rem] mx-auto relative">
        <div className="">
          <img
            src={aboutImgB}
            alt="about img"
            className="w-full block relative"
          />
        </div>

        <div className="grid gap-4 lg:gap-8">
          <h2 className="text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
            Why we started this Blog
          </h2>
          <h5 className="max-w-[51.9rem] font-Sen text-[2.4rem] font-bold leading-[3.2rem] text-[rgba(35,37,54,0.75)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h5>
          <p className="max-w-[51.9rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </section>

      {/* list of Authors section */}
      <div className="mt-[10rem]">
        <Authors authorsData={dataBase.authors} />
      </div>

      {/* joinOurTeam section */}
      <div className="my-[10rem]">
        <JoinOurTeam />
      </div>
    </div>
  );
}

export default AboutPage;
