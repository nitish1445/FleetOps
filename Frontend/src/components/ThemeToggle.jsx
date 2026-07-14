import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        p-2 rounded-xl glass hover:bg-gray-100 dark:hover:bg-gray-800
        transition-colors duration-200 text-gray-600 dark:text-gray-300 cursor-pointer
      "
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
