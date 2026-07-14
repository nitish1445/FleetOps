import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import {
  Truck,
  Menu,
  X,
  Sun,
  Moon,
  MapPin,
  BarChart3,
  ShieldCheck,
  Users,
  Route,
  Wrench,
  Fuel,
  PieChart,
  Bell,
  Search,
  ChevronRight,
  Gauge,
  Radio,
  LayoutDashboard,
  Car,
  MoveRightIcon,
} from "lucide-react";
import Logo from "../assets/logo.png";

const HomePage = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const featureCards = [
    {
      icon: Truck,
      title: "Vehicle Registry",
      desc: "Keep every vehicle's documents, specs, and status organized in one place.",
    },
    {
      icon: Users,
      title: "Driver Management",
      desc: "Track licenses, assignments, and performance for your entire driver pool.",
    },
    {
      icon: Route,
      title: "Trip Dispatch",
      desc: "Plan routes and dispatch trips with real-time visibility into every job.",
    },
    {
      icon: Wrench,
      title: "Maintenance Logs",
      desc: "Schedule services and log repairs so vehicles stay road-ready.",
    },
    {
      icon: Fuel,
      title: "Fuel & Expenses",
      desc: "Record fuel fill-ups and expenses to keep operating costs in check.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      desc: "Turn fleet activity into clear insights with live operational reports.",
    },
  ];

  const whyPoints = [
    {
      icon: Radio,
      title: "Real-Time Fleet Monitoring",
      desc: "See where every vehicle is and what it's doing, as it happens.",
    },
    {
      icon: ShieldCheck,
      title: "Role Based Access",
      desc: "Give dispatchers, drivers, and admins exactly the access they need.",
    },
    {
      icon: Gauge,
      title: "Operational Insights",
      desc: "Spot bottlenecks and cost drivers before they become problems.",
    },
    {
      icon: LayoutDashboard,
      title: "Responsive Dashboard",
      desc: "A control center that works just as well on a tablet as a desktop.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-[Inter,sans-serif] transition-colors duration-300">
      {/* NAVBAR  */}

      <header className="sticky top-0 z-50 backdrop-blur-3xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}

            <Link
              to="/"
              className="group flex items-center gap-2 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden ">
                <img
                  src={Logo}
                  alt="FleetOps"
                  className="h-10 w-14 transition-transform duration-300 scale-110"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="leading-none text-2xl font-extrabold tracking-tight">
                  <span className="text-slate-900 dark:text-white">Fleet</span>

                  <span className="bg-linear-to-r from-amber-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Ops
                  </span>
                </h1>

                <span className="mt-0.5 text-[9px] lg:text-[10px] font-medium tracking-wide text-slate-500 dark:text-slate-400 font-sans">
                  Track • Dispatch • Analyze
                </span>
              </div>
            </Link>

            {/* Right */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle theme={theme} setTheme={setTheme} />

              <Link
                to="/login"
                className="rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500 dark:text-slate-200"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-102 hover:shadow-orange-500/40"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle theme={theme} setTheme={setTheme} />

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                {menuOpen ? (
                  <X className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-200 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
            <div className="px-5 py-6">
              <div className="mb-6 text-center">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Welcome to{" "}
                  <span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
                    FleetOps
                  </span>
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 px-3">
                  Manage your fleet operations efficiently with one modern
                  platform.
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="flex h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition-all hover:border-amber-500 hover:text-amber-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-linear-to-r from-amber-500 to-orange-600 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] hover:shadow-orange-500/40"
                >
                  Get Started
                </Link>
              </div>

              {/* Footer */}
              <p className="mt-5 text-center text-xs text-slate-500 dark:text-slate-400">
                Manage • Monitor • Move Forward
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden">
        {/* Ambient background glow */}

        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-20 -right-32 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-20 lg:pb-28 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}

          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
              <MapPin className="w-3 h-3" />
              Built for modern Fleets
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Smart{" "}
              <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Fleet
              </span>{" "}
              Management,{" "}
              <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Transport
              </span>{" "}
              &{" "}
              <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Analytics
              </span>{" "}
              Made Simple
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-6 lg:leading-7">
              Manage vehicles, drivers, trips, maintenance and expenses from one
              modern dashboard.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200"
              >
                Login
              </Link>
            </div>

            {/* Feature Chips */}
            <div className="mt-8 flex flex-wrap gap-3 justify-evenly">
              {[
                { icon: MapPin, label: "Fleet Tracking" },
                { icon: BarChart3, label: "Live Analytics" },
                { icon: MoveRightIcon, label: "Easy Dispatch" },
                { icon: ShieldCheck, label: "Secure Access" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  <chip.icon className="w-3.5 h-3.5 text-orange-500" />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Dashboard Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-slate-900/10 dark:shadow-black/40 overflow-hidden">
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col w-16 py-5 gap-5 border-r border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
                  <div className="mx-auto w-9 h-9 rounded-xl bg-white flex items-center justify-center">
                    <Truck className="w-4.5 h-4.5 text-orange-600" />
                  </div>
                  {[LayoutDashboard, Route, Users, Car, PieChart].map(
                    (Icon, i) => (
                      <div
                        key={i}
                        className={`mx-auto w-9 h-9 rounded-lg flex items-center justify-center ${
                          i === 0
                            ? "bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400"
                            : "text-slate-400 dark:text-slate-500"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    ),
                  )}
                </div>

                {/* Main dashboard content */}
                <div className="flex-1 p-4 sm:p-5">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        Fleet Overview
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Live operations summary
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Search className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Bell className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      {
                        label: "Active Vehicles",
                        value: "128",
                        color: "text-blue-600 dark:text-blue-400",
                      },
                      {
                        label: "On Trip",
                        value: "42",
                        color: "text-orange-600 dark:text-orange-400",
                      },
                      {
                        label: "Drivers Online",
                        value: "76",
                        color: "text-emerald-600 dark:text-emerald-400",
                      },
                      { label: "Alerts", value: "3", color: "text-red-500" },
                    ].map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/50 p-3 shadow-sm"
                      >
                        <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                          {kpi.label}
                        </p>
                        <p className={`text-lg font-bold ${kpi.color}`}>
                          {kpi.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-5 gap-3">
                    {/* Table + progress */}
                    <div className="col-span-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/50 p-3 shadow-sm">
                      <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 mb-2">
                        Route Progress
                      </p>
                      <div className="space-y-2.5">
                        {[
                          {
                            name: "Route A-12",
                            pct: 80,
                            color: "bg-orange-500",
                          },
                          { name: "Route B-04", pct: 55, color: "bg-blue-500" },
                          {
                            name: "Route C-09",
                            pct: 30,
                            color: "bg-emerald-500",
                          },
                        ].map((r) => (
                          <div key={r.name}>
                            <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mb-1">
                              <span>{r.name}</span>
                              <span>{r.pct}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                              <div
                                className={`h-full rounded-full ${r.color}`}
                                style={{ width: `${r.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pie chart placeholder */}
                    <div className="col-span-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/50 p-3 shadow-sm flex flex-col items-center justify-center">
                      <div
                        className="w-16 h-16 rounded-full"
                        style={{
                          background:
                            "conic-gradient(#f59e0b 0% 45%, #2563eb 45% 75%, #22c55e 75% 100%)",
                        }}
                      />
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">
                        Fleet Status
                      </p>
                    </div>
                  </div>

                  {/* Vehicle card */}
                  <div className="mt-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/50 p-3 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 truncate">
                        Vehicle MH-12-AB-3345
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        En route · 32 km remaining
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  99.9% Uptime
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  System reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Features
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Everything your fleet operations need
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              One platform to organize vehicles, drivers, trips, and costs
              without spreadsheets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FLEETOPS */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - illustration using cards */}

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-linear-to-br from-amber-500 to-orange-600 p-6 shadow-lg h-44 flex flex-col justify-between">
              <Truck className="w-7 h-7 text-white" />
              <div>
                <p className="text-2xl font-bold text-white">128+</p>
                <p className="text-xs text-white/80">Vehicles managed</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm h-44 flex flex-col justify-between mt-8">
              <BarChart3 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  99.9%
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Platform uptime
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm h-44 flex flex-col justify-between">
              <Users className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  1.2k
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Drivers onboard
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-slate-800 p-6 shadow-lg h-44 flex flex-col justify-between mt-8">
              <ShieldCheck className="w-7 h-7 text-orange-400" />
              <div>
                <p className="text-2xl font-bold text-white">Secure</p>
                <p className="text-xs text-slate-300">Role based access</p>
              </div>
            </div>
          </div>

          {/* Right - content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Why FleetOps
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Choose FleetOps?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Built for teams who need clarity across their entire fleet, not
              just another spreadsheet replacement.
            </p>

            <div className="mt-8 space-y-5">
              {whyPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {point.title}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div>
        <div className="h-px w-full bg-linear-to-r from-transparent via-amber-500 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-700 dark:text-white">
              FleetOps
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
