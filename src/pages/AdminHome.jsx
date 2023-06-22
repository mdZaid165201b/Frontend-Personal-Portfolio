import React, {useEffect, useState} from "react";
import {OverviewData} from "../assets/data";
import ProjectTable from "../components/ProjectTable";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const AdminHome = () => {
    const [filteredProject, setFilteredProjects] = useState([]);
    const {projects} = useSelector((state) => state.project);
    const [pendingLength, setPendingProject] = useState(0);
    const [activeLength, setActiveProject] = useState(0);
    const [completeLength, setCompleteProject] = useState(0);
    const projectFileter = () => {
        if (projects.length > 3) {
            const filtered = [];
            for (let i = 0; i < 3; i++) {
                filtered.push(projects[i]);
            }
            setFilteredProjects(filtered)
        }
        else setFilteredProjects(projects)
    }
    const OverviewFiltered = () => {
        const pendingProjects = projects.filter(current => current.status === "Pending");
        setPendingProject(pendingProjects.length)
        const activeProjects = projects.filter(current => current.status === "Active");
        setActiveProject(activeProjects.length)
        const completedProjects = projects.filter(current => current.status === "Complete");
        setCompleteProject(completedProjects.length)
    }
    useEffect(() => {
        OverviewFiltered()
    },[projects.length])
    const OverviewData = [
        {
            title: "Total Projects",
            value: projects.length,
            bgFrom: "from-red-800",
            bgTo: "to-indigo-900",
            shadow: "red"
        },
        {
            title: "Completed Projects",
            value: completeLength,
            bgFrom: "from-lime-700",
            bgTo: "to-green-700",
            shadow:"lime"
        },
        {
            title: "Pending Projects",
            value: pendingLength,
            bgFrom: "from-yellow-600",
            bgTo: "to-amber-800/80",
            shadow:"yellow"
        },
        {
            title: "Active",
            value: activeLength,
            bgFrom: "from-emerald-800",
            bgTo: "to-teal-800",
            shadow:"purple"
        },
    ];

    useEffect(() => {
    projectFileter()
    }, [projects.length])

    return (
        <div className=" w-full h-full text-white p-4 ">
            <div className="mb-7 flex justify-start px-9">
                <h1 className="text-xl sm:text-2xl tracking-wider">Overview</h1>
            </div>
            <div className=" flex justify-evenly">
                {OverviewData.map((current, index) => (
                    <div
                        className={`rounded-md shadow-lg shadow-${current.shadow}-800/80  p-4 sm:h-[70px] sm:w-[230px] md:h-[120px] md:w-[360px] bg-gradient-to-r ${current.bgFrom} ${current.bgTo}`}
                        key={index}
                    >
                        <h1 className="text-2xl text-gray-200 tracking-wide">
                            {current.value}
                        </h1>
                        <h1 className="text-2xl text-gray-200 tracking-wide my-4">
                            {current.title}
                        </h1>
                    </div>
                ))}
            </div>
            {/* tables area */}
            <div className="my-16">
                <div className="">
                    <div className=" flex flex-col justify-center mx-12">
                        <div className="text-gray-200 my-4">
                            <h1 className="text-2xl">Projects Overview</h1>
                        </div>
                        <ProjectTable projectsData={filteredProject}/>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/admin/dashboard/projects">
                            <button
                                className="bg-green-700 flex justify-center text-center p-3 rounded-md tracking-wider hover:bg-green-800 duration-100">
                                View All
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
