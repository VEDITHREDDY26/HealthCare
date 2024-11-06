import React from 'react';
import { Outlet } from 'react-router-dom';
import StressBusterGame from './StressBusterGame';


const quotes = [
  "The greatest wealth is health. - Virgil",
  "Take care of your body. It's the only place you have to live. - Jim Rohn",
  "Health is not valued until sickness comes. - Thomas Fuller",
  "You can't enjoy wealth if you're not in health. - Anonymous",
  "The mind and body are not separate. what affects one, affects the other. - Unknown",
];

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const PatientDashboard = () => {
  const quote = getRandomQuote();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome To Celestial Care!</h1>
        <p className="text-lg text-center text-gray-700 mb-8">We’re here to support your health and well-being.</p>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quote of the Day</h2>
          <p className="text-gray-600 italic">{quote}</p>
        </div>
        <br />
        <StressBusterGame/>
        <Outlet />
      </div>
    </>
  );
};

export default PatientDashboard;
