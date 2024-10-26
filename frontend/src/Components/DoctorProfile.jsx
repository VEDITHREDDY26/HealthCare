import React, { useEffect, useState } from 'react';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:3000/getDoctors', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }

      const data = await response.json();
      setDoctors(data.getDocs); // Update state with the fetched doctors
    } catch (err) {
      setError(err.message); // Update error state if there's an error
    } finally {
      setLoading(false); // Set loading to false after fetch is complete
    }
  };

  // Render loading, error, or the list of doctors
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Doctors List</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id} className="my-2 p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Cost per Visit: ₹{doctor.costPerVisit}</p>
            {/* Add a link to the doctor's profile or any other action */}
            <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">View Profile</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
