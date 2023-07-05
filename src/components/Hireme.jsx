import Lottie from "react-lottie";
import { content } from "../Content";
import animationData from "../assets/images/Hireme/52353-hire-me.json"

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14 overflow-hidden">
        <h2 className="title overflow-hidden" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle overflow-hidden" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
        <div>
        <Lottie
            options={{
              animationData: animationData,
              loop: true,
              autoplay: true,
            }}
            height={400} // Set the desired height
            width={400} // Set the desired width
          />
        </div>
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] overflow-hidden"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
