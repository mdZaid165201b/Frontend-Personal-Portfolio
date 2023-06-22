import React, {useState} from "react";
import ProjectTable from "../components/ProjectTable";
import {BiMessageSquareAdd} from "react-icons/bi";
import AddProjectModal from "../components/AddProjectModal"
import {useSelector} from "react-redux";
import {RotateLoader} from "react-spinners";


const AdminProjects = () => {
    const {projects, loading} = useSelector((state) => state.project);
    const [openModal, setModal] = useState(false);
    return (
        <>
            <div className="text-gray-200">
                <div className="flex justify-end mb-5">
                    <div
                        className="absolute bottom-12 right-8 bg-green-800 text-gray-200 flex p-3 text-center rounded-full shadow-lg shadow-black/60 hover:bg-green-900 active:bg-green-700 cursor-pointer"
                        onClick={() => setModal(true)}
                    >
                        <BiMessageSquareAdd size={24}/>
                    </div>
                </div>
                <div className=" flex flex-col justify-center  mx-16">
                    <div className="text-2xl tracking-wider mb-4 flex justify-between">
                        <h1>Projects Details</h1>
                        <div className="flex">
                            <h1 className="text-lg">Total Records</h1>
                            <h1 className="text-lg">:{projects.length}</h1>
                        </div>
                    </div>
                    {loading ? <div className="flex justify-center">
                        <RotateLoader
                            color="#16A34A"
                            margin={3}
                            size={18}
                            speedMultiplier={1}
                            className="flex justify-center items-center"
                        />
                    </div> : <ProjectTable projectsData={projects}/>}
                </div>
                {/*{*/}
                {/*    !loading && (*/}
                {/*        <div className="flex justify-center">*/}
                {/*            <div className="">*/}
                {/*                <button*/}
                {/*                    className="bg-[#2d2b27] mx-2 px-3 py-2 tracking-wider rounded-sm shadow-lg hover:bg-[#201e1a] duration-75 active:bg-inherit disabled:opacity-30 disabled:hover:cursor-not-allowed"*/}
                {/*                    disabled*/}
                {/*                >*/}
                {/*                    Prev*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="bg-[#2d2b27] mx-2 px-3 py-2 tracking-wider rounded-sm shadow-lg hover:bg-[#201e1a] duration-75 active:bg-inherit">*/}
                {/*                    Next*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}
            </div>
            <AddProjectModal isVisible={openModal} onClose={() => setModal(false)}/>
        </>
    );
};

export default AdminProjects;
