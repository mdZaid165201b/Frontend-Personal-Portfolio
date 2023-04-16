import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { TodoListData } from "../assets/data";

const TodoListOverview = () => {
  return (
    <div>
      <section className="container  font-mono shadow-lg shadow-black/30">
        <div className="w-full mb-8 overflow-hidden rounded-sm shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full sm:w-full rounded-lg">
              <thead className="border-t-2 border-l-2 border-r-2 border-gray-300">
                <tr className="bg-[#2f2f2e] text-gray-200 uppercase leading-normal">
                  <th className="py-3 px-6 text-left">Title</th>
                  <th className="py-3 px-6 text-center">Deadline</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-200 text-sm">
                {TodoListData.map((current, index) => (
                  <tr className="border-b border-gray-200 ">
                    <td className="px-4 py-3 text-left whitespace-nowrap border border-slate-200">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-semibold">{current.title}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 border tracking-wider text-center">{current.deadline}</td>

                    <td className="py-3 px-6 text-center border border-slate-200">
                    <span className={`${current.status === "Active" ? "bg-blue-500" : current.status === "Pending" ? "bg-yellow-600" : current.status === "Complete" ? "bg-green-500" : null } text-white py-1 px-3 rounded-sm text-xs`}>
                        {current.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center border border-slate-200">
                      <div className="flex item-center justify-evenly">
                        <FiEdit2
                          size={24}
                          className="text-green-400 hover:text-green-700 duration-75 cursor-pointer"
                        />
                        <AiFillDelete
                          size={24}
                          className="text-red-500 hover:text-red-700 duration-75 cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoListOverview;
