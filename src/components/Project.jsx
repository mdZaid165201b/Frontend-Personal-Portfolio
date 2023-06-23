import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";
import { Tilt } from "react-tilt";

const Project = ({ data }) => {
  const [projHover, setProjHover] = useState(false);
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 40, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt options={defaultOptions} className="hover:transition-all  duration-300">
      <Link to="/projects/detail" state={{ data: data }}>
        <div
          className="flex justify-center  bg-gradient-to-br from-emerald-600 to-cyan-500  w-[320px]  sm:max-w-[480px] sm:max-h-[280px] h-[200px] rounded-md p-[2.0px] mt-14 mx-4 shadow-xl shadow-black/40 hover:shadow-teal-600 transition-all hover:duration-[300ms,500ms]"
          key={data._id}
        >
          <div className=" w-full h-full rounded-lg hover:ease-in hover:duration-[300ms,500ms] overflow-hidden transition-transform relative cursor-pointer">
            <div className=" w-full h-full ">
              <img
                src={data.coverImage["url"]}
                alt="proj"
                className="w-full h-full rounded-md object-cover overflow-clip "
              />
              {/* <div className="h-full w-full absolute z-10 top-0 left-0 text-red-700">HEELO</div> */}
            </div>
            <div
              onMouseEnter={() => {
                setProjHover(true);
              }}
              onMouseLeave={() => {
                setProjHover(false);
              }}
              className="absolute bottom-0 h-[60px] hover:h-[100%] duration-[400ms,500ms] w-full bg-black/70 flex items-center  justify-center hover:items-start hover:pt-5 overflow-scroll"
            >
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-gray-200 text-xl hover:text-3xl">
                  {data.projectName}
                </h1>

                {projHover ? (
                  <div className="text-gray-200 mt-5 text-xl flex justify-center tracking-wider">
                    <Link to={data.projectLink} target="_blank">
                      <AiOutlineLink
                        size={20}
                        className="hover:text-gray-400 "
                      />
                    </Link>
                    {/* <ul className="flex items-center text-center justify-center flex-col ">
                      {data.stack.map((element) => (
                          <li className="my-1 bg-gradient-to-br from-emerald-600 to-cyan-700 w-full px-[10px] rounded-tl-md rounded-br-md text-white">
                            {element}
                          </li>
                      ))}
                    </ul> */}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Tilt>
  );
};

export default Project;
