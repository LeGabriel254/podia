import React from 'react';
import databiz from "../assets/databiz.svg";
import meet from "../assets/meet.svg";
import audiophile from "../assets/audiophile.svg";
import maker from "../assets/maker.svg"
import desktop from "../assets/desktop.png"


function main (){
  return (


    <main className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 mt-12">
      {/* Left Side - Text */}
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-black mb-6">Make remote work</h1>
        <p className="text-gray-600 text-lg mb-8">
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-slate-200">
          Learn More
        </button>

        {/* Logos */}
        <div className="flex space-x-8 mt-12">
          <img src={databiz} alt="Databiz" className="h-8" />
          <img src={audiophile} alt="Audiophile" className="h-8" />
          <img src={meet} alt="Meet" className="h-8" />
          <img src={maker} alt="Maker" className="h-8" />
        </div>
      </div>


      
        {/* Right Side - Image and Background Shapes */}
        <div className=" relative  mt-12 lg:mt-10 l-20 object-contain mr-14 place-self-end">
          {/* {/* Abstract shapes */}
          <div className="absolute -top-16 -left-10 w-64 h-64 bg-purple-500 rounded-full opacity-40"></div>
          <div className="absolute top-24 left-20 w-32 h-32 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-44 right-10 w-40 h-40 bg-blue-500"></div> 
          {/* Image */}
          <img
            src={desktop}
            alt="Person working"
            className="relative z-10 rounded-full"
          />
        </div>
    </main>

  )
}
export default main;
