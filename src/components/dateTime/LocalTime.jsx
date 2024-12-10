import React, { useState, useEffect } from "react";

const LocalTime = ({ pos = "end", pos2 = "end", about = false, paddingtop="[8.5vh]" }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = currentTime
    .toLocaleTimeString("en-US", timeOptions)
    .replace(":", "::");

  // Format date
  const dateOptions = {
    year: "numeric",
    weekday: "long",
    month: "short",
    day: "numeric",
  };
  const formattedDate = currentTime.toLocaleDateString("en-US", dateOptions);

  return (
    <div className={`xl:py-10 pt-${paddingtop} ${about ? "px-0":"xl:px-[4.5rem] px-5"}`}>
      <p
        className={`text-${pos} sm:text-${pos2} lg:text-${pos} font-Orbitron xl:text-[0.8vw] lg:text-[1vw] md:text-[1.25vw] sm:text-[1.7vw] text-[3vw] tracking-[0.2em] leading-none`}
      >
        tejasmore660@gmail.com
      </p>
      <p
        className={`text-${pos} sm:text-${pos2} lg:text-${pos} font-Orbitron xl:text-[0.8vw] lg:text-[1vw] md:text-[1.25vw] sm:text-[1.7vw] text-[3vw] tracking-[0.2em] leading-none text-redO`}
      >
        Maharashtra, {formattedTime.toLowerCase()}
      </p>
      <p
        className={`text-${pos} sm:text-${pos2} lg:text-${pos} font-Orbitron xl:text-[0.8vw] lg:text-[1vw] md:text-[1.25vw] sm:text-[1.7vw] text-[3vw] tracking-[0.2em] leading-none`}
      >
        {formattedDate}
      </p>
    </div>
  );
};

export default LocalTime;
