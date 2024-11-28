import React, { useEffect, useState } from "react";
import Mother from "./Mother";
import Cursor from "./components/Cursor/Cursor";
import Loader from "./components/loaderPage/Loader";
import CatchTheBallGame from "./components/OfflineGame/CatchTheBall";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [loaderAnime, setLoaderAnime] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);//navigator.onLine

  // Track mouse position
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove); // Cleanup the event listener
    };
  }, []);

  useEffect(() => {
    const handelOnline = () => setOnlineStatus(true);
    const handelOffline = () => setOnlineStatus(false);

    window.addEventListener("online", handelOnline);
    window.addEventListener("offline", handelOffline);

    return () => {
      window.removeEventListener("online", handelOnline);
      window.removeEventListener("offline", handelOffline);
    };
  }, []);

  return (
    <div
      className={`${
        loaderAnime
          ? "overflow-y-auto w-full"
          : "overflow-y-hidden h-screen w-full"
      }`}
    >
      <Cursor
        mousePosition={mousePosition}
        setMousePosition={setMousePosition}
      />
      <Loader loaderAnime={loaderAnime} setLoaderAnime={setLoaderAnime} />
      {onlineStatus ? (
        <Mother loaderAnime={loaderAnime} />
      ) : (
        <div className="w-full h-screen overflow-hidden">
          <CatchTheBallGame />
        </div>
      )}
      
    </div>
  );
}

export default App;
