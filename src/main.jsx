import React, { useEffect, useRef } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function SmoothScrollWrapper({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Adjust smoothness
      multiplier: 5, // Adjust scroll speed
    });

    // Re-initialize scroll on route change (or component mount)
    const handleRouteChange = () => {
      scroll.update();
    };

    // Cleanup on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrollWrapper>
        <App />
      </SmoothScrollWrapper>
    </BrowserRouter>
  </StrictMode>
);
