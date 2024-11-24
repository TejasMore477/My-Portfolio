import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "./components/navbar/Navbar";
import MenuPage from "./components/menupage/MenuPage";
import Landing from "./components/heroSection/Landing";
import LetsDo from "./components/letsDoSection/LetsDo";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import PlayReel from "./components/reel/PlayReel";
import Projects from "./components/Project/Projects";
import Showcase from "./components/ProjectShowcase/Showcase";
import PageNotFound from "./components/pagenotfund/PageNotFound";
import Texto from "./components/About/Texto";

function Mother({ loaderAnime }) {
  const [showMenu, setShowMenu] = useState(false);
  const handelMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Adjust smoothness (closer to 0 = smoother)
      multiplier: 5, // Adjust scroll speed
    });

    // Cleanup on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="relative h-fit " ref={scrollRef} data-scroll-container>
      <div className="bg-black min-h-screen w-full text-white overflow-hidden px-[0.5rem]">
        <Navbar handelMenu={handelMenu} />
        <MenuPage
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          handelMenu={handelMenu}
        />
        <Landing loaderAnime={loaderAnime} />
        {/* <PlayReel /> */}
        {/* <Showcase/> */}
        {/* <Projects  handelMenu={handelMenu} showMenu={showMenu}
          setShowMenu={setShowMenu}
         /> */}
        {/* <LetsDo /> */}
        {/* <PageNotFound/> */}
        <About />
        {/* <div className="bg-black h-screen w-full grid place-content-center">
        <Texto text={"Tejas Madhukar More</a>,a 3rd-year student and a creative web developer from Maharashtra,India. I love building interactive websites that blend design andfunctionality seamlessly."}/>  
        </div> */}
      </div>
      {/* <div className="bg-black min-h-screen w-full text-white overflow-hidden px-[0.5rem]">
        <Footer />
      </div> */}
    </div>

  );
}

export default Mother;
