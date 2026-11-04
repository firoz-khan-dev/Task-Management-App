import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import Filter from "../components/filter";
import DarkMode from "../components/darkMode";
import TaskCounter from "../components/taskCounter";
import mandala from "../assets/mandala.png";
import Star from "../assets/star.png";
import FilterStatus from "../components/filterStatus";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={Star}
          alt="image"
          className="absolute size-12 sm:size-16 md:size-20 lg:size-25 animate-move-forward opacity-30 top-0 left-4 sm:left-8 md:left-13 [animation-delay:0s] drop-shadow-[0_0_10px_white]"
        />
        <img
          src={Star}
          alt="image"
          className="absolute size-12 sm:size-16 md:size-20 lg:size-25 animate-move-forward opacity-30 top-24 sm:top-32 md:top-40 left-2 sm:left-6 md:left-10 [animation-delay:1s] drop-shadow-[0_0_10px_white]"
        />
        <img
          src={Star}
          alt="image"
          className="absolute size-12 sm:size-16 md:size-20 lg:size-25 animate-move-forward opacity-30 top-0 left-32 sm:left-48 md:left-64 lg:left-80 [animation-delay:2s] drop-shadow-[0_0_10px_white]"
        />
        <img
          src={Star}
          alt="image"
          className="hidden sm:block absolute size-16 md:size-20 lg:size-25 animate-move-forward opacity-30 top-0 sm:left-96 md:left-120 lg:left-160 [animation-delay:1s] drop-shadow-[0_0_10px_white]"
        />
        <img
          src={Star}
          alt="image"
          className="hidden md:block absolute size-20 lg:size-25 animate-move-forward opacity-30 top-0 md:left-180 lg:left-240 [animation-delay:2s] drop-shadow-[0_0_10px_white]"
        />
        <img
          src={Star}
          alt="image"
          className="hidden lg:block absolute size-25 animate-move-forward opacity-30 top-0 lg:left-320 [animation-delay:3s] drop-shadow-[0_0_10px_white]"
        />
        <img
          src={mandala}
          alt="image"
          className="absolute size-48 sm:size-64 md:size-80 lg:size-100 top-15 -left-24 sm:-left-32 md:-left-40 lg:-left-50 animate-spin text-gray-200 dark:text-gray-700 opacity-50"
          style={{ animationDuration: "20s" }}
        />

        <img
          src={mandala}
          alt="image"
          className="absolute size-40 sm:size-52 md:size-64 lg:size-80 top-96 -right-12 sm:-right-16 lg:-right-20 animate-spin text-gray-200 dark:text-gray-700 opacity-40"
          style={{ animationDuration: "20s" }}
        />
      </div>
      <button
        onClick={() => navigate("/form")}
        className="bg-red-400 dark:bg-linear-to-br dark:from-indigo-950 dark:via-indigo-800 dark:to-cyan-900 p-2 text-sm sm:text-base text-white w-36 sm:w-52 md:w-70 z-10 border-black rounded cursor-pointer absolute top-2 right-2 sm:right-5 animate-pulse"
      >
        Add TO Task
      </button>
      <TaskCounter />
      <DarkMode />
      <FilterStatus />
      <Filter />
      <Card />
    </div>
  );
}

export default Home;