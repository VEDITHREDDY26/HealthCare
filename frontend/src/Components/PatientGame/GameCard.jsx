// src/components/GameCard.js
import React from 'react';

const Card = ({ food }) => {
  return (
    <div className="w-48 h-24 p-4 m-4 bg-green-100 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-green-700">{food.name}</h3>
      <p className="text-sm text-gray-700 mt-2">{food.benefit}</p>
    </div>
  );
};

export default Card;
