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
        x: Math.random() * 500 - 150,
        y: Math.random() * 500 - 150,
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
      className="h-screen overflow-hidden relative -z-30 flex flex-col items-center justify-center text-white bg-black text-center"
    >
      <div className="w-full fixed text-center top-[20%] -z-30 flex items-center flex-col">
        <div className="w-[25%] text-center overflow-hidden">
          <motion.h1 className="text-[3rem] mb-4 font-Poppins leading-none tracking-tight">
            Catch the Ball
          </motion.h1>
        </div>
        <p className="mb-2 text-xl">
          Time Left:{" "}
          <span className="text-redO font-Orbitron">{timeLeft}s</span>
        </p>
        <p className="mb-8 text-xl">
          Score: <span className="text-redO font-Orbitron">{score}</span>
        </p>
      </div>

      {gameOver ? (
        <div className="text-center -z-30 mt-10">
          <motion.h2
            className="text-redO text-[6rem] leading-none tracking-tight mb-4 font-Poppins font-semibold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
          >
            Game Over!
          </motion.h2>
          <p className="text-xl mb-4">
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
          className="bg-red-500 rounded-full relative cursor-none -z-20"
          whileTap={{ scale: 0 }} // Catching effect
        />
      )}

      {!gameOver && (
        <p className="mt-8 text-sm font-Poppins font-extralight fixed -z-30 top-[45%] left-[41.5%]">
          Click the Ball{" "}
          <span className="pl-20">to catch it and increase your score!</span>
        </p>
      )}
    </motion.div>
  );
}

export default CatchTheBallGame;
