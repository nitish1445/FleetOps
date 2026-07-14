import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiTruck,
  FiCheck,
  FiClock,
  FiRefreshCw,
  FiLogOut,
  FiAlertCircle,
  FiEdit3,
  FiMail,
} from "react-icons/fi";
import toast from "react-hot-toast";
import Logo from "../assets/logo.png";

const Stepper = ({ activeIndex }) => {
  const steps = [
    "Account Created",
    "Approval Details",
    "Pending Approval",
    "Dashboard Access",
  ];

  return (
    <ol className="mx-auto mb-10 flex w-full max-w-3xl items-start justify-between">
      {steps.map((label, i) => {
        const status =
          i < activeIndex ? "done" : i === activeIndex ? "active" : "upcoming";
        return (
          <li key={label} className="flex flex-1 items-center last:flex-none ">
            <div className="flex flex-col items-center gap-2 text-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors
                ${
                  status === "done"
                    ? "border-none bg-linear-to-br from-amber-500 to-orange-600 text-white"
                    : status === "active"
                      ? "border-orange-500 bg-white text-orange-500 dark:bg-slate-900"
                      : "border-slate-300 bg-white text-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-600"
                }`}
              >
                {status === "done" ? (
                  <FiCheck size={14} />
                ) : status === "active" ? (
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                )}
              </span>
              <span
                className={`w-20 text-[11px] font-medium leading-tight sm:w-24 sm:text-xs ${
                  status === "upcoming"
                    ? "text-slate-400 dark:text-slate-600"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-1 -mt-5 h-0.5 flex-1 rounded-full sm:mx-2 ${
                  status === "done"
                    ? "bg-linear-to-r from-amber-500 to-orange-600"
                    : "bg-slate-200 dark:bg-slate-800"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
};

const PendingApprovalPage = () => {
  const navigate = useNavigate();

  // Replace with the real status fetched from your API (GET /api/me).
  // "pending"  → still awaiting review
  // "rejected" → Fleet Owner rejected it, user may edit and resubmit
  const [status, setStatus] = useState("pending");
  const [checking, setChecking] = useState(false);

  const submittedOn = "14 Jul 2026";
  const branch = "Bhopal Central Depot";
  const fleetCompany = "Meridian Logistics Pvt. Ltd.";

  const handleRefresh = () => {
    setChecking(true);
    // Mock re-check — swap for a real API poll, e.g. GET /api/approval-status
    setTimeout(() => {
      setChecking(false);
      // status stays the same here since there's no backend to confirm against
    }, 1000);
  };

  const handleLogout = () => {
    toast.success("User logged out Succefully.");
    navigate("/");
  };

  const isRejected = status === "rejected";

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-linear-to-br from-amber-400 to-orange-600 opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-112 w-md rounded-full bg-linear-to-br from-orange-500 to-amber-400 opacity-10 blur-3xl" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        
        <div className="mb-6 flex items-center gap-2">
          <div className="group flex items-center gap-2 transition-all duration-300">
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
          </div>
        </div>

        <Stepper activeIndex={isRejected ? 1 : 2} />

        {/* Status card */}
        <div className="w-full rounded-xl border border-slate-200/70 bg-white/70 p-7 text-center shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/60">
          <span
            className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${
              isRejected
                ? "bg-red-100 text-red-500 dark:bg-red-500/10"
                : "bg-linear-to-br from-amber-500/15 to-orange-600/15 text-orange-500"
            }`}
          >
            {isRejected ? <FiAlertCircle size={26} /> : <FiClock size={26} />}
          </span>

          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            {isRejected ? "Changes Requested" : "Your Request Is Under Review"}
          </h1>
          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            {isRejected
              ? "Your Fleet Owner asked for a few corrections before they can approve your account."
              : "Your Fleet Owner has been notified and will review your details shortly. You'll get dashboard access as soon as you're approved."}
          </p>

          {/* Summary */}
          <div className="mt-6 grid grid-cols-1 gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-left text-sm sm:grid-cols-2 dark:border-slate-800/30 dark:bg-slate-800/10">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Fleet Company
              </p>
              <p className="mt-0.5 font-medium text-slate-700 dark:text-slate-200">
                {fleetCompany}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Branch
              </p>
              <p className="mt-0.5 font-medium text-slate-700 dark:text-slate-200">
                {branch}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Submitted On
              </p>
              <p className="mt-0.5 font-medium text-slate-700 dark:text-slate-200">
                {submittedOn}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Status
              </p>
              <p
                className={`mt-0.5 inline-flex w-fit items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                  isRejected
                    ? "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                }`}
              >
                {isRejected ? "Needs changes" : "Pending review"}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {isRejected ? (
              <button
                onClick={() => navigate("/profile-approval")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-orange-500/40 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900 cursor-pointer"
              >
                <FiEdit3 size={15} />
                Edit & Resubmit
              </button>
            ) : (
              <button
                onClick={handleRefresh}
                disabled={checking}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-orange-500/40 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 disabled:opacity-70 dark:focus:ring-offset-slate-900 cursor-pointer"
              >
                <FiRefreshCw
                  size={15}
                  className={checking ? "animate-spin" : ""}
                />
                {checking ? "Checking..." : "Refresh Status"}
              </button>
            )}
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
            >
              <FiLogOut size={15} />
              Log Out
            </button>
          </div>
        </div>

        <p className="mt-6 flex items-center gap-1.5 text-center text-xs text-slate-400 dark:text-slate-600">
          <FiMail size={13} />
          Questions? Reach out to your Fleet Administrator directly.
        </p>
      </div>
    </div>
  );
};

export default PendingApprovalPage;
