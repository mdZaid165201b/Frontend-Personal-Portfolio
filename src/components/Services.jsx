import { servicesData } from "../assets/data";
const Services = ({ nav }) => {
  return (
    !nav && (
      <div id="services">
        <div className="flex items-center justify-center py-5">
          <h1 className="text-gray-300 text-3xl sm:text-4xl font-extrabold tracking-wide">
            SERVICES
            {/* <hr className="border-2 rounded-full border-yellow-200/40 cursor-pointer hover:border-red-500 duration-500"/> */}
          </h1>
        </div>
        <div className="w-screen">
          <div className="my-5 sm:my-10 sm:px-24 flex justify-start  flex-wrap sm:mx-20">
            {servicesData.map((element) => (
              // 
              <div className="w-screen h-full  mx-4 my-4 sm:m-5 sm:h-[220px] sm:w-[350px] bg-gradient-to-br from-emerald-700 to-cyan-800 rounded-xl shadow-md shadow-sky-700/50 overflow-hidden">
                <div
                  className="w-screen h-full sm:h-[250px] sm:w-[350px]"
                  key={Math.random()}
                >
                  <div className="w-full flex justify-center p-2">
                    <div className="w-[55px] h-[55px] bg-gradient-to-br from-green-600 to-sky-600 flex items-center justify-center rounded-full">
                      {/* <RiComputerLine className="text-gray-200 text-4xl" /> */}
                      {element.icon}
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <h1 className="text-gray-200 font-semibold tracking-wider">
                      {element.title}
                    </h1>
                  </div>
                  <div className="p-2 text-center flex items-center mt-2">
                    <span className="text-gray-300 tracking-wide">
                      {element.desc}
                    </span>
                  </div>
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
