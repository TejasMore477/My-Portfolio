import React from "react";

function Menu({ handelMenu, text = "Menu" }) {
  return (
    <button
      onClick={handelMenu}
      type="button"
      className="sm:text-xs text-[3.4vw] font-Poppins text-neutral-300"
    >
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="relative inline-block transition-all duration-300 group hover:font-bold hover:text-white"
        >
          {char}
          {/* Left sibling effect */}
          <span className="absolute left-0 -translate-x-full text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:font-medium">
            {idx > 0 ? text[idx - 1] : ""}
          </span>
          {/* Right sibling effect */}
          <span className="absolute right-0 translate-x-full text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:font-medium">
            {idx < text.length - 1 ? text[idx + 1] : ""}
          </span>
        </span>
      ))}
    </button>
  );
}

export default Menu;
