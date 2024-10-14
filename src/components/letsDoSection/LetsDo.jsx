import React from "react";
import ContactMe from "../About/ContactMe";

function LetsDo() {
  return (
    <div className="max-w-screen-2xl mx-auto h-screen py-20 px-20 text-center relative">
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

      <div className="h-[50vh] w-full flex items-center justify-center relative gap-20">
        <div className="w-[20rem] h-full bg-zinc-300 opacity-50 backdrop-blur-3xl rounded-sm">
          <img
            className="w-full h-full bg-green-300 object-cover object-center"
            src="src/assets/images/profile/lance-reis-TTdJV-K1IUg-unsplash.jpg"
          ></img>
        </div>
        <div className="w-[38rem] text-start ">
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
