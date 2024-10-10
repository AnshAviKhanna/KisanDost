import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

function CropCard({ cropName, imagePath }) {
  return (
    <div className="max-w-sm bg-[#009900] border-2 border-green-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        {/* Dynamically rendering the image path passed as prop */}
        <img className="rounded-t-lg" src={imagePath} alt={cropName} />
      </a>

      {/* Crop name and Arrow icon */}
      <div className="flex items-center justify-between py-2 mx-4">
        {/* Dynamically rendering the crop name passed as prop */}
        <h1 className="text-white text-lg font-medium">{cropName}</h1>
        <IoIosArrowRoundForward className="h-7 w-7 cursor-pointer text-white" />
      </div>
    </div>
  );
}

export default CropCard;
