import React, { useEffect, useState } from 'react';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center">
    {doctor ? (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">{doctor.name}</h2>
        <p className="text-lg text-gray-700 mb-2"><strong>Specialization:</strong> {doctor.specialization}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Cost per Visit:</strong> ₹{doctor.costPerVisit}</p>
      </div>
    ) : (
      <p className="text-center text-gray-600">No doctor found.</p>
    )}
  </div>


  );
};

export default DoctorsList;
