import React, { useContext } from "react";
import { Cross } from "lucide-react";
import { toast } from "react-toastify";  // No need to import ToastContainer here
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../Contexts/AuthContext";

const Navbar = () => {
  const { user, role } = useContext(Auth); // Get user and role from context
  const { dispatch } = useContext(Auth);
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    dispatch({ type: "LOGOUT" });
    nav("/");
  };

  const handleFindDoctor = () => {
    if (user) {
      if (role === "Patient") {
        nav("/dashboard/patient/bookAppointment");
      } else if (role === "Doctor") {
        toast.error("Doctors cannot access this page");
      } else if (role === "Admin") {
        toast.error("Admins cannot access this page");
      }
    } else {
      nav("/login");
    }
  };

  const handleLogin = () => {
    nav("/login");
  };

  const handleAbout = () => {
    nav("/AboutUs");
  };

  const handleContact = () => {
    nav("/ContactUs");
  };

  return (
    <div className="sticky top-0 z-50 drop-shadow-lg flex items-center w-full h-20 bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-200">
      {/* ToastContainer should be in App.js, not here */}
      <div className="flex items-center pl-10">
        <Cross className="w-16 h-16 cursor-pointer" />
        <Link to="/" className="font-bold text-xl cursor-pointer ml-2">
          Celestial Care
        </Link>
      </div>
      <ul className="flex justify-center items-center gap-10 flex-grow">
        <Link
          to="/"
          className="hover:border-b-2 border-slate-600 cursor-pointer text-md"
        >
          Home
        </Link>
        <li
          onClick={handleAbout}
          className="hover:border-b-2 border-slate-600 cursor-pointer"
        >
          About us
        </li>
        <li
          onClick={handleContact}
          className="hover:border-b-2 border-slate-600 cursor-pointer"
        >
          Contact us
        </li>
        <li
          onClick={handleFindDoctor}
          className="hover:border-b-2 border-slate-600 cursor-pointer"
        >
          Find a Doctor
        </li>
        {user !== null ? (
          <Link
            to="/dashboard"
            className="hover:border-b-2 border-slate-600 cursor-pointer"
          >
            Dashboard
          </Link>
        ) : null}
      </ul>

      <button
        onClick={() => (user !== null ? handleLogout() : handleLogin())}
        className="shadow-lg hover:bg-blue-800 w-20 h-9 bg-blue-500 rounded-full text-white mr-[55px]"
      >
        {user !== null ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Navbar;
