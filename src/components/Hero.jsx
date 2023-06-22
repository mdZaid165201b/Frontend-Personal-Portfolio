import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../constants";
import { HashLoader } from "react-spinners";

const Hero = ({ nav }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}user-info`);
      console.log(data);
      setUser(data.user);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if (!user) return <div>loading...</div>;
  return (
    !nav && (
      <div className="my-10 sm:my-28" id="hero">
        <div className="flex items-center justify-center flex-col">
          {loading === true ? (
            <HashLoader color="#047857" />
          ) : (
            <>
              <div className="bg-gradient-to-br p-[3px] from-green-700 to-sky-700 rounded-full">
                <img
                  className="filter contrast-125 grayscale duration-150 shadow-xl -z-20 shadow-gray-700/5 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full object-cover bg-cover"
                  src={user.profilePic["url"]}
                  alt="person"
                />
              </div>

              <div className="text-center">
                <h1 className=" text-3xl tracking-wider my-10 text-gray-200">
                  Hello, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-sky-500 font-extrabold">
                    ZAID
                  </span>
                  ,
                  <br />
                  <span className="text-gray-200 font-normal">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-sky-500">
                      FullStack Developer
                    </span>{" "}
                    based in Pakistan
                  </span>
                </h1>
                <h1 className="text-gray-400 text-md sm:text-xl w-screen sm:w-[700px] tracking-wider">
                  {user.tagLine
                    ? user.tagLine
                    : "Full-stack developer with 1 year of experience in building web\n" +
                      "              applications and scrapper using MERN Stack."}
                </h1>
              </div>
              <div className="flex justify-evenly my-10 w-screen sm:w-[400px]">
                {/* bg-gradient-to-br from-green-700 to-sky-700 */}
                <Link
                  to="https://www.linkedin.com/in/muhammadzaid8920/"
                  target="_blank"
                >
                  <button className="bg-gradient-to-br from-green-700 to-sky-700 text-white rounded-full p-2 sm:p-3 tracking-wide  hover:from-sky-800 hover:to-green-600 hover:duration-100 shadow-lg shadow-black/40">
                    GET IN TOUCH
                  </button>
                </Link>
                <Link to="AllProjects">
                  <button className="text-white rounded-full p-2 sm:p-3 tracking-wide bg-gradient-to-br from-green-700 to-sky-700  duration-75 hover:from-sky-800 hover:to-green-600 shadow-lg shadow-black/40">
                    VIEW PROJECTS
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};
export default Hero;
