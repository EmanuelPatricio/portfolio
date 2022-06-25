import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-0">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="grid sm:text-right text-4xl font-bold justify-center items-center">
            <p>Hi. I'm Emanuel, nice to meet you. Please take a look around.</p>
          </div>
          <div className="grid gap-y-3">
            <p>
              I’m passionate about building things for the web. I started my journey as a developer when I was a teenager. I always wanted to know how electronics and programs were made so one day I just saw a video teaching the C language and it quickly took my interest.
            </p>
            <p>
              In the years, I’ve cultivated my passion for coding by studying the IT field, but most of all, by building some console apps and Windows Form apps challenging myself.
            </p>
            <p>
              Lately, I’ve discovered my passion for the world of web development and the beauty behind building useful websites like the one you will find in this portfolio. I’m now looking for a junior dev position to finally kick start my career and learn among professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
