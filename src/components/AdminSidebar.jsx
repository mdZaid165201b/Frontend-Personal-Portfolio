import React from "react";
import personImg from "../assets/img.jpg";
import { MdSpaceDashboard, MdDesignServices } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const SidebarTabs = [
    {
      title: "Dashboard",
      link: "home",
      icon: MdSpaceDashboard,
    },
    {
      title: "User Profile",
      link: "profile",
      icon: FaUserAlt,
    },
    {
      title: "Projects",
      link: "projects",
      icon: GoProject,
    },
    // {
    //   title: "Services",
    //   link: "services",
    //   icon: MdDesignServices,
    // },
    {
      title: "Todo",
      link: "todos",
      icon: BiTask,
    },
  ];

  const location = useLocation();

  return (
    <div className=" bg-black/25  shadow-xl shadow-slate-900  h-screen min-w-[250px] flex flex-col">
      <div className="w-full my-9">
        <div className="flex justify-center">
          <div className="max-w-[200px] max-h-[200px] flex flex-col justify-center">
            <img
              className="rounded-full filter contrast-125 w-[160px] h-[160px] border-4 border-x-emerald-900 border-y-cyan-900"
              src={personImg}
              alt="person"
            />

            <h1 className="text-gray-200 tracking-wider text-xl">
              Muhammad Zaid
            </h1>
          </div>
        </div>
      </div>
      {/* <AdminSidebar /> */}
      <hr className="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700 mx-4" />
      <div className="px-2 mt-5">
        {SidebarTabs?.map((element, index) => (
          <Link to={element?.link}>
            <div
              className={`w-full text-gray-200 ${
                location.pathname.split("/")[3] === element.link
                  ? "bg-green-700"
                  : null
              } active:bg-green-600 p-2 rounded-md tracking-wider mb-7 cursor-pointer hover:bg-green-800 hover:text-gray-100 duration-75`}
              key={index}
            >
              <div className="flex justify-start items-center">
                <element.icon size={22} />
                <h1 className="mx-3 text-lg">{element.title}</h1>
              </div>
            </div>
          </Link>
        ))}
        <Link to="/admin/login">
          <div
            className="w-full text-gray-200 active:bg-red-500 p-2 rounded-md tracking-wider mb-7 cursor-pointer hover:bg-red-700 hover:text-gray-100"
            key={Math.random()}
          >
            <div className="flex justify-start items-center">
              <AiOutlineLogout size={22} />
              <h1 className="mx-3 text-lg">Logout</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
