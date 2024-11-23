import React from "react";
import BubbleText from "../linkAnime/BubbleText";

function LinksComp() {
  return (
    <div className="w-full flex items-center justify-between ">
      {["LinkedIn", "GitHub", "Instagram", "Frontend Mentor", "LeetCode"].map(
        (links, index) => (
          <BubbleText text={links} key={index} />
        )
      )}
    </div>
  );
}

export default LinksComp;
