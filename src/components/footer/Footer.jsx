import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import RightCompo from "../menupage/RightCompo";
import LinksComp from "../menupage/LinksComp";
import Border from "../heroSection/Border";

function Footer() {
  const goToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  }
  return (
      <div className="w-full lg:h-screen md:h-[90vh] sm:h-[80vh] flex flex-col justify-between sm:pt-10 pt-5 items-start xl:px-[4.5rem] sm:px-[2vw] rounded-t-2xl bg-neutral-950">
        
        <div className="w-full flex flex-col items-end justify-between px-[1rem] sm:px-0">
          <RightCompo footer={true} />
          <div className="xl:w-1/2 lg:w-[60%] md:w-[90%] sm:w-full mb-8">
            <LinksComp />
          </div>
          <Border />

          <div className="sm:h-10 sm:w-auto w-full h-11 overflow-hidden">

            <motion.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="sm:text-sm text-[3.5vw] tracking-wider font-thin text-redO sm:text-right text-left mt-4 capitalize leading-none"
            >
              Wanna Play a Cool game ?
            </motion.p>

          </div>

          <div className="sm:h-8 h-12 overflow-hidden">

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="sm:text-sm text-[3.5vw] tracking-wider font-thin text-redO sm:text-right text-left mt-1 capitalize leading-none"
            >
              try turning off your internate connection while surfing through my
              site!
            </motion.p>

          </div>

        </div>

        <div className="flex items-center justify-between w-full sm:pt-0 pt-10">

          <div className="overflow-hidden xl:h-[35vh]">
            <motion.h1
              initial={{ y: "80%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: -0.2, duration: 1.2, ease: "easeInOut" }}
              className="font-Poppins xl:text-[20vw] sm:text-[21vw] text-[24.3vw] font-semibold leading-none -tracking-wider sm:tracking-[-2.5vw] xl:tracking-[-2rem]"
            >
              TMMORE
            </motion.h1>
          </div>

          <motion.button
          type="button"
          onClick={goToTop}
            className="xl:size-[15vw] lg:size-[18vw] sm:size-[17vw] hidden rounded-full bg-redO sm:grid place-content-center group hover:bg-black hover:border-[1px] hover:border-redO hover:transition hover:ease-in-out hover:duration-700"
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: -45 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
          >
            <span className="font-bold xl:text-[6rem] sm:text-[8vw]">
              <BsArrowUpRight />
            </span>
          </motion.button>
        </div>

      </div>
  );
}

export default Footer;
