# Celestial Care - Healthcare Management Platform

## Overview

Celestial Care is a comprehensive web-based healthcare management platform designed to bridge the gap between patients and healthcare providers. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, the platform enables efficient healthcare access by allowing patients to search for doctors, schedule appointments, and receive AI-powered health insights. The system supports three user roles: Admin, Doctor, and Patient, ensuring seamless interaction and management of healthcare services.

## Features

- **Appointment Scheduling**: Patients can search for doctors and book appointments based on availability.
- **Doctor-Patient Matching**: Matches patients with the most suitable doctors according to their health conditions.
- **Intelligent Chatbot**: Provides instant responses, symptom analysis, and healthcare tips.
- **JWT Authentication**: Ensures secure user authentication and data protection.
- **Role-Based Access**: Separate functionalities for Admins, Doctors, and Patients.

## System Architecture

### Frontend

- **React.js**: Component-based UI for a smooth user experience.
- **React-Router**: Enables seamless navigation.
- **React-Toastify**: Provides real-time notifications.

### Backend

- **Node.js & Express.js**: API management and server-side logic.
- **MongoDB**: NoSQL database for scalable data management.
- **JWT Authentication**: Secure authentication for all users.

## User Flows

### Patient Flow

1. Register/Login.
2. Search for doctors.
3. Book an appointment.
4. Attend consultation and receive prescriptions.

### Doctor Flow

1. Register/Login.
2. View and manage patient appointments.
3. Provide consultations and prescriptions.

### Admin Flow

1. Manage user accounts (patients, doctors, and admins).
2. Oversee and manage appointments.
3. Monitor system operations and ensure smooth healthcare service delivery.

## Future Enhancements

- **Telemedicine Integration**: Enable virtual consultations.
- **AI-Driven Diagnostics**: Advanced analytics for symptom detection.
- **E-Prescription & Pharmacy Integration**: Digital prescriptions and pharmacy connectivity.

## Conclusion

Celestial Care enhances healthcare accessibility by streamlining patient-doctor interactions through a robust and scalable MERN-based platform. With an intuitive interface, AI-powered chatbot, and secure authentication, the platform empowers users to make informed healthcare decisions while improving efficiency in healthcare management.

---

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/VEDITHREDDY26/HealthCare-Management.git
   ```
2. Navigate to the project directory:
   ```sh
   cd HealthCare-Management
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the backend server:
   ```sh
   npm run server
   ```
5. Start the frontend:
   ```sh
   npm start
   ```

## Technologies Used

- **Frontend**: React.js, React-Router, React-Toastify
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Contributors

- [Your Name]
- [Other Contributors]

## License

This project is licensed under the MIT License.



