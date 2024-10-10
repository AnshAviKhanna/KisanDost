import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";

const Header = ({ text }) => {
  return (
    <div className='bg-green-900'>
    <div className=" text-white max-w-screen-xl flex items-center mx-auto">
      <IoIosArrowRoundBack className="h-10 w-10 cursor-pointer" />
      <div className="flex-grow text-center">
        {text}
      </div>
    </div>
    </div>
  );
};

export default Header;
