import GlobalButton from "../components/GlobalButton";

const ContactPage = () => {
  return (
    <div>
      <div className="text-center my-[12rem]">
        <h4 className="text-[#232536] text-[1.6rem] font-black leading-8 tracking-[.3rem] uppercase">
          Contact us
        </h4>
        <h2 className="text-[#232536] font-Sen text-[4.8rem] font-bold leading-[6.4rem] tracking-[-.2rem] mt-[1.2rem] mb-[2.4rem]">
          Let’s Start a Conversation
        </h2>
        <p className="max-w-[76.8rem] mx-auto text-[#6D6E76] text-[1.6rem] leading-[2.8rem] px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>

        <div className="bg-[#592EA9] mt-[6.4rem] py-[4.8rem] px-[6.4rem] md:flex md:justify-around text-left max-w-[76.8rem] mx-auto">
          <div className="mb-[6rem] md:m-0">
            <h5 className="text-[#fff] text-[1.4rem] leading-8 opacity-60 mb-[1.6rem]">
              Working hours
            </h5>
            <hr className="mb-[1.6rem]" />
            <p className="text-[#fff] font-Sen text-[2rem] font-bold leading-[3.2rem]">
              Monday To Friday
            </p>
            <p className="text-[#fff] font-Sen text-[2rem] font-bold leading-[3.2rem]">
              9:00 AM to 8:00 PM
            </p>
            <p className="text-[#fff] text-[1.6rem] leading-[2.8rem] opacity-60">
              Our Support Team is available 24/7
            </p>
          </div>
          <div>
            <h5 className="text-[#fff] text-[1.4rem] leading-8 opacity-60 mb-[1.6rem]">
              Contact Us
            </h5>
            <hr className="mb-[1.6rem]" />
            <p className="text-[#fff] font-Sen text-[2rem] font-bold leading-[3.2rem]">
              020 7993 2905
            </p>
            <p className="text-[#fff] text-[1.6rem] leading-[2.8rem] opacity-60">
              hello@finsweet.com
            </p>
          </div>
        </div>

        <form
          action=""
          className="max-w-[76.8rem] mx-auto mt-[3.2rem] grid gap-[1.6rem]"
        >
          <input
            type="text"
            placeholder="Full name"
            className="p-[2.4rem] border rounded text-[1.6rem] leading-[2.8rem] capitalize"
          />
          <input
            type="email"
            placeholder="your email"
            className="p-[2.4rem] border rounded text-[1.6rem] leading-[2.8rem] capitalize"
          />
          <select className="p-[2.4rem] border rounded text-[1.6rem] leading-[2.8rem] capitalize">
            <option value="Query related">Query related</option>
            <option value="Query related A">Query related A</option>
            <option value="Query related B">Query related B</option>
          </select>
          <textarea
            className="p-[2.4rem] border rounded text-[1.6rem] leading-[2.8rem] capitalize"
            placeholder="message"
          ></textarea>
          <GlobalButton
            text="Send Message"
            className={
              "bg-[#FFD050] text-[#232536] font-Sen font-bold leading-[3.2rem]"
            }
          />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
