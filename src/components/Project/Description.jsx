import React from "react";

function Description({ descriptionData }) {
  return (
    <div className="px-20 w-full flex items-center justify-between mb-20">
      <div className="w-[80%] h-[50vh] px-10">
        <h2 className="font-Poppins text-[1.2rem] leading-[1.4rem] font-light">
          {descriptionData.Title}
        </h2>
        <h4 className="font-Poppins text-[1.2rem] text-neutral-500 font-extralight">
          {descriptionData.SubTitle}
        </h4>
        <div className=" my-8">
          <p className="font-Poppins  my-2 leading-[1.4rem] font-extralight">
            {descriptionData.Para1}
          </p>
          <p className="font-Poppins my-2 leading-[1.4rem] font-extralight">
            {descriptionData.Para2}
          </p>
          <p className="font-Poppins my-2 leading-[1.4rem] font-extralight">
            {descriptionData.Para3}
          </p>
        </div>
        <div className="flex items-center justify-start gap-10">
          <a
            className="font-Poppins text-sm text-end text-redO"
            href={descriptionData.GitHub}
            target="blank"
          >{"< GitHub >"}</a>
          <a
            className="font-Poppins text-sm text-end text-redO"
            href={descriptionData.LiveLink}
            target="blank"
          > {"< Live Link >"} </a>
        </div>
      </div>
      <div className="w-[20%] h-[40vh]  grid place-content-center gap-10">
        <div>
          <h4 className="font-Orbitron my-2 leading-none font-extralight text-redO">
            {descriptionData.Year}
          </h4>
        </div>

        <div>
          {descriptionData.Skills.map((elem, index) => (
            <h4
              key={index}
              className="font-Orbitron my-2 leading-none font-thin text-xs tracking-widest"
            >
              {elem}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
