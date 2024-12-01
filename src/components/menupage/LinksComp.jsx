import React from "react";
import BubbleText from "../linkAnime/BubbleText";

function LinksComp() {
  const linksData = [
    {link:"https://www.linkedin.com/in/tejas-more-6b6ab4257/",name:"LinkedIn"},
    {link:"https://github.com/TejasMore477",name:"GitHub"},
    {link:"https://www.instagram.com/caliber_is_50/profilecard/",name:"Instagram"},
    {link:"https://www.frontendmentor.io/home",name:"Frontend Mentor"},
    {link:"https://leetcode.com/u/TejasMore660/",name:"LeetCode"},
  ]
  return (
    <div className="w-full sm:pb-0 pb-[1rem] flex sm:gap-0 gap-[0.4rem] sm:flex-row flex-col sm:items-center items-end justify-between ">
      {linksData.map(
        (links, index) => (
          <BubbleText text={links.name} link={links.link} key={index} />
        )
      )}
    </div>
  );
}

export default LinksComp;
