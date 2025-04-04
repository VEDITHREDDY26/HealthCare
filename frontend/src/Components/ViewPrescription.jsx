import { Pencil } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Auth } from '../Contexts/AuthContext';
import Loading from './Loading';

const ViewPrescription = () => {
  const [prescriptionData, setPrescriptionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user } = useContext(Auth);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/getPrescriptionsById/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch prescription');
      }

      const data = await response.json();
      setPrescriptionData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) return <Loading />;
  if (error) return <div>Error loading prescription details</div>;

  return (
    <div className='flex justify-center items-center p-6'>
      <div className='border-2 p-10 shadow-xl' id='print-content'>
        <h1 className='flex gap-2 text-2xl text-blue-800 font-bold ml-7'>
          Prescription - Issued on {prescriptionData.issuedOn} <Pencil className='cursor-pointer' />
        </h1>
        <hr className="bg-slate-400 h-[2px] mt-3" />
        <div className='mt-6 w-full h-full flex justify-center items-center flex-col gap-4'>
          <p><b>Patient Name</b> : {prescriptionData.patientName}</p>
          <p><b>Cause</b> : {prescriptionData.cause}</p>
          <p className='text-left mr-52 font-bold'>Medications :</p>
          
          {prescriptionData.medicines && prescriptionData.dosages ? (
            <table className='border-separate border border-slate-500 w-full'>
  <thead className='bg-blue-300 text-black'>
    <tr>
      <th className='border border-slate-600 p-4 text-lg font-semibold'>Medicine</th>
      <th className='border border-slate-600 p-4 text-lg font-semibold'>Dosage</th>
    </tr>
  </thead>
  <tbody>
    {prescriptionData.medicines.map((med, idx) => (
      <tr key={idx} className='hover:bg-blue-100 transition-colors duration-200'>
        <td className='border border-slate-600 p-4 text-center'>{med}</td>
        <td className='border border-slate-600 p-4 text-center'>{prescriptionData.dosages[idx]}</td>
      </tr>
    ))}
  </tbody>
</table>

          ) : (
            <p className='bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4 rounded-md '>No medications listed.</p>
          )}
          {/* <p className=''><b>Special Instructions</b> : {prescriptionData.specialInstructions}</p>  */}
          <button className="w-60 shadow-lg mt-4 hover:bg-blue-800 h-9 bg-blue-500 rounded-full text-white text-lg font-medium" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPrescription;
