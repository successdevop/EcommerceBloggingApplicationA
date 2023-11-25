function NextSinglePost() {
  return (
    <article>
      <div>
        <img src={""} alt="two women in front of a board" className="w-full" />
      </div>
      <div className="mt-10">
        <p className="text-[#4C4C4C] text-[1.4rem] font-medium leading-[2rem] mb-[1.6rem]">
          By <span className="text-[#592EA9]">John Doe</span> l Aug 23, 2021
        </p>
        <h2 className="max-w-[62.4rem] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.1rem] mb-[1.6rem]">
          A UX Case Study Creating a Studious Environment for Students:
        </h2>
        <p className="text-[#6D6E76] max-w-[62.4rem] text-[1.6rem] leading-[2.8rem] mb-[3.2rem] lmd:m-0">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
    </article>
  );
}

export default NextSinglePost;
