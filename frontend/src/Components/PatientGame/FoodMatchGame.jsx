// src/components/FoodInfoDisplay.js
import React, { useState, useEffect } from 'react';
import { foodItems } from './data';
import Card from './GameCard';

const FoodInfoDisplay = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);

  useEffect(() => {
    // Function to get 4 random food items
    const getRandomFoods = () => {
      // Shuffle the food items array randomly
      const shuffledFoods = [...foodItems].sort(() => Math.random() - 0.5);
      // Select the first 4 items after shuffle
      return shuffledFoods.slice(0, 4);
    };

    setSelectedFoods(getRandomFoods());
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 ">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Healthy Food Information</h2>
      <p className="text-lg text-gray-700 mb-8">Here are some healthy foods and their benefits for your well-being:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {selectedFoods.map((food, index) => (
          <Card key={index} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodInfoDisplay;
