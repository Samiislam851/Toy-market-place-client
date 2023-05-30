import React from 'react';

const BestSeller = () => {
    return (
        <>
          <div className="flex items-center justify-center min-h-screen bg-white pb-20 ">
  <div className="flex flex-col">
 
    <span className="text-center font-bold mb-10 mt-0 opacity-30">
      <hr className="my-4" />
      <a
        href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
        target="_blank"
        className="text-blue-600"
      >
   
      </a>
    </span>
    <div className="flex flex-col mt-8">
    
      <div className="container max-w-7xl px-4">
        {/* Section Header */}
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full  px-4">
            {/* Header */}
            <h1 className="text-gray-800 text-4xl md:text-7xl font-normal mb-8">
             Our Best sellers
            </h1>
            {/* Description */}
            <p className="text-gray-700 text-lg font-light">
             Here are the top 4 selling brands from our services
            </p>
          </div>
        </div>
        {/* Team Members */}
        <div className="flex flex-wrap">
          {/* Member #1 */}
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  className=" drop-shadow-md hover:drop-shadow-xl transition-all h-48 w-60 duration-200 delay-100"
                  src="./hotwheels.jpg"
                />
              </a>
              {/* Details */}
              <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  Hot Wheels
                </h1>
              </div>
            </div>
          </div>
          {/* Member #1 */}
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  className=" drop-shadow-md hover:drop-shadow-xl h-48 w-60 transition-all duration-200 delay-100"
                  src="./MotorMax.webp"
                />
              </a>
              {/* Details */}
              <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                 MotorMax
                </h1>
              </div>
            </div>
          </div>
          {/* Member #1 */}
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  className=" drop-shadow-md hover:drop-shadow-xl h-48 w-60 transition-all duration-200 delay-100"
                  src="./maisto.jpg"
                />
              </a>
              {/* Details */}
              <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                 Maisto
                </h1>
              </div>
            </div>
          </div>
          {/* Member #1 */}
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  className=" drop-shadow-md hover:drop-shadow-xl h-48 w-60 transition-all duration-200 delay-100"
                  src="./minichamps.png"
                />
              </a>
              {/* Details */}
              <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                 Minichamps
                </h1>
              </div>
            </div>
          </div>
       
          
        </div>
      </div>
    </div>
  </div>
</div>
  
        </>
    );
};

export default BestSeller;