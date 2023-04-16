import React from "react";
import { OverviewData } from "../assets/data";
import ProjectTable from "../components/ProjectTable";
import TodoListOverview from "../components/TodoListOverview";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className=" w-full h-full text-white p-4 ">
      <div className="mb-7 flex justify-start px-9">
        <h1 className="text-xl sm:text-2xl tracking-wider">Overview</h1>
      </div>
      <div className=" flex justify-evenly">
        {OverviewData.map((current, index) => (
          <div
            className={`rounded-md shadow-lg shadow-${current.shadow}-800/80  p-4 sm:h-[70px] sm:w-[230px] md:h-[120px] md:w-[360px] bg-gradient-to-r ${current.bgFrom} ${current.bgTo}`}
            key={index}
          >
            <h1 className="text-2xl text-gray-200 tracking-wide">
              {current.value}
            </h1>
            <h1 className="text-2xl text-gray-200 tracking-wide my-4">
              {current.title}
            </h1>
          </div>
        ))}
      </div>
      {/* tables area */}
      <div className="my-16">
        <div className="">
          <div className=" flex flex-col justify-center mx-12">
            <div className="text-gray-200 my-4">
              <h1 className="text-2xl">Projects Overview</h1>
            </div>
            <ProjectTable />
          </div>
          <div className="flex justify-center">
            <Link to="/admin/dashboard/projects">
              <button className="bg-green-700 flex justify-center text-center p-3 rounded-md tracking-wider hover:bg-green-800 duration-100">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <div className=" flex flex-col justify-center mx-12">
            <div className="text-gray-200 my-4">
              <h1 className="text-2xl">Todo List</h1>
            </div>
            <TodoListOverview />
          </div>
          <div className="flex justify-center">
            <Link to="/admin/dashboard/todos">
              <button className="bg-green-700 flex justify-center text-center p-3 rounded-md tracking-wider hover:bg-green-800 duration-100">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
