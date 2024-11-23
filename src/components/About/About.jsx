import React from "react";
import ContactMe from "./ContactMe";
import LocalTime from "../dateTime/LocalTime";

function About() {
  return (
    <div className="w-full h-screen bg-neutral-950 px-20 py-16 grid place-content-center rounded-b-xl">
      <div className="w-full h-full flex items-center justify-center gap-5">
        <div className="w-1/4 bg-zinc-800 bg-opacity-10 backdrop-blur-sm rounded-lg z-20 flex items-center gap-5 px-10 flex-col py-10">
          <img
            className="size-64 object-cover object-top rounded-md"
            src="src/assets/images/profile/andres-hernandez-nlNR4zy7g_I-unsplash.jpg"
            alt=""
          />
          <div>
            <h2 className="font-poppins">
              Blood@ <span className="text-redO">A+</span>
            </h2>
            <h2 className="items-center font-Poppins tracking-wider font-extralight pb-10">
              Open for work and collaborations.
            </h2>
            <LocalTime pos={"start"} />
          </div>
        </div>
        <div className="w-2/3 h-full relative px-3 py-5">
          <h3 className="w-full font-Poppins text-[1.3rem] leading-[1.4rem] font-light py-10">
            I am <a className="text-redO font-Poppins">Tejas Madhukar More</a>,
            a 3rd-year student and a creative web developer from Maharashtra,
            India. I love building interactive websites that blend design and
            functionality seamlessly.
          </h3>
          <div className="flex items-start justify-between gap-5">
            <h3 className="w-1/2 font-Poppins text-[1rem]  leading-[1.2rem] font-extralight py-4">
              I’m still early in my journey and haven’t had the chance to work
              with many companies yet, but I’m really excited to find
              opportunities where my creativity and skills are appreciated.
            </h3>
            <h3 className="w-1/2 font-Poppins text-[1rem]  leading-[1.2rem] font-extralight py-4">
              I’m always learning and growing, and I’d love to work with a team
              that values my work and helps me grow along the way.
            </h3>
          </div>
          <p className="w-full font-Poppins text-[1.3rem] leading-[1.4rem] font-light py-10">
            I've been interested in design and creativity since I was young.
            What started as a hobby, learning from YouTube, soon became a real
            passion. I improved my skills at{" "}
            <a className="text-redO font-Poppins">Sheryians Coding School</a>,
            where the{" "}
            <a className="text-redO font-Poppins">Frontend Domination</a> course
            helped boost both my creativity and problem-solving. For me, design
            is all about tackling challenges with bold ideas and clear
            communication. Over time, I've explored different areas, from UI/UX
            and illustrations to product design, branding, and art direction.
            Every project I work on is a chance to blend creativity with
            practical solutions.
          </p>
          <ContactMe paddingY={0} />
        </div>
      </div>
    </div>
  );
}

export default About;
