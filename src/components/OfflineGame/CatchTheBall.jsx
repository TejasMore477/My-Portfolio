// CatchTheBallGame.jsx
import React, { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

function CatchTheBallGame({ onlineStatus }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30-second timer
  const [gameOver, setGameOver] = useState(false);
  const [ballSize, setBallSize] = useState(60); // Initial ball size
  const [isOnline, setIsOnline] = useState(onlineStatus);

  // Handle the catch action
  const handleCatch = () => {
    if (!gameOver) {
      setScore(score + 1);
      setPosition({
        x: Math.random() * 250 - 60,
        y: Math.random() * 250 - 10,
      });
      setBallSize(Math.random() * 30 + 40); // Randomize ball size (40 to 70px)
    }
  };

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true); // End game when time is up
    }
  }, [timeLeft, gameOver]);

  // Reset the game
  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setBallSize(60);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={isOnline && { y: "200%" }}
      transition={{ duration: 1, delay: 4, ease: easeInOut }}
      className="h-screen max-w-full overflow-hidden relative flex flex-col items-center justify-center text-white bg-black text-center"
    >
      <div className="w-full fixed text-center top-[20%] flex items-center flex-col ">
        <div className="text-center overflow-hidden">
          <p className=" text-xs capitalize font-Poppins text-redO"> <span className="text-white">No InterNet !! </span>but still you can...</p>
          <h1 className="lg:text-[3rem] md:text-[5.5vw] text-[8vw] mb-4 font-Poppins leading-none tracking-tight">
            Catch the Ball
          </h1>
        </div>
        <p className="mb-2 lg:text-xl text-md">
          Time Left:{" "}
          <span className="text-redO font-Orbitron">{timeLeft}s</span>
        </p>
        <p className="mb-8 lg:text-xl text-md">
          Score: <span className="text-redO font-Orbitron">{score}</span>
        </p>
      </div>

      {gameOver ? (
        <div className="text-center mt-10">
          <motion.h2
            className="text-redO mt-20 lg:text-[6rem] md:text-[11vw] text-[14vw] leading-none tracking-tight mb-4 font-Poppins font-semibold "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
          >
            Game Over!
          </motion.h2>
          <p className="lg:text-xl text-md mb-4 ">
            Final Score:{" "}
            <span className="text-redO font-Orbitron">{score}</span>
          </p>
          <motion.button
            onClick={resetGame}
            className="px-4 py-2 text-redO border-redO border-[1px] rounded mt-2 hover:bg-redO hover:text-black hover:border-black ease-in-out duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Play Again
          </motion.button>
          <p className="text-xs capitalize font-Poppins font-thin mt-4">
            don't forget to send me your higest score !!
          </p>
        </div>
      ) : (
        <motion.div
          onClick={handleCatch}
          style={{
            x: position.x,
            y: position.y,
            width: ballSize,
            height: ballSize,
          }}
          animate={{
            x: position.x,
            y: position.y,
          }}
          transition={{
            duration: Math.random() * 0.4 + 0.3, // Randomize duration for variety
          }}
          className="bg-red-500 rounded-full relative cursor-none z-10"
          whileTap={{ scale: 0 }} // Catching effect
        />
      )}
{/* className="lg:mt-8 mt-16 lg:text-md lg:top-[45%] lg:left-[41.5%] lg:-translate-x-0 lg:-translate-y-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-Poppins font-extralight fixed" */}
      {!gameOver && (
        <p className="lg:mt-8 bg-fuchsia-00 mt-16 lg:text-md lg:top-[46%] xl:left-[56.5%] xl:-translate-x-[56.5%] lg:left-[58%] lg:-translate-x-[58%] lg:-translate-y-[46%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-Poppins font-extralight fixed">
          Click the Ball{" "}
          <span className="xl:pl-[5rem] lg:pl-[5rem]">to catch it and increase your score!</span>
        </p>
      )}
    </motion.div>
  );
}

export default CatchTheBallGame;
