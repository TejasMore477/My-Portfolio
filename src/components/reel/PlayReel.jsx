import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap, { ScrollTrigger } from "gsap/all";
import playreel from "/src/assets/videos/portfolio with text only animation promo 2.mp4";
import { a } from "framer-motion/client";

function PlayReel() {
  const parentRef = useRef(null);
  const videoRef = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  const vid = useRef(null);

  // Scroll values
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  const playX = useTransform(scrollYProgress, [0, 1], ["0%", "-550%"]);
  const reelX = useTransform(scrollYProgress, [0, 1], ["0%", "550%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top", // Start when the top of the parent hits the top of the viewport
        pin: true,
        scrub: 1,
        // markers: true, // Enable markers for debugging
      },
    });

    // Animate video size
    tl.to(videoRef.current, {
      width: "100%",
      height: "100%",
      duration: 1,
      ease: "power1.out",
    });

    // Animate words
    tl.to(
      play.current,
      {
        x: "-400%",
        duration: 4,
        scale: 3,
        ease: "power1.out",
      },
      a
    ).to(
      reel.current,
      {
        x: "400%",
        duration: 4,
        scale: 3,
        ease: "power1.out",
      },
      a
    );

    tl.to(vid.current, {
      opacity: 1,
      duration: 1,
      ease: "Power1.out",
    });

    return () => {
      // Cleanup ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [playX, reelX]);

  // click event for playing video
  useEffect(() => {
    const handleReelClick = () => {
      if (vid.current) {
        if (vid.current.paused) {
          vid.current.muted = false; // Unmute
          vid.current.play(); // Play
        } else {
          vid.current.pause(); // Pause
          vid.current.muted = true; // Mute
        }
      }
    };

    const reelElement = parentRef.current;

    if (reelElement) {
      reelElement.addEventListener("click", handleReelClick);
    }

    return () => {
      if (reelElement) {
        reelElement.removeEventListener("click", handleReelClick);
      }
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className="w-full min-h-screen xl:bg-red-950 lg:bg-fuchsia-950 md:bg-red-800 sm:bg-lime-600 bg-fuchsia-950 sm:pb-10 flex flex-col items-center sm:justify-between justify-center relative"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="w-full relative h-[50vh] sm:h-[90vh] flex items-center justify-between top-0">
        <button
          type="button"
          ref={videoRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden h-[0vh] w-[0vw]"
        >
          <video
            ref={vid}
            autoPlay
            loop
            muted
            className="w-full h-full scale-[1.6]"
            src={playreel}
          ></video>
        </button>

        <div className="flex items-center justify-center w-full sm:gap-5 gap-2">
          <h1
            ref={play}
            className="text-redO sm:text-[7rem] text-[14vw] font-Orbitron font-semibold z-[999] leading-none tracking-tight "
          >
            Play
          </h1>

          <h1
            ref={reel}
            className="text-redO sm:text-[7rem] text-[14vw] font-Orbitron font-semibold z-[999] leading-none tracking-tight "
          >
            Reel
          </h1>
        </div>
      </div>

      <p className="text-center sm:text-sm text-[3.5vw] font-Poppins font-light px-5 z-[999] sm:static absolute bottom-3">
        MY work is best experienced in motion. Don’t forget to put on your
        headphones.
      </p>
    </div>
  );
}

export default PlayReel;
