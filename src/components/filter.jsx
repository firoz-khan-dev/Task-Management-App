import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setDateTerm } from "../redux/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const { searchTerm, dateTerm } = useSelector((state) => state.filter);

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center md:justify-evenly mt-28 md:mt-20 px-4 md:px-0">
      <input
        type="text"
        placeholder="Search By Task..."
        className="border-2 w-full max-w-md md:max-w-none md:w-120 p-2 placeholder:text-black placeholder:font-medium dark:border-blue-500 shadow-lg shadow-black/70 duration-1000 animate-pulse dark:placeholder-white dark:placeholder:font-medium dark:text-white"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <input
        type="date"
        placeholder="Search By Date..."
        className="border-2 w-full max-w-md md:max-w-none md:w-120 p-2 dark:border-blue-500 shadow-lg shadow-black/70 animate-pulse duration-1000 dark:placeholder-white dark:placeholder:font-bold dark:text-white"
        value={dateTerm}
        onChange={(e) => dispatch(setDateTerm(e.target.value))}
      />
    </div>
  );
}

export default Filter;