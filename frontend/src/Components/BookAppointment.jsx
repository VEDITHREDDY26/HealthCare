import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Card from './Card';

const BookAppointment = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        const response = await fetch(`http://localhost:3000/getDoctors`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (response.ok) {
            setDoctors(data.getDocs);
        }
    };

    // Filter doctors based on search term for name and specialization
    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex justify-center mb-4">
                <div className="relative">
                    <CiSearch className="absolute left-3 top-2 text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search for Doctors"
                        className="pl-10 pr-2 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        style={{ width: '600px' }} // Increased width for better visibility
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <Card key={doctor._id} doctor={doctor} />
                    ))
                ) : (
                    <p className='bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4 rounded-md'>No Doctors Available</p>
                )}
            </div>
        </>
    );
}

export default BookAppointment;
