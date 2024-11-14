import React from "react";

function Description({ descriptionData }) {
  return (
    <div className="px-20 w-full flex items-center justify-between mb-20">
      <div className="w-[80%] h-[50vh] px-10">
        <h2 className="font-Poppins text-[1.2rem] leading-[1.4rem] font-light">
          something somehtindbh
        </h2>
        <h4 className="font-Poppins text-[1.2rem] text-neutral-500 font-extralight">
          sdondjcnkj
        </h4>
        <div className=" my-8">
          <p className="font-Poppins  my-2 leading-[1.4rem] font-extralight">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            quibusdam possimus animi id accusamus. Aspernatur perspiciatis
            officiis dolor cupiditate natus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. At quibusdam possimus animi id
            accusamus. Aspernatur perspiciatis officiis dolor cupiditate natus.
          </p>
          <p className="font-Poppins my-2 leading-[1.4rem] font-extralight">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            quibusdam possimus animi id accusamus. Aspernatur perspiciatis
            officiis dolor cupiditate natus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. At quibusdam possimus animi id
            accusamus. Aspernatur perspiciatis officiis dolor cupiditate natus.
          </p>
          <p className="font-Poppins my-2 leading-[1.4rem] font-extralight">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            quibusdam possimus animi id accusamus. Aspernatur perspiciatis
            officiis dolor cupiditate natus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. At quibusdam possimus animi id
            accusamus. Aspernatur perspiciatis officiis dolor cupiditate natus.
          </p>
        </div>
        <div className="flex items-center justify-start gap-10">
          <a className="font-Poppins text-sm text-end text-redO" href="">
            view site
          </a>
          <a className="font-Poppins text-sm text-end text-redO" href="">
            view site
          </a>
        </div>
      </div>
      <div className="w-[20%] h-[40vh]  grid place-content-center gap-10">
        <div>
          <h4 className="font-Orbitron my-2 leading-none font-extralight ">
            2023
          </h4>
        </div>

        <div>
          <h4 className="font-Orbitron my-2 leading-none font-thin text-xs tracking-widest">
            HTML
          </h4>
          <h4 className="font-Orbitron my-2 leading-none font-thin text-xs tracking-widest">
            CSS
          </h4>
          <h4 className="font-Orbitron my-2 leading-none font-thin text-xs tracking-widest">
            JAVA SCRIPT
          </h4>
          <h4 className="font-Orbitron my-2 leading-none font-thin text-xs tracking-widest">
            GSAP/SCROLL-TRIGGER
          </h4>
          <h4 className="font-Orbitron my-2 leading-none font-thin text-xs tracking-widest">
            LOCOMOTIVE JS
          </h4>
          <h4 className="font-Orbitron my-2 leading-none font-thin text-xs tracking-widest">
            SHEPHARD JS
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Description;
