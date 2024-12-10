import React from "react";
import Menu from "../navbar/Menu";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import RightCompo from "./RightCompo";
import LocalTime from "../dateTime/LocalTime";
import LinksComp from "./LinksComp";

function MenuPage({ showMenu, setShowMenu, handelMenu }) {
  return (
    <motion.div
      className="xl:w-1/2 w-[80%] xl:h-[70vh] fixed top-[8px] sm:right-[8px] right-[0px] sm:rounded-3xl overflow-hidden z-[999]"
      initial={{ y: -800 }}
      animate={showMenu ? { y: 0 } : { y: -800 }}
      transition={{ duration: 0.6, delay: 0.1, ease: easeInOut }}
    >
      <div className="bg-zinc-800 bg-opacity-10 backdrop-blur-sm sm:py-[1.4rem] sm:pt-[1.7rem] pt-[1rem] xl:px-[4.5rem] px-[1.1rem] sm:rounded-3xl rounded-l-3xl">
        <div className="w-full flex items-center justify-end">
          <Menu
            text="Close"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            handelMenu={handelMenu}
          />
        </div>

        <RightCompo />
        <LinksComp />
      </div>
      <LocalTime />
    </motion.div>
  );
}

export default MenuPage;
