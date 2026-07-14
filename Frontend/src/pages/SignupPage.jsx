import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Truck,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Users,
  Wrench,
  Fuel,
  ChevronDown,
  Check,
} from "lucide-react";
import Logo from "../assets/logo.png";

const ROLES = [
  {
    value: "manager",
    label: "Fleet Manager",
    desc: "Oversees fleet operations and reports",
    icon: ShieldCheck,
  },
  {
    value: "driver",
    label: "Driver",
    desc: "Handles trips and vehicle checks",
    icon: Truck,
  },
  {
    value: "dispatcher",
    label: "Dispatcher",
    desc: "Plans routes and assigns trips",
    icon: Users,
  },
  {
    value: "maintenance",
    label: "Maintenance Staff",
    desc: "Logs servicing and repairs",
    icon: Wrench,
  },
];

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const selectRole = (value) => {
    setForm((prev) => ({ ...prev, role: value }));
    setRoleOpen(false);
    if (errors.role) setErrors((prev) => ({ ...prev, role: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) {
      next.name = "Full name is required";
    }
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
    if (!form.role) {
      next.role = "Please select a role";
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
      console.log("API CALL -> POST /api/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
      });
      navigate("/profile-approval");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const selectedRole = ROLES.find((r) => r.value === form.role);

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

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-700 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400">
              <Users className="w-3 h-3" />
              Join your fleet's workspace
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
              Register your transportation business and manage your entire fleet
              with secure role-based access for every team member.
            </p>

            <div className="mt-8 space-y-2">
              {[
                {
                  icon: ShieldCheck,
                  text: "Managers get full visibility and control",
                },
                {
                  icon: Truck,
                  text: "Drivers get trips and vehicle checklists",
                },
                {
                  icon: Fuel,
                  text: "Maintenance & dispatch stay in sync",
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

            <p className="mt-10 text-xs text-slate-500 dark:text-slate-500">
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
              Create your account
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              >
                Log in
              </Link>
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Full name
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white dark:bg-slate-900 pl-10.5 pr-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 ${
                      errors.name
                        ? "border-red-400 focus:ring-red-200 dark:focus:ring-red-900"
                        : "border-slate-300 dark:border-slate-700 focus:border-orange-500 focus:ring-orange-100 dark:focus:ring-orange-500/20"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

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
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a password"
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
                {errors.password ? (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.password}
                  </p>
                ) : (
                  <p className="mt-1.5 text-xs text-slate-400">
                    Use at least 6 characters.
                  </p>
                )}
              </div>

              {/* Role */}
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Role
                </label>

                <button
                  type="button"
                  onClick={() => setRoleOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between gap-2 rounded-xl border bg-white dark:bg-slate-900 pl-4 pr-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 cursor-pointer ${
                    errors.role
                      ? "border-red-400 focus:ring-red-200 dark:focus:ring-red-900"
                      : "border-slate-300 dark:border-slate-700 focus:border-orange-500 focus:ring-orange-100 dark:focus:ring-orange-500/20"
                  }`}
                >
                  <span
                    className={
                      selectedRole
                        ? "text-slate-900 dark:text-slate-100"
                        : "text-slate-400"
                    }
                  >
                    {selectedRole ? selectedRole.label : "Select your role"}
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      roleOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {roleOpen && (
                  <div className="absolute bottom-full left-0 z-20 -mb-6 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm shadow-slate-900/10 dark:shadow-black/40 p-1.5 max-h-72 overflow-y-auto animate-[fadeUp_.2s_ease]">
                    {ROLES.map((role) => (
                      <button
                        key={role.value}
                        type="button"
                        onClick={() => selectRole(role.value)}
                        className="w-full flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <div className="w-8 h-8 shrink-0 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
                          <role.icon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                            {role.label}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {role.desc}
                          </p>
                        </div>

                        {form.role === role.value && (
                          <Check className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {errors.role && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.role}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-amber-600 hover:to-orange-700 hover:shadow-orange-500/40 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
              >
                {submitting ? "Creating account..." : "Create account"}
                {!submitting && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>

              <p className="text-xs text-slate-400 text-center leading-relaxed">
                By creating an account, you agree to FleetOps'{" "}
                <span className="text-slate-500 dark:text-slate-300">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-slate-500 dark:text-slate-300">
                  Privacy Policy
                </span>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
