import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "tailwindcss/tailwind.css";

const ProjectDetailPage = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  const article =
    '<article class="prose lg:prose-xl my-11 text-gray-200">\n    <h3 class="text-gray-200">Garlic bread with cheese: What the science tells us</h3>\n    <p>\n      For years parents have espoused the health benefits of eating\n      garlic bread with cheese to their children, with the food earning\n      such an iconic status in our culture that kids will often dress up\n      as warm, cheesy loaf for Halloween.\n    </p>\n    <p> \n      But a recent study shows that the celebrated appetizer may be\n      linked to a series of rabies cases springing up around the\n      country.\n    </p>\n  </article>';
  return (
    <>
      <Navbar navController={handleNav} nav={nav} />
      <div className="flex flex-col justify-center  sm:mx-28 mt-28">
        <div className="text-lg sm:text-2xl flex text-gray-200 mx-[2px]">
          <h1>Inventory Management System</h1>
          <div className="bg-green-700 mx-5 p-1 sm:p-2 text-sm rounded tracking-wider">
            Complete
          </div>
        </div>
        <div className="flex flex-col   sm:flex-row my-7">
          <div className="w-full sm:w-[1000px]">
            <Carousel className="">
              <div className="h-full w-full border-2 border-cyan-700 rounded-md p-0.5">
                <img
                  src="https://neilpatel.com/wp-content/uploads/2021/09/cin7-interface-best-inventory-management-software.png"
                  className="object-contain  w-full h-full"
                />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div className="h-full w-full border-2 border-cyan-700 rounded-md p-0.5">
                <img
                  src="https://www.atlascode.com/wp-content/uploads/2018/09/abc-dashboard.png"
                  className="object-contain  w-full h-full"
                />
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div className="h-full w-full border-2 border-cyan-700 rounded-md p-0.5">
                <img
                  src="https://i.ytimg.com/vi/jk8L4_Wx40U/maxresdefault.jpg"
                  className="object-contain  w-full h-full"
                />
                {/* <p className="legend">Legend 3</p> */}
              </div>
            </Carousel>
          </div>
          <div className="inline-block sm:h-[600px] sm:min-h-[1em] sm:w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50 ml-12"></div>
          <div className="flex flex-col mx-5 text-gray-200">
            <h1 className="text-2xl sm:text-3xl font-mono">Tech Stack</h1>
            <div className="flex flex-col">
              <ul className="list-disc mx-10 my-5 text-lg font-mono leading-10">
                <li className="tracking-wider">Reactjs</li>
                <li className="tracking-wider">MongoDB</li>
                <li className="tracking-wider">Nodejs</li>
                <li className="tracking-wider">Expressjs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-200 text-2xl">
          {/* <h1 className="text-2xl">Description</h1> */}
          {/* <article class="prose lg:prose-xl my-11 text-gray-200">
            <h3 className="text-gray-200">Garlic bread with cheese: What the science tells us</h3>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <p> 
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article> */}
          <div
            className=" rounded-md p-6 prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: article }}
          ></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetailPage;
