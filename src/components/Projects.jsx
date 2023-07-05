import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import animationData from "../assets/images/Projects/97525-code-dark.json"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";
import Lottie from "react-lottie";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { Projects } = content;
  const handleReadMore = (project) => {
    setSelectedProject(project);
    window.my_modal_3.showModal();
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => window.my_modal_3.close()}
          >
            ✕
          </button>
          <img className="mt-5" src={selectedProject?.image} alt="" />
          <h3 className="font-bold text-lg mt-3">
            {selectedProject && selectedProject.title}
          </h3>
          {/* Render additional data in the modal */}
          {selectedProject && (
            <ul>
              {selectedProject.functionalities.map((functionality, index) => (
                <li key={index}># {functionality}</li>
              ))}
            </ul>
          )}
          <a href={selectedProject?.link} className=" underline text-blue-500 mt-2">Live Website</a>
        </form>
      </dialog>
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between overflow-hidden">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse md:gap-5">
          <div>
            <Lottie
              options={{
                animationData: animationData,
                loop: true,
                autoplay: true,
              }}
              height={600} // Set the desired height
              width={600} // Set the desired width
            />
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((contents, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={contents.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{contents.title}</h5>
                  <button className="font-bold text-gray self-end" onClick={() => handleReadMore(contents)}
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
