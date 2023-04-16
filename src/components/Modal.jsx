import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "mainWrapper") onClose();
  };
  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="mainWrapper"
    >
      <div className="w-[700px] flex flex-col">
        <button className="flex justify-end text-red-600 bg-[#2a2822] text-xl rounded-t-lg">
          <AiOutlineClose
            className="hover:text-red-400 m-1"
            onClick={() => onClose()}
            size={21}
          />
        </button>
        <hr class="h-[2px]   bg-gray-200 border-0 dark:bg-[#23211c]" />
        <div className="bg-[#2a2822]  p-2 rounded-b text-gray-200">
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                First Name
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="text"
                placeholder="Enter First Name..."
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Last Name
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="text"
                placeholder="Enter Last Name..."
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Tag Line
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="text"
                placeholder="Enter Tag Line..."
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Choose Images
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="file"
                multiple
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Github
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="text"
                placeholder="Enter Github Link..."
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Linkedin
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="text"
                placeholder="Enter Linkedin Link..."
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Facebook
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="text"
                placeholder="Enter Facebook Link..."
              />
            </div>
          </div>
          <div className="flex justify-center my-3">
            <button className="text-gray-200 bg-green-700 px-4 py-2 rounded hover:bg-green-800 duration-75">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
