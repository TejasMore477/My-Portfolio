import React, { useState } from "react";
import Menu from "./Menu";

function Navbar({ handelMenu }) {
  return (
    <div className="sm:h-20 h-14 w-full flex items-center justify-between xl:px-[4.5rem] sm:px-[2vw] px-5 fixed top-0 left-0 z-20">
      <p className="sm:text-2xl text-[7vw] font-Poppins text-redO font-bold leading-none tracking-tighter">
        TMMORE
      </p>
      <Menu handelMenu={handelMenu} />
    </div>
  );
}

export default Navbar;
