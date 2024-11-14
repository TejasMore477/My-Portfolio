import React from "react";
import StickyImage from "./StickyImage";
import OverlayCopy from "./OverlayCopy";
import Description from "./Description";

function Proj({ imgUrl, subheading, heading, descriptionData }) {
  return (
    <div
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <div className="relative h-[100vh] ">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <Description descriptionData={descriptionData} />
    </div>
  );
}

export default Proj;
