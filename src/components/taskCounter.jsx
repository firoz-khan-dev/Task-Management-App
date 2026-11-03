import React from "react";
import { MdOutlineCircleNotifications } from "react-icons/md";
import { useSelector } from "react-redux";

function TaskCounter() {
  const products = useSelector((state) => state.details.items);

  return (
    <div className="w-10 h-10 rounded-full absolute top-2 left-50 flex justify-center items-center gap-2 font-semibold animate-bounce duration-1000 mt-3">
      <MdOutlineCircleNotifications className="w-10 h-10 rounded-full dark:bg-blue-600 relative "/>
      <span className="dark:red-white dark:font-extrabold absolute ml-7 -top-2 text-red-500 font-extrabold"> {products.length}</span>
    </div>
  );
}

export default TaskCounter;