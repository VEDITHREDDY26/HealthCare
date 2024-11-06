import { Home, Mail, Phone } from "lucide-react";
import React from "react";
import { ToastContainer } from "react-toastify";

const ContactUs = () => {
  return (
    <>
    <ToastContainer/>
     <div className="bg-gradient-to-r h-screen  h-[calc(100vh-3.1*4.7rem)]">
      <h1 className="text-3xl text-center  text-blue-600 font-semibold mt-[70px]">
        Contact Us
      </h1>
      <div className="flex justify-center items-center gap-x-40 w-full h-96 mt-20">
        <div className="flex justify-center items-center shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.4660030067316!2d78.59466117532264!3d17.196168308285333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1726205993002!5m2!1sen!2sin"
            width="500"
            height="350"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mr-10 leading-6 drop-shadow-lg">
          <div className="flex justify-center items-center gap-20">
            <Home color="#00b3ff" />
            <p>
              CVR College of Engineering<br></br>
              Vastunagar,Ibrahimpatnam<br></br>
              Hyderabad,Telangana,501510.
            </p>
          </div>
          <hr className="bg-slate-400 h-[1px] mt-4" />
          <div className="flex justify-start items-center gap-20 mt-10">
            <Phone color="#00b3ff" />
            <div>
  Call us<br />
  <p className="cursor-pointer">
    Praneeth Reddy : 
    <span className="underline underline-offset-1 hover:text-blue-600 cursor-pointer"> +91 9177337261</span>
    <br />
    Srilatha : 
    <span className="underline underline-offset-1 hover:text-blue-600 cursor-pointer"> +91 8977040409</span>
    <br />
    Vedith Reddy : 
    <span className="underline underline-offset-1 hover:text-blue-600 cursor-pointer"> +91 7675988756</span>
    <br />
  </p>
</div>
 
          </div>
          <hr className="bg-slate-400 h-[1px] mt-4" />
          <div className="flex justify-center items-center gap-20 mt-10">
            <Mail color="#00b3ff" />
            <div>
              For any further related queries<br></br>
              Email us at<br></br>
              <p className="underline underline-offset-1 cursor-pointer hover:text-blue-600">
                celestialcare@gmail.com
              </p>
            </div>
          </div>
          <hr className="bg-slate-400 h-[1px] mt-4" />
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
