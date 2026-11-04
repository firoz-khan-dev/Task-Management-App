import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteDetails, setEditingTask } from "../redux/DetailsSlice";
import { toggleStatus, removeStatus } from "../redux/statusSlice";
import Status from "./status";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const [drop, setDrop] = useState(null);

  const products = useSelector((state) => state.details.items);
  const statusMap = useSelector((state) => state.status.statusMap);
  const { searchTerm, dateTerm, statusTerm } = useSelector(
    (state) => state.filter,
  );
    // capitalize priority
    function capitalizeFirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

  // filter
  const filterOut = products.filter((curr) => {
    const matchesTask = curr.task.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = dateTerm ? curr.date === dateTerm : true;

    const currentStatus = statusMap[curr.id] || "pending";

    // status filter
    const today = new Date().setHours(0, 0, 0, 0);
    const due = new Date(curr.date).setHours(0, 0, 0, 0);
    const isOverdue = currentStatus !== "completed" && due < today;

    let matchesStatus = true;
    if (statusTerm === "pending") {
      matchesStatus = currentStatus === "pending" && !isOverdue;
    } else if (statusTerm === "completed") {
      matchesStatus = currentStatus === "completed";
    } else if (statusTerm === "overdue") {
      matchesStatus = isOverdue;
    }

    return matchesTask && matchesDate && matchesStatus;
  });

  // delete
  function deleteToTask(id) {
    dispatch(deleteDetails(id));
    dispatch(removeStatus(id));
  }

  // edit
  function editToTask(item) {
    dispatch(setEditingTask(item));
  }

  // status
  function toggleTaskStatus(id) {
    dispatch(toggleStatus(id));
  }

  return (
    <div className="flex flex-wrap gap-0 justify-center mt-8 md:mt-12">
      {filterOut.map((item) => (
        <div
          key={item.id}
          className="w-65 min-h-50 flex flex-col gap-2 text-center items-center justify-center over bg-red-200 rounded-2xl mx-2 sm:mx-5 mt-5 relative dark:bg-linear-to-br from-indigo-800 via-purple-400 to-indigo-950 hover:shadow-2xl dark:hover:shadow-cyan-900/90 transition-shadow duration-300 pt-8"
          onMouseEnter={() => setShow(item.id)}
          onMouseLeave={() => setShow(null)}
        >
          {show === item.id && (
            <BsThreeDotsVertical
              onClick={() => setDrop(item.id)}
              className="ml-52 text-xl  absolute top-3 cursor-pointer"
            />
          )}
          {drop === item.id && (
            <div
              onMouseLeave={() => setDrop(null)}
              className="flex  absolute ml-33 top-2 dark:bg-transparent bg-transparent "
            >
              <button
                onClick={() => {
                  editToTask(item);
                  navigate(`/Form?id=${item.id}`);
                }}
                className="dark:bg-transparent px-2 py-1 cursor-pointer bg-transparent hover:bg-yellow-400 hover:rounded-full"
              >
                ✎
              </button>

              <button
                onClick={() => deleteToTask(item.id)}
                className="dark:bg-transparent px-2 py-1 cursor-pointer bg-transparent hover:bg-red-400 hover:rounded-full"
              >
                🗑
              </button>
            </div>
          )}
          <p className="text-2xl font-semibold text-black">{item.task}</p>
          <p className="mx-5 text-black">{item.description}</p>
          <p className="text-[11px]  absolute top-1 left-4">{item.date}</p>
          <p className={` absolute top-7 left-2 shadow-sm shadow-black/70 px-2 font-medium text-[13px]
            ${item.priority === "high" ? "text-red-500" :
            item.priority === "medium" ? "text-yellow-500" :"text-green-500"}`
            }>{capitalizeFirst(item.priority)}</p>

          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              checked={statusMap[item.id] === "completed"}
              onChange={() => toggleTaskStatus(item.id)}
              className="w-3 h-3 cursor-pointer"
            />
            <span className="text-[14px] text-gray-400 font-semibold">
              {statusMap[item.id] === "completed"
                ? "Completed"
                : "Mark as Completed"}
            </span>
          </div>

          <Status id={item.id} className="" />
        </div>
      ))}
    </div>
  );
}

export default Card;