import React from 'react'


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
          <img src="databiz.png" alt="Databiz" className="h-8" />
          <img src="audiophile.png" alt="Audiophile" className="h-8" />
          <img src="meet.png" alt="Meet" className="h-8" />
          <img src="maker.png" alt="Maker" className="h-8" />
        </div>
      </div>
    </main>

  )
}
export default main;
