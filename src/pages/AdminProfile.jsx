import React, {useState} from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import Modal from "../components/Modal";
import { useSelector } from "react-redux"

const AdminProfile = () => {
  const [openModal, setModal] = useState(false);
  const { user }  = useSelector((state) => state.auth);

  return (
    <>
      <div className="w-full">
        <div className=" flex justify-center">
          <div className="flex flex-col">
            <img
                className="rounded-full filter contrast-125 object-cover bottom w-[160px] h-[160px] border-4 border-x-emerald-900 border-y-cyan-900 bg-cover"
                src={user.remaining.profilePic["url"]}
                alt="person"
            />

            {/*</div>*/}
            <div className=" flex justify-center text-gray-200 my-3 ">
              <h1 className="text-2xl  tracking-wider text-center">{user.remaining.firstName}</h1>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 mx-7 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mx-10 flex justify-center flex-col">
          <div className="text-gray-200 flex justify-center mb-8">
            <h1 className="text-3xl tracking-wider">Profile Information</h1>
          </div>
          <div className="flex justify-end mb-5">
            <div className="absolute bottom-12 bg-green-800 text-gray-200 flex p-3 text-center rounded-full shadow-lg shadow-black/60 hover:bg-green-900 active:bg-green-700 cursor-pointer" onClick={() => setModal(true)}>
              <BiMessageSquareAdd size={24} />
            </div>
          </div>
          <div>
            <div className="">
              <div className=" flex  p-2">
                <div className="text-gray-200 text-xl bg-green-700 p-3 tracking-wider w-[500px] rounded-l-md">
                  <h1>First Name</h1>
                </div>
                <div className="text-gray-200 text-xl bg-[#2a2822] p-3 tracking-wider flex flex-2 w-full text-center">
                  <h1>{user.remaining.firstName}</h1>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex  p-2">
                <div className="text-gray-200 text-xl bg-green-700 p-3 tracking-wider w-[500px] rounded-l-md">
                  <h1>Last Name</h1>
                </div>
                <div className="text-gray-200 text-xl bg-[#2a2822] p-3 tracking-wider flex flex-2 w-full text-center">
                  <h1>{user.remaining.lastName}</h1>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex  p-2">
                <div className="text-gray-200 text-xl bg-green-700 p-3 tracking-wider w-[500px] rounded-l-md">
                  <h1>Tag Line</h1>
                </div>
                <div className="text-gray-200 text-xl bg-[#2a2822] p-3 tracking-wider flex flex-2 w-full text-center">
                  <h1>
                    {/*Hello, I'm Muhammad Zaid a Fullstack developer based in*/}
                    {/*Pakistan{" "}*/}
                    {user.remaining.tagLine}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-10">
              <button className="text-gray-200 bg-red-800 p-3 rounded-lg hover:bg-red-900 duration-75">
                Reset All
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isVisible={openModal}  onClose={() => setModal(false)}/>
    </>
  );
};

export default AdminProfile;
