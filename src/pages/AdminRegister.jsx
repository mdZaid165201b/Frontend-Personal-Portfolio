import {React, useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { registerUser } from "../redux/features/auth/auth";
import {RotateLoader} from "react-spinners"
import { useNavigate } from "react-router-dom"


const AdminRegister = () => {
  const {loading, error} = useSelector((state) => state.auth)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = () => {

      dispatch(registerUser(data))
    if(!loading && !error) navigate("/admin/login")
    else alert("something went wrong!!!")
  }
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-fixed bg-center -z-30 justify-center"
      // style={{
      //   backgroundImage: `url("https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      //   opacity: 0.85,
      // }}
    >
      <div className={`container max-w-lg mx-auto flex flex-col items-center justify-center px-2 rounded-lg ${!loading && "bg-black/20"}`} style={{ opacity: 1 }}>
          {loading ?
              <RotateLoader
                  color="#16A34A"
                  margin={3}
                  size={18}
                  speedMultiplier={1}
              /> : (<div className="bg-black/20 px-6 py-8 rounded shadow-lg shadow-black/70 text-black w-full ">
              <h1 className="mb-8 text-3xl text-gray-200 text-center">Sign up</h1>
              <input
                  type="text"
                  className="block border border-green-800 focus:outline-none focus:ring-2 ring-green-800 focus:border-green-800 text-gray-200  w-full p-3 rounded-lg mb-4 bg-black/25"
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) => setData({
                      ...data,
                      firstName: e.target.value
                  })}
              />

              <input
                  type="text"
                  className="block border border-green-800 focus:outline-none focus:ring-2 ring-green-800 focus:border-green-800 text-gray-200  w-full p-3 rounded-lg mb-4 bg-black/25"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e) => setData({
                      ...data,
                      lastName: e.target.value
                  })}
              />

              <input
                  type="email"
                  className="block border border-green-800 focus:outline-none focus:ring-2 ring-green-800 focus:border-green-800 text-gray-200  w-full p-3 rounded-lg mb-4 bg-black/25"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setData({
                      ...data,
                      email: e.target.value
                  })}
              />
              <input
                  type="password"
                  className="block border border-green-800 focus:outline-none focus:ring-2 ring-green-800 focus:border-green-800 text-gray-200  w-full p-3 rounded-lg mb-4 bg-black/25"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setData({
                      ...data,
                      password: e.target.value
                  })}
              />

              <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-700 active:bg-green-800 duration-100 focus:outline-none my-1 tracking-wider text-lg"
                  onClick={handleRegister}
              >
                  Create Account
              </button>

              <div className=" mt-6 flex justify-center text-gray-200">
                  Already have an account?
                  <Link
                      to="/admin/login"
                      className="underline  text-blue ml-4 hover:text-green-500"
                      //   href="/admin/login"
                  >
                      Log in
                  </Link>
                  .
              </div>
          </div>)}
        </div>
    </div>
    
  );
};

export default AdminRegister;
