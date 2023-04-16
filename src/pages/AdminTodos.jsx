import React from "react";
import TodoListOverview from "../components/TodoListOverview";

const AdminTodos = () => {
  return (
    <div className="text-gray-200">
      <div className=" flex flex-col justify-center mx-16">
        <div className="text-2xl tracking-wider mb-4 flex justify-between">
          <h1>Projects Todos</h1>
          <div className="flex">
            <h1 className="text-lg">Total Records</h1>
            <h1 className="text-lg">:10</h1>
          </div>
        </div>
        <TodoListOverview />
      </div>
      <div className="flex justify-center">
        <div className="">
          <button
            className="bg-[#2d2b27] mx-2 px-3 py-2 tracking-wider rounded-sm shadow-lg hover:bg-[#201e1a] duration-75 active:bg-inherit disabled:opacity-30 disabled:hover:cursor-not-allowed"
            disabled
          >
            Prev
          </button>
          <button className="bg-[#2d2b27] mx-2 px-3 py-2 tracking-wider rounded-sm shadow-lg hover:bg-[#201e1a] duration-75 active:bg-inherit">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminTodos;
