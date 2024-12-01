import React, { useState, useEffect } from "react";

const LocalTime = ({ pos = "end" }) => {
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
    <div className={`xl:py-10 pt-[8.5vh] xl:px-[4.5rem] px-5`}>
      <p
        className={`text-${pos} font-Orbitron sm:text-xs text-[3vw] tracking-[0.2em] leading-none`}
      >
        tejasmore660@gmail.com
      </p>
      <p
        className={`text-${pos} font-Orbitron sm:text-xs text-[3vw] tracking-[0.2em] leading-none text-redO`}
      >
        Maharashtra, {formattedTime.toLowerCase()}
      </p>
      <p
        className={`text-${pos} font-Orbitron sm:text-xs text-[3vw] tracking-[0.2em] leading-none`}
      >
        {formattedDate}
      </p>
    </div>
  );
};

export default LocalTime;
