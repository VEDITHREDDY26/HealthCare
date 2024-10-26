import React from 'react'
import { Outlet } from 'react-router-dom'

const PatientDashboard = () => {
  return (
    <>
        <div className="text-2xl text-blue-600 text-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-6 rounded-lg shadow-md">
            No Currently available Notifications.
        </div>
        <Outlet />
    </>
  );
}

export default PatientDashboard
