import { skillsData } from "../assets/data";
const Services = ({ nav }) => {
  return (
    !nav && (
      <div id="skills">
        <div className="flex items-center justify-center py-5">
          <h1 className="text-gray-300 text-3xl sm:text-4xl font-extrabold tracking-wide">
            SKILLS
            {/* <hr className="border-2 rounded-full border-yellow-200/40 cursor-pointer hover:border-red-500 duration-500"/> */}
          </h1>
        </div>
        <div className="w-screen">
          <div className="my-5 sm:my-10 sm:px-24 flex flex-wrap justify-center sm:mx-20">
            {skillsData.map((element) => (
              
              <div className=" flex justify-center w-screen h-full  mx-4 my-4 sm:m-5 sm:h-[120px] sm:w-[200px] bg-gradient-to-br from-emerald-700 to-slate-900 rounded-tl-2xl rounded-br-2xl shadow-md  overflow-hidden duration-200">
                <div
                  className="w-screen h-full sm:h-[180px] sm:w-[200px] backdrop-blur bg-black/10 py-1 mb-1 "
                  key={Math.random()}
                >
                  <div className="w-full flex justify-center p-2">
                    <div className="w-[55px] h-[55px] bg-gradient-to-br from-emerald-600 to-sky-800 border border-sky-900 flex items-center justify-center rounded-full">
                      {element.icon}
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <h1 className="text-gray-200 font-semibold tracking-wider">
                      {element.title}
                    </h1>
                  </div>
                  {/* <div className="p-2 text-center flex items-center mt-2">
                    <span className="text-gray-300 tracking-wide">
                      {element.desc}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Services;
