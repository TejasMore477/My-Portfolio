import React from "react";
import Landing from "../heroSection/Landing";
import PlayReel from "../reel/PlayReel";
import Showcase from "../ProjectShowcase/Showcase";
import LetsDo from "../letsDoSection/LetsDo";

function Home({ loaderAnime }) {
  return (
    <div>
      <Landing loaderAnime={loaderAnime} />
      <PlayReel />
      {/* <Showcase /> */}
      {/* <LetsDo /> */}
    </div>
  );
}

export default Home;
