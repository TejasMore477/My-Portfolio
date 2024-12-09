import React from "react";
import StickyImage from "./StickyImage";
import OverlayCopy from "./OverlayCopy";
import Description from "./Description";

function Proj({ imgUrl, subheading, heading, descriptionData }) {
  return (
    <div>
      <div className="relative sm:h-[100vh] h-[70vh] overflow-hidden rounded-3xl">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <Description descriptionData={descriptionData} />
    </div>
  );
}

export default Proj;
