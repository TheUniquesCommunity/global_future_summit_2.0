import React from "react";

const images = [
    "/src/assets/27.JPG",
    "/src/assets/32.jpg",
    "/src/assets/IMG_1412.jpg",
    "/src/assets/IMG_1482.jpg",
    "/src/assets/IMG_1531.jpg",
    "/src/assets/IMG_1704.jpg",
];

const ImageGrid = () => {
  return (
    <div className="w-full h-screen mt-30 mb-20 flex flex-col items-center justify-center bg-white p-6">
      
      {/* Header Section */}
      <div className="text-center flex flex-col items-center mb-8">
        <h1 className="text-6xl font-bold bg-clip-text text-black">
          Glimpses of  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
           Global Future Summit 1.O
          </span>
        </h1>
        <p className="text-gray-600 text-lg mt-2 max-w-2xl text-center">
          Explore our collection of stunning images capturing special moments and beautiful scenes.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto h-screen">
        <div className="col-span-1 row-span-1 overflow-hidden rounded-lg relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
          <img 
            src={images[0]} 
            alt="Image 1" 
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden rounded-lg relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
          <img 
            src={images[1]} 
            alt="Image 2" 
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden rounded-lg relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
          <img 
            src={images[2]} 
            alt="Image 3" 
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="col-span-2 row-span-1 overflow-hidden rounded-lg relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
          <img 
            src={images[3]} 
            alt="Image 4" 
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden rounded-lg relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
          <img 
            src={images[4]} 
            alt="Image 5" 
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="col-span-2 row-span-1 overflow-hidden rounded-lg relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
          <img 
            src={images[5]} 
            alt="Image 6" 
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
