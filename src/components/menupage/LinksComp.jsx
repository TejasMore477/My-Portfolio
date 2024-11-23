import React from "react";

function LinksComp() {
  return (
    <div className="w-full flex items-center justify-between ">
      {["LinkedIn", "GitHub", "Instagram", "Frontend Mentor", "LeetCode"].map(
        (links, index) => (
          <button
            key={index}
            type="button"
            className="font-Poppins text-sm font-extralight"
          >
            {links}
          </button>
        )
      )}
    </div>
  );
}

export default LinksComp;
