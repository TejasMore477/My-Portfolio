import React, { useState, useEffect } from 'react';

const LocalTime = ({ pos = "end" }) => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [padd, setPadd] = useState("");

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

  useEffect(() => {
    if (pos === "end") {
      const paddingX = "px-[4.5rem]";
      setPadd(paddingX);
    }
  }, [pos]);

  // Format time 
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedTime = currentTime
    .toLocaleTimeString('en-US', timeOptions)
    .replace(':', '::');

  // Format date 
  const dateOptions = {
    year: 'numeric',
    weekday: 'long',
    month: 'short',
    day: 'numeric',

  };
  const formattedDate = currentTime.toLocaleDateString('en-US', dateOptions);

  return (
    <div className={`py-10 ${padd}`}>
      <p className={`text-${pos} font-Orbitron text-xs tracking-[0.2em] leading-none py-1`}>
        tejasmore660@gmail.com
      </p>
      <p className={`text-${pos} font-Orbitron text-xs tracking-[0.2em] leading-none py-1 text-redO`}>
        Maharashtra, {formattedTime.toLowerCase()}
      </p>
      <p className={`text-${pos} font-Orbitron text-xs tracking-[0.2em] leading-none py-1`}>
        {formattedDate}
      </p>
    </div>
  );
};

export default LocalTime;
