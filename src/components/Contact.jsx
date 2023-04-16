// import React from 'react'
import Contact_image from "../assets/231.png";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center " id="contacts">
      <div className="flex items-center justify-center mt-16">
        <h1 className="text-gray-300 text-3xl sm:text-4xl font-extrabold mt-8 tracking-wide">
          CONTACT
          {/* <hr className="border-2 rounded-full border-yellow-200/40 cursor-pointer hover:border-red-500 duration-500"/> */}
        </h1>
      </div>

      <div className="w-full flex justify-between">
        <div className="hidden sm:w-[50%] sm:flex sm:justify-center">
          <img
            src={Contact_image}
            alt=""
            className="sm:w-[700px] object-contain"
          />
        </div>
        <div className=" w-screen sm:w-[50%] flex items-center text-center flex-col py-5 text-gray-300">
          <h1 className="hidden sm:text-3xl">Drop us a line</h1>

          <div className=" sm:mx-0">
            <div
              className="flex flex-col justify-center text-start my-3 
            "
            >
              <label htmlFor="" className="text-gray-300 text-xl py-1">
                Email
              </label>
              <input
                type="email"
                className="bg-[#2e2e2e] border-2 focus:outline-none focus:ring-1 ring-cyan-600 focus:border-cyan-600  w-full sm:w-[500px] p-1 rounded-md border-cyan-700 outline-none"
                placeholder="Enter email..."
              />
            </div>
            <div
              className="flex flex-col justify-center text-start my-3 
            "
            >
              <label htmlFor="" className="text-gray-300 text-xl py-1">
                Subject
              </label>
              <input
                type="text"
                className="bg-[#2e2e2e] border-2 focus:outline-none focus:ring-1 ring-cyan-600 focus:border-cyan-600  w-full sm:w-[500px] p-1 rounded-md border-cyan-700 outline-none"
                placeholder="Enter subject..."
              />
            </div>
            <div
              className="flex flex-col justify-center text-start my-3 
            "
            >
              <label htmlFor="" className="text-gray-300 text-xl py-1">
                Message
              </label>
              <textarea
                cols="30"
                rows="10"
                className="bg-[#2e2e2e] border-2 focus:outline-none focus:ring-1 ring-cyan-600 focus:border-cyan-600  w-full sm:w-[500px] p-1 rounded-md border-cyan-700 outline-none"
                placeholder="Enter message..."
              />
            </div>
          </div>
          <button className="mt-5  bg-gradient-to-br from-teal-600 to-sky-700 py-3 px-2 sm:px-3 rounded-sm tracking-wider hover:bg-[#126f72] duration-100 ">
            Submit Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
