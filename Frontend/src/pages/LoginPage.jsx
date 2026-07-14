import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Truck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  MapPin,
  BarChart3,
  ShieldCheck,
  Route,
} from "lucide-react";
import Logo from "../assets/logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.password) {
      next.password = "Password is required";
    } else if (form.password.length < 6) {
      next.password = "Password must be at least 6 characters";
    }
    return next;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) return;

      setSubmitting(true);

      // TODO: replace with real API call once backend is ready
      console.log("API CALL -> POST /api/auth/login", {
        email: form.email,
        password: form.password,
        rememberMe,
      });

      navigate("/dashboard");

      // if (!user.approvalRequestSubmitted) {
      //   navigate("/profile-approval");
      // } else if (!user.isApproved) {
      //   navigate("/profile-status");
      // } else if (user.isApproved) {
      //   navigate("/dashboard");
      // } else {
      //   navigate("/");
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-[Inter,sans-serif] transition-colors duration-300">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT - Branding panel */}

        <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 px-12 py-12">
          <div className="absolute inset-0">
            {/* Blue Glow */}
            <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-sky-500/10 dark:bg-sky-500/20 blur-3xl" />

            {/* Orange Glow */}
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 dark:bg-orange-500/15 blur-3xl" />

            {/* Cyan Glow */}
            <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          {/* Logo */}
          <Link to="/" className="relative flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
              <img src={Logo} alt="FleetOps" className="h-10 w-14 scale-110" />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="leading-none text-2xl font-extrabold tracking-tight">
                <span className="text-slate-900 dark:text-white">Fleet</span>
                <span className="bg-linear-to-r from-amber-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Ops
                </span>
              </h1>

              <span className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
                Track • Dispatch • Analyze
              </span>
            </div>
          </Link>

          {/* Content */}
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-700 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400">
              <MapPin className="w-3 h-3" />
              Built for modern Fleets
            </span>

            <h2 className="mt-8 text-3xl xl:text-4xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Every route, <br />
              every vehicles,
              <br />
              <span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
                one console.
              </span>
            </h2>

            <p className="mt-4 max-w-md leading-relaxed text-slate-600 dark:text-slate-400">
              Sign in to manage vehicles, drivers, trips, and expenses from one
              modern dashboard.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Route,
                  text: "Live trip dispatch and route tracking",
                },
                {
                  icon: BarChart3,
                  text: "Real-time analytics across your fleet",
                },
                {
                  icon: ShieldCheck,
                  text: "Role based, secure access for every team",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="mt-1">
                    <item.icon className="h-4.5 w-4.5 text-orange-500" />
                  </div>

                  <p className="text-[15px] leading-6 text-slate-700 dark:text-slate-300">
                    {item.text}.
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <p className="mt-10 relative text-xs text-slate-500 dark:text-slate-500">
              © {new Date().getFullYear()} FleetOps. All rights reserved.
            </p>
          </div>
        </div>

        {/* RIGHT - Form panel */}

        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-sm">
            {/* Mobile logo */}
            <Link to="/" className="flex lg:hidden items-center gap-2 mb-10">
              <img src={Logo} alt="FleetOps" className="h-9 w-12 scale-110" />
              <h1 className="leading-none text-xl font-extrabold tracking-tight">
                <span className="text-slate-900 dark:text-white">Fleet</span>
                <span className="bg-linear-to-r from-amber-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Ops
                </span>
              </h1>
            </Link>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Log in to your account
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              >
                Sign up
              </Link>
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white dark:bg-slate-900 pl-10.5 pr-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 ${
                      errors.email
                        ? "border-red-400 focus:ring-red-200 dark:focus:ring-red-900"
                        : "border-slate-300 dark:border-slate-700 focus:border-orange-500 focus:ring-orange-100 dark:focus:ring-orange-500/20"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white dark:bg-slate-900 pl-10.5 pr-11 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 ${
                      errors.password
                        ? "border-red-400 focus:ring-red-200 dark:focus:ring-red-900"
                        : "border-slate-300 dark:border-slate-700 focus:border-orange-500 focus:ring-orange-100 dark:focus:ring-orange-500/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4.5 h-4.5" />
                    ) : (
                      <Eye className="w-4.5 h-4.5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="peer sr-only"
                />
                <span
                  className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                    rememberMe
                      ? "bg-orange-600 border-orange-600"
                      : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                  }`}
                >
                  {rememberMe && (
                    <svg
                      viewBox="0 0 12 10"
                      className="w-2.5 h-2.5 fill-none stroke-white stroke-[2.2]"
                    >
                      <path
                        d="M1 5l3 3 7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Remember me
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-amber-600 hover:to-orange-700 hover:shadow-orange-500/40 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
              >
                {submitting ? "Signing in..." : "Sign in"}
                {!submitting && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              <span className="text-xs text-slate-400">or</span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            </div>

            <Link
              to="/"
              className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400"
            >
              <Truck className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
