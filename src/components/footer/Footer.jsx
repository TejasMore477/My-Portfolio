import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import RightCompo from "../menupage/RightCompo";
import LinksComp from "../menupage/LinksComp";
import Border from "../heroSection/Border";

function Footer() {
  return (
    <div className="w-full h-screen pt-8 bg-neutral-950">
      <div className="w-full h-full flex flex-col justify-between pt-10 items-start px-[4.5rem] rounded-t-2xl bg-black">
        
        <div className="w-full flex flex-col items-end justify-between -slate-900">
          <RightCompo footer={true} />
          <div className="w-1/2 mb-8">
            <LinksComp />
          </div>
          <Border />

          <div className="h-8 overflow-hidden">

            <motion.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-sm tracking-wider font-thin text-redO text-right mt-4 capitalize leading-none"
            >
              Wanna Play a Cool game ?
            </motion.p>

          </div>

          <div className="h-8 overflow-hidden">

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-sm tracking-wider font-thin text-redO text-right mt-1 capitalize leading-none"
            >
              try turning off your internate connection while surfing through my
              site!
            </motion.p>

          </div>

        </div>

        <div className="BottomText flex items-center justify-between w-full">

          <div className="overflow-hidden h-[35vh]">
            <motion.h1
              initial={{ y: "80%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: -0.2, duration: 1.2, ease: "easeInOut" }}
              className="font-Poppins text-[19rem] font-semibold leading-none tracking-[-2rem]"
            >
              TMMORE
            </motion.h1>
          </div>

          <motion.a
            href="/"
            className="size-[13rem] rounded-full bg-redO grid place-content-center group hover:bg-black hover:border-[1px] hover:border-redO hover:transition hover:ease-in-out hover:duration-700"
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: -45 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
          >
            <span className="font-bold text-[6rem]">
              <BsArrowUpRight />
            </span>
          </motion.a>
        </div>

      </div>
    </div>
  );
}

export default Footer;
