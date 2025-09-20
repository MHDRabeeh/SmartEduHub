import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex  items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
        <Image src={"/search.png"} alt="search icon" width={14} height={14} />
        <input type="text" placeholder="Search... " className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center h-7 w-7 bg-white rounded-full cursor-pointer">
          <Image src={'/message.png'} alt="" width={20} height={20}/>
        </div>
          <div className="flex items-center justify-center h-7 w-7 bg-white rounded-full cursor-pointer relative">
          <Image src={'/announcement.png'} alt="" width={20} height={20}/>
          <div className="absolute w-5 h-5 -top-4 -right-3 text-xs rounded-full flex items-center justify-center cursor-pointer  bg-purple-500 text-white">7</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium text-gray-700">John wick </span>
          <span className="text-[10px] text-right text-gray-500">admin</span>
        </div>
        <Image src={"/avatar.png"} width={36} height={36} className="rounded-full" alt=""/>

      </div>
    </div>
  );
}

export default Navbar;
