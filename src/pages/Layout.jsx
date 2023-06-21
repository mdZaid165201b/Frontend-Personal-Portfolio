import React, {useEffect} from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import {fetchProjects} from "../redux/features/project/project";
import {useDispatch} from "react-redux";

const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProjects());
  }, [])
  return (
    <div className="max-w-screen h-screen ">
      <div className="flex">
        <AdminSidebar />
        {/* Navbar and main content area */}
        <div className="h-screen w-full flex flex-col">
          <div className="w-full h-[75px] text-gray-200 bg-[#1a1a18] shadow-md shadow-black/50 flex justify-center items-center overflow-y-scroll">
            <h1 className="text-gray-200 text-2xl tracking-wider uppercase">
              Admin Panel
            </h1>
          </div>
          <div className=" w-full h-full my-4 overflow-y-scroll">{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
