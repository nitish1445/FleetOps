import React, { useEffect, useState } from "react";
import AppRoutes from "./Router/AppRoutes";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("FleetOps Theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("FleetOps Theme", theme);
  }, [theme]);

  return <AppRoutes theme={theme} setTheme={setTheme} />;
};

export default App;
