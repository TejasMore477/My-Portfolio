import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import MenuPage from "./components/menupage/MenuPage";
import Footer from "./components/footer/Footer";
import Landing from "./components/heroSection/Landing";
import LetsDo from "./components/letsDoSection/LetsDo";
import About from "./components/About/About";
import PlayReel from "./components/reel/PlayReel";
import Projects from "./components/Project/Projects";
import Showcase from "./components/ProjectShowcase/Showcase";
import PageNotFound from "./components/pagenotfund/PageNotFound"; 
import Home from "./components/home/Home";

// Layout component wraps the common Navbar, Menu, and Footer
function Layout({ showMenu, setShowMenu, handelMenu }) {
  return (
    <>
      <Navbar handelMenu={handelMenu} />
      <MenuPage
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        handelMenu={handelMenu}
      />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

function Mother({ loaderAnime }) {
  const [showMenu, setShowMenu] = useState(false);

  const handelMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative h-fit" data-scroll-container>
      <div className="bg-black min-h-screen w-full text-white overflow-hidden sm:px-[0.5rem]">
        <Routes>
          {/* Main Layout Route */}
          <Route
            element={
              <Layout
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                handelMenu={handelMenu}
              />
            }
          >
            {/* Home Route */}
            <Route path="/" element={<Home loaderAnime={loaderAnime} />} />

            {/* Projects Route */}
            <Route path="/projects" element={<Projects />} />

            {/* About Route */}
            <Route path="/about" element={<About />} />
          </Route>

          {/* Wildcard Route for Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Mother;