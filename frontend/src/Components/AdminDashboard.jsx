import React from 'react';
import { Outlet } from 'react-router-dom';

const quotes = [
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones."
];

const AdminDashboard = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Welcome Admin!
      </h1>
      <blockquote className="text-lg italic text-center text-gray-600 border-l-4 border-blue-500 pl-4 mb-8">
        {randomQuote}
      </blockquote>
      <Outlet />
    </div>
  );
}

export default AdminDashboard;
