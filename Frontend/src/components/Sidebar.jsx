import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiTruck,
  FiUsers,
  FiMap,
  FiTool,
  FiDroplet,
  FiBarChart2,
  FiSettings,
  FiX,
  FiLogOut,
} from "react-icons/fi";
import Logo from "../assets/logo.png";
import { toast } from "react-hot-toast";

const navItems = [
  { label: "Dashboard", icon: FiGrid, path: "/dashboard" },
  { label: "Fleet", icon: FiTruck, path: "/dashboard/fleet" },
  { label: "Drivers", icon: FiUsers, path: "/dashboard/drivers" },
  { label: "Trips", icon: FiMap, path: "/dashboard/trips" },
  { label: "Maintenance", icon: FiTool, path: "/dashboard/maintenance" },
  {
    label: "Fuel & Expenses",
    icon: FiDroplet,
    path: "/dashboard/fuel-expenses",
  },
  { label: "Analytics", icon: FiBarChart2, path: "/dashboard/analytics" },
  { label: "Settings", icon: FiSettings, path: "/dashboard/settings" },
];

function NavItems({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-1 mt-4">
      {navItems.map(({ label, icon: Icon, path }) => (
        <NavLink
          key={label}
          to={path}
          end={path === "/dashboard"}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-xl text-[15px] font-medium transition-colors duration-200 ${
              isActive
                ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`
          }
        >
          <Icon size={18} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

// Desktop: fixed sidebar. Mobile: slide-over drawer controlled by isOpen/onClose.
function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // const res = api.get("/auth/logout");
    toast.success("User Logout Succesfully");
    // navigate("/");
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    // Lock background scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-gray-200/60 bg-white/60 px-3 py-5 backdrop-blur-xl dark:border-gray-800/60 dark:bg-slate-900/60 lg:flex">
        {/* Logo */}
        <div className="group flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
            <img src={Logo} alt="FleetOps" className="h-10 w-14 scale-110" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight">
              <span className="text-slate-900 dark:text-white">Fleet</span>
              <span className="bg-linear-to-r from-amber-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Ops
              </span>
            </h1>

            <span className="mt-0.5 font-sans text-[10px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
              Track • Dispatch • Analyze
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-4 flex-1 overflow-y-auto">
          <NavItems />
        </div>

        {/* Logout */}
        <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
          <button
            onClick={handleLogout}
            type="button"
            className="cursor-pointer group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition-all duration-300 hover:border-red-200 hover:bg-red-50/70 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-red-500/20 dark:hover:bg-red-500/10"
          >
            {/* Icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-200 transition-colors duration-300 group-hover:bg-red-500 dark:bg-red-500/10">
              <FiLogOut className="text-lg text-red-600 transition-all duration-300 group-hover:scale-115 group-hover:text-white dark:text-red-400" />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="text-[15px] font-semibold text-slate-800 dark:text-white">
                Logout
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                End current session
              </span>
            </div>
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex lg:hidden"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Backdrop */}

          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sidebar */}
          <aside className="relative z-10 flex h-full w-72 flex-col border-r border-slate-200/60 bg-white/90 px-3 py-5 shadow-2xl backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/90 animate-in slide-in-from-left duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-2">
              <div className="group flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
                  <img
                    src={Logo}
                    alt="FleetOps"
                    className="h-10 w-14 scale-110 transition-transform duration-300 group-hover:scale-115"
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="text-2xl font-extrabold leading-none tracking-tight">
                    <span className="text-slate-900 dark:text-white">
                      Fleet
                    </span>
                    <span className="bg-linear-to-r from-amber-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                      Ops
                    </span>
                  </h1>

                  <span className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
                    Track • Dispatch • Analyze
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-4 flex-1 overflow-y-auto">
              <NavItems onNavigate={onClose} />
            </div>

            {/* Logout */}
            <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
              <button
                onClick={handleLogout}
                type="button"
                className="flex w-full items-center gap-3 rounded-xl border border-red-200 bg-white px-3 py-2 text-red-600 transition hover:bg-red-50 dark:border-red-500/20 dark:bg-slate-900 dark:text-red-400 dark:hover:bg-red-500/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 dark:bg-red-500/10">
                  <FiLogOut className="text-xl" />
                </div>

                <div className="flex flex-col items-start">
                  <span className="font-semibold">Logout</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    End current session
                  </span>
                </div>
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Sidebar;
