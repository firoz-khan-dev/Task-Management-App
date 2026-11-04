import { useDispatch, useSelector } from "react-redux";
import { setStatusTerm } from "../redux/filterSlice";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function FilterStatus() {
  const [rotate, setRotate] = useState(false);
  const dispatch = useDispatch();
  const { statusTerm } = useSelector((state) => state.filter);

  return (
    <div className="absolute right-2 sm:right-5 top-18">
      <div className="relative">
        <select
          value={statusTerm}
          onChange={(e) => dispatch(setStatusTerm(e.target.value))}
          onFocus={() => setRotate(true)}
          onBlur={() => setRotate(false)}
          className=" font-semibold rounded dark:border-blue-500 shadow-lg shadow-black/70 dark:bg-linear-to-br dark:from-indigo-950 dark:via-indigo-800
                     text-center  cursor-pointer w-32  appearance-none"
        >
          <option value="all" className="text-black">All</option>
          <option value="pending" className="text-black">Pending</option>
          <option value="completed" className="text-black">Completed</option>
          <option value="overdue" className="text-black">OverDue</option>
        </select>

        <RiArrowDropDownLine
          className={`h-6 w-6 pointer-events-none absolute right-5 top-3 -translate-y-1/2 
                      text-black transition-transform duration-300 
                      ${rotate ? "rotate-180" : "rotate-0"}`}
        />
      </div>
    </div>
  );
}

export default FilterStatus;