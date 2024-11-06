// /* eslint-disable react/prop-types */
// import React from "react";
// import avatar from "../assets/doc-avatar.avif";
// import { useNavigate } from "react-router-dom";

// const Card = ({ doctor }) => {
//   const navigate = useNavigate();

//   const handleBookAppointment = () => {
//     navigate(`/dashboard/patient/bookAppointment/${doctor._id}`);
//   };
//   return (
    
//       <div className="m-3 w-96 h-auto bg-slate-200 flex justify-around items-center leading-8 rounded-md shadow-2xl cursor-pointer hover:shadow-slate-400">
//         <div className="w-36 h-40">
//           <img className="p-3 rounded-full mr-12 mt-2" src={avatar} alt="Doctor Avatar" />
//         </div>
//         <div>
//           <div className="mt-2">
//             <div className="flex text-sm">
//               <p className="font-bold text-sky-700">Name</p>
//               <p> : {doctor.name}</p>
//             </div>
//             <div className="flex text-sm">
//               <p className="font-bold text-sky-700">Specialization</p>
//               <p> : {doctor.specialization}</p>
//             </div>
//             <div className="flex text-sm">
//               <p className="font-bold text-sky-700">Cost-Per-Booking</p>
//               <p> : ₹{doctor.costPerVisit}</p>
//             </div>
//           </div>
//           <button className="shadow-lg mt-4 hover:bg-blue-800 w-44 h-9 bg-blue-500 rounded-full text-white text-xs font-medium" onClick={handleBookAppointment}>
//             Book Appointment
//           </button>
//         </div>
//       </div>


      
    
//   );
// };

// export default Card;







/* eslint-disable react/prop-types */
// import React from "react";
// import avatar from "../assets/doc-avatar.avif";
// import { useNavigate } from "react-router-dom";

// const Card = ({ doctor }) => {
//   const navigate = useNavigate();

//   const handleBookAppointment = () => {
//     navigate(`/dashboard/patient/bookAppointment/${doctor._id}`);
//   };

//   return (
//     <div className="m-7  gap-3  w-[250px] h-[300px] bg-blue-100 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 cursor-pointer transition-shadow duration-300">
//       <div className="flex flex-col items-center p-4" onClick={handleBookAppointment}>
//         <img
//           className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-sm"
//           src={avatar}
//           alt="Doctor Avatar"
//         />
//         <div className="mt-3 text-center">
//             <div className="flex items-center">
//               <p className="font-bold text-sky-700 mr-1">Name:</p>
//               <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
//             </div>

//             <div className="flex items-center">
//               <p className="font-bold text-sky-700 mr-1">Specialization:</p>
//               <h3 className="text-lg font-semibold text-gray-800">{doctor.specialization}</h3>
//             </div>
//             <div className="flex items-center">
//               <p className="font-bold text-sky-700 mr-1">Cost per Visit:</p>
//               <h3 className="text-lg font-semibold text-gray-800">{doctor.costPerVisit}</h3>
//             </div>
//         </div>
//         <button
//           className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full text-sm font-medium shadow-md focus:outline-none transition-all duration-300"
//           onClick={handleBookAppointment}
//         >
//           Book Appointment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;




import React from "react";
import avatar from "../assets/doc-avatar.avif";
import { useNavigate } from "react-router-dom";

const Card = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate(`/dashboard/patient/bookAppointment/${doctor._id}`);
  };

  return (

    <div className="m-7 w-[250px] h-[340px] bg-blue-100 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 cursor-pointer transition-shadow duration-300" onClick={handleBookAppointment}>
      <div className="flex flex-col items-center p-4 h-full">
        <img
          className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-sm"
          src={avatar}
          alt="Doctor Avatar"
        />
        <div className="mt-3 text-center flex-grow w-full">
          <div className="flex items-center justify-center mb-1 flex-wrap">
            <p className="font-bold text-sky-700 mr-1">Name:</p>
            <h3 className="text-sm font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
              {doctor.name}
            </h3>
          </div>

          <div className="flex items-center justify-center mb-1 flex-wrap">
            <p className="font-bold text-sky-700 mr-1">Specialization:</p>
            <h3 className="text-sm font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
              {doctor.specialization}
            </h3>
          </div>

          <div className="flex items-center justify-center flex-wrap">
            <p className="font-bold text-sky-700 mr-1">Cost per Visit:</p>
            <h3 className="text-sm font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
              {doctor.costPerVisit}
            </h3>
          </div>
        </div>
        
        <button
          className="mt-4 px-4 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-full text-sm font-medium shadow-md focus:outline-none transition-all duration-300"
          onClick={handleBookAppointment}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Card;

