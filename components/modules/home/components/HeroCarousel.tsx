import React from 'react';

const HeroCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out">
        <div className="w-full flex-shrink-0">
          <img
            src="/placeholder-image.svg"
            alt="Slide 1"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex-shrink-0">
          <img
            src="/placeholder-image.svg"
            alt="Slide 2"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex-shrink-0">
          <img
            src="/placeholder-image.svg"
            alt="Slide 3"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md focus:outline-none">
          Prev
        </button>
        <button className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md focus:outline-none">
          Next
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center p-4">
        <div className="flex space-x-2">
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
