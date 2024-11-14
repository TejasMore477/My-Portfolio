// CatchTheBallGame.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CatchTheBallGame() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30-second timer
  const [gameOver, setGameOver] = useState(false);
  const [ballSize, setBallSize] = useState(60); // Initial ball size

  // Handle the catch action
  const handleCatch = () => {
    if (!gameOver) {
      setScore(score + 1);
      setPosition({
        x: Math.random() * 300 - 150,
        y: Math.random() * 300 - 150,
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
    <div className="h-screen flex flex-col items-center justify-center text-white bg-black">
      <h1 className="text-2xl mb-4">Catch the Ball Game</h1>
      <p className="mb-2">Time Left: {timeLeft}s</p>
      <p className="mb-8">Score: {score}</p>

      {gameOver ? (
        <div className="text-center">
          <h2 className="text-3xl mb-4">Game Over!</h2>
          <p className="text-xl mb-4">Final Score: {score}</p>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-blue-500 rounded mt-2"
          >
            Play Again
          </button>
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
          className="bg-red-500 rounded-full cursor-pointer"
          whileTap={{ scale: 0.8 }} // Catching effect
        />
      )}

      {!gameOver && (
        <p className="mt-8">Click the ball to catch it and increase your score!</p>
      )}
    </div>
  );
}

export default CatchTheBallGame;
