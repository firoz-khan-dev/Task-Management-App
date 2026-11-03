import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setDateTerm } from "../redux/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const { searchTerm, dateTerm } = useSelector((state) => state.filter);

  return (
    <div className="flex gap-5 justify-evenly mt-20">
      <input
        type="text"
        placeholder="Search By Task..."
        className="border-2 w-120 p-2 placeholder:text-black  placeholder:font-medium dark:border-blue-500 shadow-lg shadow-black/70 duration-1000  animate-pulse dark:placeholder-white dark:placeholder:font-medium  dark:text-white"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <input
        type="date"
        placeholder="Search By Date..."
        className="border-2 w-120 p-2 dark:border-blue-500 shadow-lg shadow-black/70 animate-pulse duration-1000  dark:placeholder-white dark:placeholder:font-bold  dark:text-white"
        value={dateTerm}
        onChange={(e) => dispatch(setDateTerm(e.target.value))}
      />
    </div>
  );
}

export default Filter;
