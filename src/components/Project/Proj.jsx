import React from "react";
import StickyImage from "./StickyImage";
import OverlayCopy from "./OverlayCopy";
import Description from "./Description";

import i0 from "/src/assets/images/projects/ProjectObays.png";
import i1 from "/src/assets/images/projects/ProjectOchi.png";
import i2 from "/src/assets/images/projects/ProjectArock.png";
import i3 from "/src/assets/images/projects/ProjectRefokus.png";
import i4 from "/src/assets/images/projects/ProjectExoape.png";
import i5 from "/src/assets/images/projects/ProjectPremier.png";

function Proj({indeximage,subheading, heading, descriptionData }) {
  const projectImages = [i0, i1, i2, i3, i4, i5]
  return (
    <div>
      <div className="relative sm:h-[100vh] h-[70vh] overflow-hidden rounded-3xl">
        <StickyImage imgUrl={projectImages[indeximage]} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <Description descriptionData={descriptionData} />
    </div>
  );
}

export default Proj;
