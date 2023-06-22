import React, {useState} from "react";
import projectImg from "../assets/test2.png";
import {ProjectOverview} from "../assets/data";
import {FiEdit2} from "react-icons/fi";
import {AiFillDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import AddProjectModal from "../components/AddProjectModal";
import * as moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {deleteProject} from "../redux/features/project/project";
import {RotateLoader} from "react-spinners";
import Swal from "sweetalert2";

const ProjectTable = ({projectsData}) => {
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state) => state.project);
    const {token} = useSelector((state) => state.auth);
    const [openModal, setModal] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [editData, setEditData] = useState(null);
    const handleDelete = (id) => {
        dispatch(deleteProject({id, token}))
        if (error.success === false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok!",
            })
        }
    }
    return (<div>
            {loading ? <div className="flex justify-center items-center">
                <RotateLoader
                    color="#16A34A"
                    margin={3}
                    size={18}
                    speedMultiplier={1}
                />
            </div> : (<section className={`container   font-mono ${projectsData.length > 0 && "shadow-lg shadow-black/30"}`}>
                    <div className="w-full mb-8 overflow-hidden rounded-sm shadow-lg">
                        <div className={`w-full overflow-x-auto shadow-lg shadow-red-200`}>
                            {projectsData.length === 0 ? <div className="my-2 text-lg flex justify-center">No Project Found</div> : (
                                <table className="w-full sm:w-full ">
                                    <thead className="border-t-2 border-l-2 border-r-2 border-gray-300">
                                    <tr className="bg-[#2f2f2e] text-gray-200 uppercase leading-normal">
                                        <th className="py-3 px-6 text-left">Project Name</th>
                                        <th className="py-3 px-6 text-center">Assign</th>
                                        <th className="py-3 px-6 text-center">Status</th>
                                        <th className="py-3 px-6 text-center">Deadline</th>
                                        <th className="py-3 px-6 text-center">Detail</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-[#161513]">
                                    {projectsData.length > 0 ? projectsData.map((current, index) => (
                                        <tr className="text-gray-200" key={index}>
                                            <td className="px-4 py-1 border border-slate-200">
                                                <div className="flex items-center text-sm">
                                                    <div
                                                        className="relative w-10 h-10 mr-3 rounded-full md:block border border-teal-500 my-2">
                                                        <img
                                                            className="object-cover w-full h-full rounded-full"
                                                            src={current.coverImage["url"]}
                                                            alt=""
                                                            loading="lazy"
                                                        />
                                                        <div
                                                            className="absolute inset-0 rounded-full shadow-inner"
                                                            aria-hidden="true"
                                                        ></div>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-200 tracking-wider ">
                                                            {current.projectName}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-ms  border text-center">
                                                {current.assign}
                                            </td>
                                            <td className="py-3 px-6 text-center border border-slate-200">
                      <span
                          className={`${current.status === "Active" ? "bg-blue-500" : current.status === "Pending" ? "bg-yellow-600" : current.status === "Complete" ? "bg-green-500" : null} text-white py-1 px-3 rounded-sm text-xs`}
                      >
                        {current.status}
                      </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm border text-center">
                                                {moment(current.deadline).format('MMMM Do YYYY')}
                                            </td>
                                            <td className="px-4 py-3 text-sm border text-center">
                                                <Link to="/projects/detail" state={{data: current}}>
                                                    <button
                                                        className="bg-lime-700 px-2 rounded-sm hover:bg-lime-800 duration-75">
                                                        View
                                                    </button>
                                                </Link>
                                            </td>
                                            <td className="py-3 px-6 text-center border border-slate-200">
                                                <div className="flex item-center justify-evenly">
                                                    <FiEdit2
                                                        size={24}
                                                        className="text-green-400 hover:text-green-700 duration-75 cursor-pointer"
                                                        onClick={() => {
                                                            setModal(true);
                                                            setEdit(true)
                                                            setEditData(current)
                                                        }}
                                                    />
                                                    <AiFillDelete
                                                        size={24}
                                                        className="text-red-500 hover:text-red-700 duration-75 cursor-pointer"
                                                        onClick={() => {
                                                            handleDelete(current._id)
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>)) : null}
                                    </tbody>
                                </table>)}
                        </div>
                    </div>
                </section>)}
        {
            isEdit ? <AddProjectModal isVisible={openModal} onClose={() => setModal(false)} data={editData}/> : <AddProjectModal isVisible={openModal} onClose={() => setModal(false)}/>
        }
        </div>);
};

export default ProjectTable;
