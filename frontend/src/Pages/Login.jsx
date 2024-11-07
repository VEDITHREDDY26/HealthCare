import { useContext, useEffect, useState } from "react";
import login from "../assets/signup.avif";
import { Auth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState({
    isAdmin: false,
    isPatient: false,
    isDoctor: false
  });
  const { dispatch } = useContext(Auth);
  const nav = useNavigate();
  const { user } = useContext(Auth);

  useEffect(() => {
    if (user !== null) {
      nav("/dashboard");
    }
  }, [user, nav]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty (username, password, or role)
    if (!userName || !password || (!role.isAdmin && !role.isPatient && !role.isDoctor)) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password, roles: role })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login Successful', data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.r);
        dispatch({ type: 'LOGIN', payload: { token: data.token, role: data.r } });
        nav("/dashboard");
      } else {
        // Show a toast message for invalid credentials
        toast.error("Invalid credentials");
      }
      setUserName("");
      setPassword("");

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const selectedRole = e.target.value;
    setRole({
      isAdmin: selectedRole === "admin",
      isPatient: selectedRole === "patient",
      isDoctor: selectedRole === 'doctor'
    });
  };

  return (
    <div className="flex justify-center items-center gap-10 mt-7 h-[calc(100vh-2*5rem)]">
      <ToastContainer />
      <img className="w-1/3 h-auto" src={login} alt="Login" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-slate-700">Login to Account</h1>
        <form className="shadow-2xl flex flex-col justify-center mt-4 items-center border-2 rounded-lg w-96 gap-6 py-7">
          <div className="flex flex-col justify-start items-center gap-4">
            <p className='mr-[185px]'>Enter username</p>
            <input 
              className='p-2 outline-none border-2 rounded-lg w-full' 
              type="text" 
              placeholder="username" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="mr-[185px]">Enter password</p>
            <input 
              className='p-2 outline-none border-2 rounded-lg w-full' 
              type="password" 
              placeholder="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <select 
            name="role" 
            className="p-2 rounded-lg" 
            onChange={handleChange}
          >
            <option value="">Select role</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
            <option value="admin">Admin</option>
          </select>
          <button 
            className='shadow-lg hover:bg-blue-800 w-[315px] h-9 bg-blue-500 rounded-full text-white' 
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className="">
            <Link to='/signup' className="text-pink-600 font-semibold ">Not Registered yet ? </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
