import React, { useState, useEffect } from 'react';

const StressBusterGame = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds game duration

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setClickCount(0);
    setIsPlaying(true);
    setTimeLeft(10);
  };

  const handleClick = () => {
    if (isPlaying) {
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Stress Buster!</h2>
      <p className="mb-4">Click the button as many times as you can in {timeLeft} seconds!</p>
      <button
        onClick={handleClick}
        disabled={!isPlaying}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200"
      >
        Click Me!
      </button>
      {isPlaying && <p className="mt-4 text-lg">Clicks: {clickCount}</p>}
      {!isPlaying && (
        <div className="mt-4">
          <h3 className="text-xl">Game Over!</h3>
          <p className="text-lg">Total Clicks: {clickCount}</p>
          <button
            onClick={startGame}
            className="mt-2 bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-600 transition duration-200"
          >
            Play Again
          </button>
        </div>
      )}
      {!isPlaying && timeLeft === 0 && (
        <p className="text-red-500 mt-2">Time&apos;s up! Good luck next time!</p>
      )}
    </div>
  );
};

export default StressBusterGame;
