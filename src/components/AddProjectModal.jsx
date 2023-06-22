import React, {useState, useRef, useMemo, useEffect} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {Editor} from "@tinymce/tinymce-react";
import {useSelector, useDispatch} from "react-redux";
import Swal from "sweetalert2";
import {createProject, updateProject} from "../redux/features/project/project";
import {RotateLoader} from "react-spinners";
import "../tinymce.css"
import moment from "moment";
import {updateProfile} from "../redux/features/profile/profile";

const Modal = ({isVisible, onClose, data}) => {
    const [editableData, setEditData] = useState(null);

    const editor = useRef(null);
    const {loading, error, projects} = useSelector((state) => state.project);
    const {token} = useSelector((state) => state.auth)
    const [content, setContent] = useState("");
    const [projectData, setProjectData] = useState({
        title: editableData !== null ? editableData.projectName : "",
        assign: editableData !== null ? editableData.assign : "",
        status: editableData !== null ? editableData.status : "",
        deadline: editableData !== null ? editableData.deadline : "",
        projectLink: editableData !== null ? editableData.projectLink : "",
    })
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (data !== undefined ) {
            setEditData(data)
            setContent(data.description)
        }
    }, [data])
    useEffect(() => {
        if (editableData) {

            setProjectData({
                title: editableData.projectName,
                assign: editableData.assign,
                status: editableData.status,
                projectLink: editableData.projectLink,
                deadline: moment(editableData.deadline).format("YYYY-MM-DD")
            })
        }
    }, [editableData])
    const validateInput = (content, files, projectInfo) => {
        if (content === "" || files === 0 || projectInfo.title === "" || projectInfo.assign === "" || projectInfo.status === "" || projectInfo.deadline === "" || projectInfo.projectLink === "") {

            return false;
        } else {
            return true;
        }
    } // for input validation


    if (!isVisible) return null;
    const handleClose = (e) => {
        if (e.target.id === "mainWrapper") onClose();
    };

    const submitForm = () => {
        if (data !== undefined) {
            console.log("submit form called on updating")
            if (validateInput(content, files, projectData)) {
                const formData = new FormData();
                for (const file of files) {
                    formData.append("image", file)
                }
                formData.append("projectName", projectData.title)
                formData.append("assign", projectData.assign)
                formData.append("status", projectData.status)
                formData.append("deadline", projectData.deadline)
                formData.append("projectLink", projectData.projectLink)
                formData.append("description", content)
                dispatch(updateProject({formData, token, id: data._id}));
                setProjectData({title: "", assign: "", status: "", deadline: "", projectLink: ""})
                setContent("");
                setFiles([]);

            } else {
                console.log("validation failed!!!")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Ok!",
                })
            }
        } else {
            if (validateInput(content, files, projectData)) {
                const formData = new FormData();
                for (const file of files) {
                    formData.append("image", file)
                }
                formData.append("projectName", projectData.title)
                formData.append("assign", projectData.assign)
                formData.append("status", projectData.status)
                formData.append("deadline", projectData.deadline)
                formData.append("projectLink", projectData.projectLink)
                formData.append("description", content)
                dispatch(createProject({formData, token}));
                setProjectData({title: "", assign: "", status: "", deadline: "", projectLink: ""})
                setContent("");
                setFiles([]);

            } else {
                console.log("validation failed!!!")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Ok!",
                })
            }
        }
    };

    return (<div
        className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        onClick={handleClose}
        id="mainWrapper"
    >
        {loading ? <RotateLoader
            color="#16A34A"
            margin={3}
            size={18}
            speedMultiplier={1}
        /> : (<div className="w-[700px] flex flex-col">
            <button className="flex justify-end text-red-600 bg-[#2a2822] text-xl rounded-t-lg">
                <AiOutlineClose
                    className="hover:text-red-400 m-1"
                    onClick={() => onClose()}
                    size={21}
                />
            </button>
            <hr className="h-[2px]   bg-gray-200 border-0 dark:bg-[#23211c]"/>
            <div className="bg-[#2a2822]  p-2 rounded-b text-gray-200">
                <div className="mb-7">
                    <div className="flex items-center">
                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                            Title
                        </label>
                        <input
                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                            type="text"
                            placeholder="Enter Project Title..."
                            onChange={(e) => setProjectData({
                                ...projectData, title: e.target.value
                            })}
                            value={projectData.title}
                        />
                    </div>
                </div>
                <div className="mb-7">
                    <div className="flex items-center">
                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                            Assign
                        </label>
                        <input
                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                            type="text"
                            placeholder="Enter Name..."
                            onChange={(e) => setProjectData({
                                ...projectData, assign: e.target.value
                            })}
                            value={projectData.assign}
                        />
                    </div>
                </div>
                <div className="mb-7">
                    <div className="flex items-center">
                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                            Project Link
                        </label>
                        <input
                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                            type="text"
                            placeholder="Enter Name..."
                            onChange={(e) => setProjectData({
                                ...projectData, projectLink: e.target.value
                            })}
                            value={projectData.projectLink}
                        />
                    </div>
                </div>
                <div className="mb-7">
                    <div className="flex items-center">
                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                            Status
                        </label>
                        <select
                            data-te-select-init
                            className="bg-[#2a2822] text-gray-200 block w-full p-1  border-b-2 border-green-800 focus:border-green-500 focus:outline-none"
                            onChange={(e) => setProjectData({
                                ...projectData, status: e.target.value
                            })}
                            value={projectData.status}
                        >
                            <option value="null">Choose Status</option>
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                </div>
                <div className="mb-7">
                    <div className="flex items-center">
                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                            Deadline
                        </label>
                        <input
                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                            type="date"
                            // placeholder="Enter Github Link..."
                            onChange={(e) => setProjectData({
                                ...projectData, deadline: e.target.value
                            })}
                            value={projectData.deadline}
                        />
                    </div>
                </div>
                <div className="mb-7">
                    <div className="flex items-center">
                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                            Choose Images
                        </label>
                        <input
                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                            type="file"
                            multiple
                            onChange={(e) => setFiles(e.target.files)}
                        />
                    </div>
                </div>
                <div className="mb-7">
                    <div className="">
                        <div className="mb-5">
                            <label className="text-gray-200  pb-16 w-[120px]  tracking-wide">
                                Description
                            </label>
                        </div>

                        {/*dark, custom*/}
                        <Editor
                            textareaName="Body"
                            value={content}
                            init={{
                                height: 300,
                                menubar: false,
                                directionality: 'ltr',
                                plugins: ["a11ychecker", "advlist", "advcode", "advtable", "autolink", "checklist", "export", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "powerpaste", "fullscreen", "formatpainter", "insertdatetime", "media", "table", "help", "wordcount",], // toolbar:
                                //   "undo redo | formatselect | " +
                                //   "bold italic backcolor | alignleft aligncenter " +
                                //   "alignright alignjustify | bullist numlist outdent indent | " +
                                //   "removeformat | help",
                                toolbar: "undo redo | casechange blocks | bold italic backcolor | " + "alignleft aligncenter alignright alignjustify | " + "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",

                                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px;  }",
                                skin: "oxide-dark",
                                content_css: "dark ,../tinymce.css",
                                font_family_formats: 'Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats',
                                content_css_custom: `
                                
      .skin-dark {
        --ck-color-base-foreground: #161513;
        --ck-color-toolbar-background: #161513;
        --ck-color-base-background: #161513;
      }
      .prose {
        --tw-prose-headings: #FFFFFF !important
      }
        
      
    `,
                            }}
                            onEditorChange={(newText) => setContent(newText)}
                        />
                    </div>
                </div>
                <div className="flex justify-center mb-4">
                    <button
                        className="text-gray-200 bg-green-700 px-4 py-2 rounded hover:bg-green-800 duration-75"
                        onClick={submitForm}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>)}
    </div>);
};

export default Modal;
