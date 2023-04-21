import React, {useState, useEffect} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {useSelector, useDispatch} from "react-redux";
import {updateProfile} from "../redux/features/profile/profile";
import Swal from "sweetalert2";
import {RotateLoader} from "react-spinners";
import {updateUser} from "../redux/features/auth/auth";

const Modal = ({isVisible, onClose}) => {
    const {user, loading, error, token} = useSelector((state) => state.auth);
    const profileData = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [file, setFile] = useState([]);
    const [data, setData] = useState({
        firstName: user.remaining.firstName || "",
        lastName: user.remaining.lastName || "",
        githubLink: user.remaining.githubLink || "",
        facebookLink: user.remaining.facebookLink || "",
        linkedinLink: user.remaining.linkedinLink || "",
        tagLine: user.remaining.tagLine || ""
    });

    const handleProfileSubmit = async () => {
            let formData = new FormData();
            if (file.length > 0) {
                formData.append("image", file[0]);
            }
            formData.append("firstName", data.firstName);
            formData.append("lastName", data.lastName);
            formData.append("tagLine", data.tagLine);
            formData.append("githubLink", data.githubLink);
            formData.append("facebookLink", data.facebookLink);
            formData.append("linkedinLink", data.linkedinLink);

            dispatch(updateProfile({
                formData,
                token,
                uid: user.remaining._id || user.final_response
            }, dispatch))
            if (profileData.error.success === false) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: profileData.error.message,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Ok!",
                })
            }

    }


    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === "mainWrapper") onClose();
    };


    return (
        <div
            className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
            onClick={handleClose}
            id="mainWrapper"
        >
            {
                profileData.loading ?
                    <RotateLoader
                        color="#16A34A"
                        margin={3}
                        size={18}
                        speedMultiplier={1}
                    /> : (
                        <div className="w-[700px] flex flex-col">
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
                                            First Name
                                        </label>
                                        <input
                                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                                            type="text"
                                            placeholder="Enter First Name..."
                                            onChange={(e) => setData({
                                                ...data,
                                                firstName: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="flex items-center">
                                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                                            Last Name
                                        </label>
                                        <input
                                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                                            type="text"
                                            placeholder="Enter Last Name..."
                                            onChange={(e) => setData({
                                                ...data,
                                                lastName: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="flex items-center">
                                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                                            Tag Line
                                        </label>
                                        <input
                                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                                            type="text"
                                            placeholder="Enter Tag Line..."
                                            onChange={(e) => setData({
                                                ...data,
                                                tagLine: e.target.value
                                            })}
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
                                            onChange={(e) => setFile(Array.from(e.target.files))}
                                        />
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="flex items-center">
                                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                                            Github
                                        </label>
                                        <input
                                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                                            type="text"
                                            placeholder="Enter Github Link..."
                                            onChange={(e) => setData({
                                                ...data,
                                                githubLink: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="flex items-center">
                                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                                            Linkedin
                                        </label>
                                        <input
                                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                                            type="text"
                                            placeholder="Enter Linkedin Link..."
                                            onChange={(e) => setData({
                                                ...data,
                                                linkedinLink: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="flex items-center">
                                        <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                                            Facebook
                                        </label>
                                        <input
                                            className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                                            type="text"
                                            placeholder="Enter Facebook Link..."
                                            onChange={(e) => setData({
                                                ...data,
                                                facebookLink: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center my-3">
                                    <button
                                        className="text-gray-200 bg-green-700 px-4 py-2 rounded hover:bg-green-800 duration-75"
                                        onClick={handleProfileSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Modal;
