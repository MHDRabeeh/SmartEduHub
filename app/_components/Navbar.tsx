import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex ">
        <Image src={"/search.png"} alt="search icon" width={14} height={14} />
        <input type="text" placeholder="Search... " />
      </div>
      <div className="">
        <div className="flex items-center justify-center h-7 w-7">
          <Image src={'/message.png'} alt=""/>

        </div>

      </div>
    </div>
  );
}

export default Navbar;
