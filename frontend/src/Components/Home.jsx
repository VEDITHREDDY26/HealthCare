import React, { useContext } from "react";

import temp from '../assets/doctor.png'
import ContactUs from '../Pages/ContactUs'
import AboutUs from "../Pages/AboutUs";
import { Auth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import bed_doc from "../assets/banner_img.png";

import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const {user} = useContext(Auth);
  const {role} = useContext(Auth);
  const nav = useNavigate();

  
  const handleAppointment = () => {
    if (user) {
      if (role === "Patient") {
        nav('/dashboard/patient/bookAppointment');
      } else {
        toast.error("Only Patient have access")
      }
    } else {
      nav("/login");
    }
  
  }
  return (
    <>
    
    {/* <div className="flex justify-evenly items-center w-auto h-auto bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100"> */}
    {/* <div className="flex justify-evenly items-center w-auto h-auto">
      <div className="flex-col justify-center items-center mt-5">
        <h1 className="text-5xl text-slate-600 font-bold mt-5 leading-tight">
          We help patients<br></br>to live a longer<br></br>healthy life
        </h1>
        <p className="mt-7 text-slate-500">
        Connecting you with the right healthcare professionals at your fingertips. Book appointments,<br></br> explore hospital listings, and access personalized healthcare solutions—all in one place.<br></br> We make healthcare accessible, efficient, and tailored to your needs. Your health, our priority.
        </p>
        <button className="shadow-lg mt-7 hover:bg-blue-800 w-44 h-9 bg-blue-500 rounded-full text-white text-xs font-medium" onClick={handleAppointment}>
          Request an Appointment
        </button>
        <div className="mt-7 flex justify-center items-center gap-14">
          <div className="pb-8">
            <h1 className="text-4xl border-b-orange-300 border-b-4">30+</h1>
            <p className="mt-2">Years of experience</p>
          </div>
          <div className="pb-8">
            <h1 className="text-4xl border-b-violet-300 border-b-4">15+</h1>
            <p className="mt-2">Clinic Location</p>
          </div>
          <div className="pb-8">
            <h1 className="text-4xl border-b-green-300 border-b-4">100%</h1>
            <p className="mt-2">Patient satisfaction</p>
          </div>
        </div>
        
      </div>
      <div>
          <div className="">
            <img className="w-96 h-auto rounded-full shadow-2xl" src={temp} />
          </div>
      </div>
    </div> */}


    
<div className=" min-h-screen flex items-center justify-center ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-blue-600 text-sm uppercase font-bold mb-2">
              We Are Here For Your Care
            </p>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Best Care & Better Doctor
            </h1>
            <p className="text-gray-600 mb-6">
            Revolutionize your healthcare experience with a seamless platform connecting patients, providers, and caregivers. From appointment scheduling to health records management, our solution ensures quality care and easy access—whenever and wherever you need it.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium  " onClick={handleAppointment}>
              MAKE AN APPOINTMENT
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={bed_doc}
              alt="Doctor and patient"
              className="w-2/3 h-auto"
            />
          </div>
        </div>
      </div>


      <AboutUs />
      <ContactUs />
    
    </>
    
  );
};

export default Home;