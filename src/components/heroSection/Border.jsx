import React from "react";

function Border({ marginY = 3 }) {
  return (
    <div
      className={`w-full h-[1px] bg-zinc-500 overflow-hidden my-${marginY}`}
    ></div>
  );
}

export default Border;
