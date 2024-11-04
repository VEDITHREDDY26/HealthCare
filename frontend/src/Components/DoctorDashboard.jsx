import React from "react";
import { Outlet } from "react-router-dom";
import GuessTheDiseaseGame from './GuessTheDiseaseGame';

const quotes = [
  "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
  "To care for anyone else enough to make their problems one’s own is ever the beginning of one’s real life. - Marshall McLuhan",
  "The greatest medicine of all is teaching people how not to need it. - Hippocrates",
  "Wherever the art of medicine is loved, there is also a love of humanity. - Hippocrates",
  "The doctor sees all the weaknesses of mankind; the lawyer sees all the wickedness, the theologian sees all the stupidity. - Arthur Schopenhauer",
];

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const DoctorDashboard = () => {
  const quote = getRandomQuote();

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-pink-200 to-blue-300 p-6'>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome, Doctor!
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Thank you for your dedication to caring for others.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quote of the Day</h2>
          <p className="text-gray-600 italic">{quote}</p>
        </div>
        <br />
        <GuessTheDiseaseGame/>
        <Outlet />
      </div>
    </>
  );
};

export default DoctorDashboard;
