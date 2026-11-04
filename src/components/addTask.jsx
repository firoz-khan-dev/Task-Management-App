import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetails, editDetails } from "../redux/DetailsSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import tajmahal from "../assets/tajmahal.png"
import flight from "../assets/flight.png"
import delhi from "../assets/delhi.png"
import tower from "../assets/tower.png"

function AddTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const [searchParams] = useSearchParams();
  const editingId = searchParams.get("id");

  const items = useSelector((state) => state.details.items);
  const existingData = items.find((item) => item.id === Number(editingId));

  useEffect(() => {
    if (existingData) {
      setDate(existingData.date);
      setDescription(existingData.description);
      setTask(existingData.task);
      setPriority(existingData.priority || "medium");
    }
  }, [existingData]);

  function handleUpdate(e) {
    e.preventDefault();

    const getId = JSON.parse(localStorage.getItem("details")) || [];
    const matchId = getId.find((item) => item.id === Number(editingId));

    if (matchId) {
      dispatch(
        editDetails({
          id: matchId.id,
          task: task,
          description: description,
          date: date,
          priority: priority,
        }),
      );

      setTask("");
      setDescription("");
      setDate("");
      navigate("/");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      task: task,
      description: description,
      date: date,
      status: "pending",
      priority: priority,
    };

    dispatch(addDetails(newTask));

    setTask("");
    setDescription("");
    setDate("");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-white relative overflow-hidden">
      <form
        onSubmit={existingData ? handleUpdate : handleSubmit}
        className="relative z-10 flex flex-col gap-8 w-full max-w-100 h-130 justify-center items-center rounded-2xl px-4"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl font-bold text-blue-950">Welcome</h1>
          <p className="text-gray-600 text-[15px] text-center ">
            Add Your Task
          </p>
        </div>
        <div className="relative w-full max-w-70">
          <input
            type="text"
            placeholder=" "
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="outline-1 p-2 w-full bg-white text-black rounded peer"
          />
          <label
            className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                     peer-focus:text-blue-900"
          >
            Task Name
          </label>
        </div>
        <div className="relative w-full max-w-70">
          <input
            type="text"
            placeholder=" "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline p-2 w-full bg-white text-black rounded peer"
          />
          <label
            className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                     peer-focus:text-blue-900"
          >
            Description (Optional)
          </label>
        </div>
        <div className="relative w-full max-w-70">
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="outline-1 p-2 w-full bg-white text-black rounded peer"
          />
          <label
            className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                     peer-focus:text-blue-900"
          >
            Choose Date
          </label>
        </div>
        <div className="relative w-full max-w-70">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="outline-1 dark:text-black bg-white p-2 rounded w-full cursor-pointer peer"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <label
            className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                     peer-focus:text-blue-950"
          >
            Priority
          </label>
        </div>

        <button
          type="submit"
          className="p-2 outline-1 w-50 bg-blue-900 text-white font-semibold rounded cursor-progress"
        >
          {existingData ? "Update" : "Submit"}
        </button>
      </form>
      <img src={tajmahal} alt="" className="absolute -bottom-12 sm:-bottom-28 -left-6 sm:-left-10 size-40 sm:size-80 select-none pointer-events-none"/>
      <img src={flight} alt="" className="absolute top-0 right-0 h-24 sm:h-40 lg:h-52 w-auto max-w-[45%] object-contain select-none pointer-events-none"/>
      <img src={delhi} alt="" className="absolute size-28 sm:size-55 -right-3 sm:-right-5 -bottom-6 sm:-bottom-10 -rotate-13 select-none pointer-events-none"/>
      <img src={tower} alt="" className="absolute size-28 sm:size-55 -right-10 sm:-right-22 -bottom-6 sm:-bottom-10 select-none pointer-events-none"/>
    </div>
  );
}

export default AddTask;