import { useEffect } from "react";
import { nextSlide, prevSlide } from "../features/slider/sliderSlice";
import { LeftArrorIcon, RightArrorIcon } from "../utility/icons";
import { useDispatch, useSelector } from "react-redux";

function Testimonials() {
  const { data, count } = useSelector((store) => store.slider);
  const dispatch = useDispatch();

  // Auto slide
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(nextSlide());
    }, 2000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="bg-[#FBF6EA]  p-12 grid gap-[3rem] lg:grid-cols-[1.5fr_2fr] lg:p-[7rem]">
      <div className="grid justify-items-center text-center border-b-4 pb-[3rem] lg:block lg:text-left lg:pb-0 lg:border-r-2 lg:border-b-0 lg:pr-[3rem]">
        <h6 className="text-[#232536] text-[1.6rem] font-semibold leading-[2rem] tracking-[.3rem] uppercase">
          TESTIMONIALs
        </h6>
        <h3 className="max-w-[34.5rem] mt-[1.2rem] mb-[1.6rem] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem] text-[#232536]">
          What people say about our blog
        </h3>
        <p className="max-w-[34.9rem] text-[#232536] text-[1.6rem] leading-[2.8rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>

      {/* carousel box */}
      <div className="relative h-[52.6rem] md:h-[40rem] lmd:h-[45rem] lg:h-[33rem] flex justify-center items-end overflow-hidden">
        {data.map((slide, personIndex) => {
          const { id, img, name, quote, title } = slide;
          return (
            <div
              className="grid gap-[4rem] justify-items-center text-center absolute top-0 h-[49rem] md:h-[33rem] lmd:h-[36.2rem] lg:h-[33rem] w-full transition-all"
              key={id}
              style={{
                transform: `translateX(${100 * (personIndex - count)}%)`,
                opacity: personIndex === count ? 1 : 0,
                visibility: personIndex === count ? "visible" : "hidden",
              }}
            >
              <p className="max-w-[46.9rem] font-Sen text-[2.4rem] font-bold leading-[3.2rem] text-[#232536]">
                {quote}
              </p>
              <div className="lmd:mt-[5rem] relative lmd:self-end">
                <div className="flex gap-[1.6rem] items-center">
                  <img
                    src={img}
                    alt="testimonial images"
                    className="w-[4.8rem] h-[4.8rem] rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-[#232536] font-Sen text-[2rem] font-bold leading-[1.6rem]">
                      {name}
                    </h5>
                    <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem] text-left capitalize">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex gap-4 justify-center h-[6rem] lg:absolute lg:bottom-0 lg:right-[0rem] lg:justify-self-end">
          <span
            className="h-[5rem] w-[5rem] flex justify-center items-center"
            onClick={() => dispatch(prevSlide())}
          >
            <LeftArrorIcon
              className={
                "h-full w-full bg-white rounded-full p-5 transition-all hover:text-white hover:bg-[#232536]"
              }
            />
          </span>
          <span
            className="h-[5rem] w-[5rem] flex justify-center items-center"
            onClick={() => dispatch(nextSlide())}
          >
            <RightArrorIcon
              className={
                "h-full w-full bg-white rounded-full p-5 transition-all hover:text-white hover:bg-[#232536]"
              }
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
