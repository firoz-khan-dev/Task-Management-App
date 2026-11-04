import  { useEffect, useState } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState("dark");

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }   
  }, [darkMode]);

  return (
    <div className="absolute top-3 left-3 sm:left-18">
        <button onClick={() =>setDarkMode(darkMode === "dark" ? "light" : "dark")}
        className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 cursor-pointer
          ${darkMode === "dark" ? "bg-gray-700" : "bg-gray-300"}`}>
            
        <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${darkMode === "dark" ? "translate-x-8" : "translate-x-0"}`}>
          {darkMode === "dark" ? "🌙" : "☀️"}
        </div>
      </button>
    </div>
  );
}

export default DarkMode;