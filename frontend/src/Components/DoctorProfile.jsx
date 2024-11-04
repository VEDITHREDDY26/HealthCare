import React, { useEffect, useState } from 'react';
import avatar from '../assets/doc.avif'
const DoctorsList = () => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDoctorProfile();
  }, []);

  const fetchDoctorProfile = async () => {
    try {
      const response = await fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch doctor profile');
      }

      const data = await response.json();
      setDoctor(data.getDoc); 
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center text-blue-600 font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-red-600 font-semibold">Error: {error}</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-200 to-blue-300">
      {doctor ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <img
              src={avatar|| "https://via.placeholder.com/150"}
              alt={`${doctor.name}'s profile`}
              className="w-32 h-32 rounded-full shadow-lg object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-center text-black-800 mb-4 font-mono">{doctor.name}</h2>
          <p className="text-center text-gray-600 italic mb-4">
            Dedicated to providing compassionate care and using a patient-centered approach to ensure the best outcomes.
          </p>
          <div className="space-y-3 text-lg text-gray-700">
            <p className="flex items-center justify-center space-x-2">
              <strong className='text-blue-900'>Specialization : </strong> {doctor.specialization}
            </p>
            <p className="flex items-center justify-center space-x-2">
              <strong className='text-blue-900'>Cost per Visit : </strong> ₹{doctor.costPerVisit}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No doctor found.</p>
      )}
    </div>
  );
};

export default DoctorsList;
