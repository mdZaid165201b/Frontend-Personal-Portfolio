import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900/5 mt-12 relative bottom-0 w-full">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div className="text-xl text-gray-200 align-middle text-start flex justify-start items-center">
          <h1 className="font-bold align-middle">ZFOLIO.</h1>
        </div>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Services
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Projects
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="">
        <div className="flex justify-center">
          <div className="flex justify-evenly my-3">
            <a href="https://github.com/mdZaid165201b" target="_blank"><FaGithub  size={25} className="mx-4 text-gray-200 hover:text-gray-500/90 duration-150 cursor-pointer" /></a>
            <a href="https://www.linkedin.com/in/muhammadzaid8920/" target="_blank">
              <FaLinkedin  size={25} className="mx-4 text-gray-200 hover:text-gray-500/90 duration-150 cursor-pointer"  />
            </a>
            {/* <FaInstagramSquare  size={25} className="mx-4 text-gray-200 hover:text-red-400/80" /> */}
            <a href="https://www.facebook.com/ZaidNaeem6" target="_blank"><BsFacebook  size={25} className="mx-4 text-gray-200 hover:text-gray-500/90 duration-150 cursor-pointer" /></a>
          </div>
        </div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {" "}
          <a href="" class="hover:underline">
            ZFOLIO
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
