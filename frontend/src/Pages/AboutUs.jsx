import React from "react";
import photo from "../assets/top_service.png"; // replace with actual image
import doc_services from "../assets/doctor.png"; // replace with actual image
import feature1_img from "../assets/home_pngs/tablets.png";
import feature2_img from "../assets/home_pngs/stethoscope_906273.png"
import feature3_img from "../assets/home_pngs/thermometer_7858308.png";
import feature4_img from "../assets/home_pngs/injection_4877112.png"


const AboutUs = () => {
  return (
    <>
      {/* ABOUT US SECTION */}

      <div className="py-16 bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto px-6 lg:px-20 space-y-12 lg:space-y-0">
          {/* Left Section (Image) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={photo} // Replace with actual image path
              alt="Medical illustration"
              className="w-full h-auto max-w-md"
            />
          </div>

          {/* Right Section (Text) */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className=" text-blue-600 text-center text-4xl  font-semibold mt-3 mb-12  lg:text-left">
              About Us
            </h2>
            <p className="text-gray-600 mb-8 text-center lg:text-left">
              We specialize in providing innovative management solutions that
              elevate patient care, streamline operations, and ensure seamless
              regulatory compliance. With a rich history of excellence, we offer
              a comprehensive suite of services.
            </p>
            <div className="flex justify-center lg:justify-start">
              {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
                LEARN MORE
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}

      <div className=" py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          {/* Title */}
          <h1 className="  text-blue-600 text-center text-4xl  font-semibold mt-4 mb-12">
            Our Services
          </h1>

          {/* Main Container */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-16 lg:space-y-0 lg:space-x-16">
            {/* Left Column */}
            <div className="flex flex-col space-y-12 w-full lg:w-1/3">
              {/* Service 1 */}

              <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center">
                    <img
                      src={feature2_img} // Update this path to the actual SVG location
                      alt="Icon"
                      className="w-[200px] h-[80px] "
                    />
                  </div>

                <div>
                  <h2 className="text-xl font-semibold">Quality Healthcare</h2>
                  <p className="text-gray-500">
                    Providing comprehensive care to improve your health and
                    well-being.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-center space-x-4">
<div className="flex items-center justify-center">
                    <img
                      src={feature1_img} // Update this path to the actual SVG location
                      alt="Icon"
                      className="w-[200px] h-[80px] "
                    />
                  </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    Telemedicine Services
                  </h2>
                  <p className="text-gray-500">
                    Access healthcare professionals from the comfort of your
                    home.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Illustration */}
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <div className="rounded-full overflow-hidden w-64 h-64 flex justify-center items-center bg-white shadow-lg">
                <img
                  src={doc_services}
                  alt="Doctor Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-12 w-full lg:w-1/3">
              {/* Service 3 */}
              <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center">
                    <img
                      src={feature3_img} // Update this path to the actual SVG location
                      alt="Icon"
                      className="w-[200px] h-[80px] "
                    />
                  </div> 
                <div>
                  <h2 className="text-xl font-semibold">Preventive Care</h2>
                  <p className="text-gray-500">
                    Regular check-ups to prevent health issues and maintain
                    wellness.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center">
                    <img
                      src={feature4_img} // Update this path to the actual SVG location
                      alt="Icon"
                      className="w-[200px] h-[80px] "
                    />
                  </div>
                <div>
                  <h2 className="text-xl font-semibold">Emergency Services</h2>
                  <p className="text-gray-500">
                    Immediate care for critical health issues when you need it
                    most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;