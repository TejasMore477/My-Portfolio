import React from "react";
import Circle from "./Circle";
import TitleText from "./TitleText";
import Border from "./Border";

function Landing({ loaderAnime }) {
  return (
    <div className="md:h-[105vh] h-[75vh] flex flex-col items-start justify-end xl:px-[4.5rem] sm:px-[2vw] bg-neutral-900 sm:pb-[5vh] pb-[3vh] rounded-b-2xl">
      <div className="pb-16 w-full px-[1rem] sm:px-0">
        <p className=" lg:text-[0.8vw] md:text-[1vw] sm:text-[1.3vw] text-[2.5vw] font-Orbitron font-light tracking-[0.2rem]">
          @WebDeveloper
        </p>
        <Border marginY={3} />
        <p className="lg:text-[0.8vw] md:text-[1vw] sm:text-[1.3vw] text-[2.5vw] font-Orbitron font-light tracking-[0.2rem]">
          Scroll Down
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <TitleText loaderAnime={loaderAnime} />
        <Circle loaderAnime={loaderAnime} />
      </div>
    </div>
  );
}

export default Landing;
