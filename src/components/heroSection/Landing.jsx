import React from "react";
import Circle from "./Circle";
import TitleText from "./TitleText";
import Border from "./Border";

function Landing({ loaderAnime }) {
  return (
    <div className="h-[105vh] flex flex-col items-start justify-end px-[4.5rem] bg-neutral-950 pb-[5vh] rounded-2xl">
      <div className="pb-16 w-full">
        <p className="text-xs font-Orbitron font-light tracking-[0.2rem]">
          @WebDeveloper
        </p>
        <Border marginY={3} />
        <p className="text-xs font-Orbitron font-light tracking-[0.2rem]">
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
