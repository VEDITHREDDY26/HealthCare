
import React from 'react'
import { Outlet } from 'react-router-dom'
// import AboutUs from '../Pages/AboutUs'


const AdminDashboard = () => {
  return (
    <>
    <div className='text-2xl text-blue-600 text-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4 rounded-md'>
      No Currently avaliable Notifications.
    </div>
    
    <Outlet />
    </>
  )
}

export default AdminDashboard
