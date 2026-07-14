import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiHome, FiMapPin } from "react-icons/fi";
import { FaTruck } from "react-icons/fa";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 px-5">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -top-48 h-144 w-xl -translate-x-1/2 rounded-full bg-orange-400/20 blur-[150px]" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Radar */}
        <div className="relative mx-auto flex h-72 w-72 items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full border border-orange-400/20 animate-ping" />
          <div className="absolute h-56 w-56 rounded-full border border-orange-400/30" />
          <div className="absolute h-40 w-40 rounded-full border border-orange-400/40" />
          <div className="absolute h-24 w-24 rounded-full border border-orange-500/60" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-500 shadow-2xl shadow-orange-500/30">
            <FaTruck className="text-3xl text-white" />
          </div>

          <FiMapPin className="absolute top-5 left-14 text-2xl text-red-500" />
          <FiMapPin className="absolute bottom-10 right-10 text-xl text-cyan-500" />
        </div>

        <p className="text-orange-500 font-semibold tracking-[0.3em] uppercase">
          GPS Signal Lost
        </p>

        <h1 className="mt-2 text-5xl md:text-7xl font-black text-slate-900 dark:text-white">
          404
        </h1>

        <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
          Vehicle Route Not Found
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-400 lg:w-xl leading-normal">
          Our dispatcher couldn't locate the destination you're looking for. The
          route may have changed or the page no longer exists.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-linear-to-r from-amber-400 to-orange-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <FiHome />
              Dashboard
            </span>
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <FiArrowLeft />
              Previous Route
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
