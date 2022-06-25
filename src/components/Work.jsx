import React from "react";
import Budget from '../assets/Budget-App.png'
import Recipe from '../assets/Recipe-App.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={Budget} alt="Budget app" />
            <div className="bg-[#05152E]">
              <h3 className="px-6 py-5 text-center font-bold text-xl mb-2">Budget App</h3>
              <div className="grid grid-cols-2 gap-5 justify-center px-9 pt-3 pb-2 text-center">
                <a href="https://emanuelpatricio.github.io/budget-app/" className="inline-block bg-gray-200 rounded-lg px-2 py-4 text-md font-semibold text-gray-700 mr-2 mb-2" target="_blank" rel="noreferrer">Demo</a>
                <a href="https://github.com/EmanuelPatricio/budget-app" className="inline-block bg-gray-200 rounded-lg px-2 py-4 text-md font-semibold text-gray-700 mr-2 mb-2" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={Recipe} alt="Recipe app" />
            <div className="bg-[#05152E]">
              <h3 className="px-6 py-5 text-center font-bold text-xl mb-2">Recipe App</h3>
              <div className="grid grid-cols-2 gap-5 justify-center px-9 pt-3 pb-2 text-center">
                <a href="https://emanuelpatricio.github.io/recipe-app/" className="inline-block bg-gray-200 rounded-lg px-2 py-4 text-md font-semibold text-gray-700 mr-2 mb-2" target="_blank" rel="noreferrer">Demo</a>
                <a href="https://github.com/EmanuelPatricio/recipe-app" className="inline-block bg-gray-200 rounded-lg px-2 py-4 text-md font-semibold text-gray-700 mr-2 mb-2" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Work;
