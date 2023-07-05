// import components
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { Circles } from "react-loader-spinner";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutMe from "./components/AboutMe";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });

    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <div className="loader-container flex justify-center md:mt-96 mt-72">
          <Circles
            height={40}
            width={40}
            color="#a9aeb0"
            ariaLabel="circles-loading"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <AboutMe/>
          <Skills />
          <Service />
          <Projects />
          <Testimonials />
          <Hireme />
          <Contact />
          <footer className="p-3 text-center">
            <h6 className="mb-3">AL MAMUN SHISIR</h6>
            <p>WebGenius © All CopyRights Reserved 2023</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
