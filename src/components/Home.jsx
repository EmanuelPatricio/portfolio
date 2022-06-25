import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Emanuel Patricio
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0]">
          Full Stack Developer.
        </h2>
        <p className="text-[#8892B2] py-4 max-w-[700px]">
          I'm a full stack developer with a focus on the MERN stack, but I'm still exploring other technologies and frameworks that interest me.
        </p>

        <div>
          <Link
            className="group text-white border-2 w-40 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 cursor-pointer"
            to="work"
            smooth={true}
            duration={500}
          >
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
