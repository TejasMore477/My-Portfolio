import React from "react";
import ContactMe from "../About/ContactMe";

function LetsDo() {
  return (
    <div className="w-full h-screen py-20 px-[4.5rem] bg-neutral-950 text-center relative flex flex-col items-center rounded-t-2xl">
      <div className="h-[35vh] w-full mb-3">
        <h2 className="text-[9rem] font-Poppins font-semibold text-redO leading-[5rem] tracking-tighter">
          Collaborate,
        </h2>
        <h2 className="text-[9rem] font-Poppins font-semibold leading-[5rem] tracking-tighter">
          Innovate,
        </h2>
        <h2 className="text-[9rem] font-Poppins font-semibold text-redO leading-[5rem] tracking-tighter">
          Elevate!
        </h2>
      </div>

      <div className="h-[50vh] w-[75%] flex items-center justify-end relative gap-20">
        <div className="w-[20rem] h-full bg-zinc-800 bg-opacity-10 backdrop-blur-sm rounded-lg flex items-center justify-center absolute -top-10 left-10">
          <img
            className="w-[85%] h-[85%] object-cover object-center rounded-md shadow-lg shadow-zinc-950 "
            src="src/assets/images/profile/lance-reis-TTdJV-K1IUg-unsplash.jpg"
          ></img>
        </div>
        <div className="w-[38rem] text-start">
          <h2 className="font-Poppins text-2xl leading-none font-light pb-4">
            I'd be excited for a collaboration opportunity in your next venture.
          </h2>
          <h3 className="font-Poppins text-sm leading-none font-extralight pb-4 text-zinc-300">
            Bring your vision into the world and watch it make a difference!
          </h3>
          <h2 className="font-Poppins text-2xl leading-none font-light">
            Reach out and let's set up a chat.
          </h2>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default LetsDo;
