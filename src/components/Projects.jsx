import { projectsData } from "../assets/data";
import Project from "./Project";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Projects = ({ nav }) => {
    const {projects} = useSelector((state) => state.project);
  //   const [projHover, setProjHover] = useState(false);
  return (
    !nav && (
      <>
        <div className="flex items-center justify-center " id="projects">
          <h1 className="text-gray-300 text-3xl sm:text-4xl font-extrabold mt-8 tracking-wide">
            PROJECTS
          </h1>
        </div>
        <div className="w-screen">
          <div className=" flex justify-center items-center">
              <div className="my-0 sm:px-40  flex flex-wrap justify-center">
                  {projects.map((element) => (
                      <Project data={element} />
                  ))}
              </div>
          </div>
          {projectsData.length >= 6 ? (
            <div className="flex justify-center mt-10">
              <Link to="AllProjects">
                <button className="p-3 bg-gradient-to-br from-green-800 to-sky-700 text-gray-300 rounded-md shadow-lg shadow-black/40 tracking-wider  hover:from-sky-800 hover:to-green-600">
                  View More
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </>
    )
  );
};

export default Projects;
