import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSun, BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";
import Resume from "../assets/resume.pdf";

const Navbar = ({ navController, nav }) => {
  // const [nav, setNav] = useState(false);
  // const handleNav = () => {
  //   setNav(!nav);
  //   console.log(nav);
  // };
  return (
    <>
      <div className="hidden sm:flex  min-w-full bg-[#1a1a18] h-[65px] items-center justify-between px-10 z-40 top-0 fixed shadow-lg">
        <Link to="/">
          <div className="text-xl text-gray-200 align-middle text-start flex justify-start items-center hover:pointer">
            <h1 className="font-bold align-middle">ZFOLIO.</h1>
          </div>
        </Link>
        <div className="text-gray-300">
          <ul className="flex justify-evenly ml-14">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <NavHashLink to="/">
                <li className=" px-5 text-lg mx-3 cursor-pointer hover:text-gray-100 duration-100">
                  Home
                </li>
              </NavHashLink>
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <NavHashLink to="/#skills" smooth>
                <li className=" px-5 text-lg mx-3 cursor-pointer hover:text-gray-100 duration-100">
                  Skills
                </li>
              </NavHashLink>
            </ScrollLink>
            <Link to="/#projects">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <NavHashLink to="/#projects">
                  <li className=" px-5 text-lg mx-3 cursor-pointer hover:text-gray-100 duration-100">
                    Projects
                  </li>
                </NavHashLink>
              </ScrollLink>
            </Link>
            <ScrollLink
              to="contacts"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <NavHashLink to="/#contacts">
                <li className=" px-5 text-lg mx-3 cursor-pointer hover:text-gray-100 duration-100">
                  Contact
                </li>
              </NavHashLink>
            </ScrollLink>
          </ul>
        </div>
        <div className="w-[150px] flex justify-between items-center">
          <BsSun className="text-gray-200 cursor-pointer" size={20} />
          <Link to={Resume} target="_blank">
            <div className="bg-gray-300 md:rounded-2xl flex justify-center hover:bg-gray-400 hover:cursor-pointer duration-150">
              <button className=" md:p-1 md:px-2 md:rounded-2xl text-[#161513] font-semibold flex justify-center">
                Resume
              </button>
              <BsDownload className="my-auto mx-[8px] flex text-center justify-center" />
            </div>
          </Link>
        </div>
      </div>
      {/* mobile view */}
      <div
        className={`${
          nav &&
          "z-40 bg-gradient-to-br p-[3px] from-sky-900/70 to-teal-700 flex flex-col w-screen h-screen py-20 px-5 duration-200 sm:hidden"
        }`}
      >
        <div className="flex items-center justify-between relative -top-16 sm:hidden">
          <Link to="/">
            <div className="text-left text-xl text-gray-200 ">
              <h1 className="font-bold align-middle">ZFOLIO.</h1>
            </div>
          </Link>

          {nav ? (
            <AiOutlineClose size={23} color="white" onClick={navController} />
          ) : (
            <FaBars size={20} color="white" onClick={navController} />
          )}
        </div>
        {nav ? (
          <div className="">
            <div className="text-gray-300 h-[100%] flex justify-evenly">
              <ul className=" flex flex-col items-center justify-between">
                <NavHashLink
                  to="/#hero"
                  smooth={true}
                  onClick={navController}
                >
                  <li className=" px-5 text-lg my-4">Home</li>
                </NavHashLink>
                <NavHashLink
                  to="/#skills"
                  smooth={true}
                  onClick={navController}
                >
                  <li className=" px-5 text-lg my-4">Skills</li>
                </NavHashLink>
                <NavHashLink
                  to="/#projects"
                  smooth={true}
                  onClick={navController}
                >
                  <li className=" px-5 text-lg my-4">Projects</li>
                </NavHashLink>

                <NavHashLink
                  to="/#contacts"
                  smooth={true}
                  onClick={navController}
                >
                  <li className=" px-5 text-lg my-4">Contact</li>
                </NavHashLink>
              </ul>
            </div>
            <div className="flex items-center justify-center my-10">
              <button className="bg-gray-300 p-1 px-4 rounded-2xl text-[#161513] font-semibold">
                LET'S TALK
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between mx-4 duration-100 sm:hidden">
            <Link to="/">
              <div className="text-left text-xl text-gray-200 ">
                <h1 className="font-bold align-middle">ZFOLIO.</h1>
              </div>
            </Link>
            <RxHamburgerMenu
              color="whitesmoke"
              size={19}
              onClick={navController}
            />
          </div>
        )}
      </div>
    </>
    // <div className="w-full min-h-[70px] flex justify-between items-center z-10 text-white bg-[#111211] shadow-sm shadow-red-500 fixed">
    //   {/* <BsFillFilterSquareFill className="sm:hidden text-gray-800 text-2xl ml-4" /> */}
    //   <ul className="hidden sm:flex px-4">
    //     <li className="ml-8 text-lg font-medium hover:text-red-700 hover:border-b hover:border-red-700 duration-200">
    //       {/* <a href="/">Home</a> */}
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li className="ml-8 text-lg font-medium hover:text-red-700 hover:border-b hover:border-red-700 duration-200">
    //       {/* <a href="#gallery">Properties</a> */}
    //       <Link to="/properties">Properties</Link>
    //     </li>
    //     <li className="ml-8 text-lg font-medium hover:text-red-700 hover:border-b hover:border-red-700 duration-200">
    //       {/* <a href="#deals">About</a> */}
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li className="ml-8 text-lg font-medium hover:text-red-700 hover:border-b hover:border-red-700 duration-200">
    //       {/* <a href="#contact">Contact</a> */}
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    //   <Link to="/">
    //     <div className="text-lg text-center flex pl-4 sm:ml-[250px]  sm:text-3xl  cursor-pointer">
    //       <span className="text-red-700 border-b-2 border-red-700 italic">
    //         Lahore
    //       </span>
    //       <span className="text-red-700 font-bold border-b-2 border-red-700 italic">
    //         {" "}
    //         Estate
    //       </span>
    //     </div>
    //   </Link>
    //   <div className="hidden sm:flex justify-between pl-[300px]">
    //     <FaFacebookF className="mx-4 text-[20px] cursor-pointer hover:text-[#4267B2]" />
    //     <FaTwitter className="mx-4 text-[20px] cursor-pointer hover:text-[#1DA1F2]" />
    //     <IoLogoWhatsapp className="mx-4 cursor-pointer text-[20px] hover:text-[#25D366]" />
    //   </div>
    //   {/* Hamburger Icon */}
    //   <div className="flex">
    //     <div onClick={handleNav} className="sm:hidden z-10 ml-3">
    //       <FaBars size={20} className="mr-4 cursor-pointer" />
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div
    //     onClick={handleNav}
    //     className={
    //       nav
    //         ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-[100vh] bg-black/90 px-4 py-7 flex flex-col"
    //         : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
    //     }
    //   >
    //     <ul className="h-full w-full text-center pt-12">
    //       <li className="text-2xl py-8">
    //         <a to="/">Home</a>
    //       </li>
    //       <li className="text-2xl py-8">
    //         <a to="/properties">Properties</a>
    //       </li>
    //       <li className="text-2xl py-8">
    //         <a to="/about">About</a>
    //       </li>
    //       <li className="text-2xl py-8">
    //         <a to="/contact">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
