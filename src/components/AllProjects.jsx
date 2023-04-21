import { useState } from "react";
import Project from "./Project";
import { projectsData } from "../assets/data";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import {useSelector} from "react-redux";

const AllProjects = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };
  const {projects} = useSelector(state => state.project);
  return (
    <>
      <Navbar navController={handleNav} nav={nav} />
      <div className="flex items-center justify-center mt-16">
        <h1 className="text-gray-300 text-3xl sm:text-4xl font-extrabold mt-8 tracking-wide">
          PROJECTS
          {/* <hr className="border-2 rounded-full border-yellow-200/40 cursor-pointer hover:border-red-500 duration-500"/> */}
        </h1>
      </div>
      <div className="w-screen">
        <div className="my-0 sm:px-32 flex flex-wrap justify-between">
          {projects.map((element) => (
            <Project data={element} />
          ))}
        </div>
        {/* {projectsData.length >= 6 ? (
          <div className="flex justify-center mt-10">
            <button className="p-3 bg-gradient-to-br from-green-800 to-sky-700 text-gray-300 rounded-md tracking-wider hover:from-sky-800 hover:to-green-600">
              View More
            </button>
          </div>
        ) : null} */}
      </div>
      <Footer />
    </>
  );
};

export default AllProjects;
