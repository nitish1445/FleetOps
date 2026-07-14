import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiTruck,
  FiCheck,
  FiUser,
  FiMail,
  FiBriefcase,
  FiPhone,
  FiCamera,
  FiHome,
  FiHash,
  FiFileText,
  FiCalendar,
  FiUploadCloud,
  FiInfo,
  FiArrowRight,
  FiSave,
} from "react-icons/fi";
import Logo from "../assets/logo.png";

const ORGANIZATIONS = [
  {
    id: "ORG001",
    name: "Meridian Logistics Pvt. Ltd.",
    code: "ML001",
  },
  {
    id: "ORG002",
    name: "Express Cargo Solutions",
    code: "ECS002",
  },
  {
    id: "ORG003",
    name: "BlueLine Transport",
    code: "BLT003",
  },
  {
    id: "ORG004",
    name: "National Freight Movers",
    code: "NFM004",
  },
  {
    id: "ORG005",
    name: "Swift Logistics",
    code: "SL005",
  },
  {
    id: "ORG006",
    name: "Prime Fleet Services",
    code: "PFS006",
  },
  {
    id: "ORG007",
    name: "RoadLink Cargo",
    code: "RLC007",
  },
  {
    id: "ORG008",
    name: "Velocity Transport",
    code: "VT008",
  },
  {
    id: "ORG009",
    name: "Apex Logistics",
    code: "AL009",
  },
  {
    id: "ORG010",
    name: "TransMax Movers",
    code: "TM010",
  },
];

const FieldShell = ({ label, required, error, htmlFor, children }) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
        {required && <span className="text-orange-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
};

const Input = ({
  label,
  icon: Icon,
  error,
  required,
  readOnly,
  id,
  ...props
}) => {
  return (
    <FieldShell label={label} required={required} error={error} htmlFor={id}>
      <div className="relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
        )}
        <input
          id={id}
          readOnly={readOnly}
          {...props}
          className={`w-full rounded-xl border py-2.5 text-sm text-slate-900 transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50
          ${Icon ? "pl-10" : "pl-3.5"} pr-3.5
          ${error ? "border-red-400 dark:border-red-500" : "border-slate-200 focus:border-orange-500 dark:border-slate-700"}
          ${
            readOnly
              ? "cursor-not-allowed bg-slate-50 text-slate-500 dark:bg-slate-800/60 dark:text-slate-400"
              : "bg-white dark:bg-slate-900 dark:text-slate-100"
          }`}
        />
      </div>
    </FieldShell>
  );
};

const UploadField = ({
  label,
  required,
  error,
  fileName,
  onChange,
  icon: Icon,
  accept,
  id,
}) => {
  return (
    <FieldShell label={label} required={required} error={error} htmlFor={id}>
      <label
        htmlFor={id}
        className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed px-4 py-3 text-sm transition-all duration-200 hover:border-orange-400 hover:bg-orange-50/60 focus-within:ring-2 focus-within:ring-orange-500/50 dark:hover:bg-orange-500/5
        ${error ? "border-red-400" : "border-slate-200 dark:border-slate-700"}
        bg-slate-50/50 dark:bg-slate-800/30`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-500/15 to-orange-600/15 text-orange-500">
          <Icon size={16} />
        </span>
        <span className="truncate text-slate-600 dark:text-slate-300">
          {fileName || "Click to upload or drag and drop"}
        </span>
        <input
          id={id}
          type="file"
          accept={accept}
          onChange={onChange}
          className="sr-only"
        />
      </label>
    </FieldShell>
  );
};

const Stepper = () => {
  const steps = [
    { label: "Account Created", status: "done" },
    { label: "Approval Details", status: "active" },
    { label: "Pending Approval", status: "upcoming" },
    { label: "Dashboard Access", status: "upcoming" },
  ];

  return (
    <ol className="mx-auto mb-10 flex w-full max-w-3xl items-start justify-between">
      {steps.map((step, i) => (
        <li
          key={step.label}
          className="flex flex-1 items-center last:flex-none"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors
              ${
                step.status === "done"
                  ? "border-none bg-linear-to-br from-amber-500 to-orange-600 text-white"
                  : step.status === "active"
                    ? "border-orange-500 bg-white text-orange-500 dark:bg-slate-900"
                    : "border-slate-300 bg-white text-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-600"
              }`}
            >
              {step.status === "done" ? (
                <FiCheck size={14} />
              ) : step.status === "active" ? (
                <span className="h-2 w-2 rounded-full bg-orange-500" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              )}
            </span>
            <span
              className={`w-20 text-[11px] font-medium leading-tight sm:w-24 sm:text-xs ${
                step.status === "upcoming"
                  ? "text-slate-400 dark:text-slate-600"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`mx-1 -mt-5 h-0.5 flex-1 rounded-full sm:mx-2 ${
                step.status === "done"
                  ? "bg-linear-to-r from-amber-500 to-orange-600"
                  : "bg-slate-200 dark:bg-slate-800"
              }`}
            />
          )}
        </li>
      ))}
    </ol>
  );
};

const Section = ({ title, description, children }) => {
  return (
    <section className="border-t border-slate-100 py-7 first:border-t-0 first:pt-0 dark:border-slate-800/70">
      <h3 className="text-base font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      {description && (
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {children}
      </div>
    </section>
  );
};

export default function ApprovalProfilePage() {
  const navigate = useNavigate();

  // Simulated data already captured during registration.
  const registeredUser = {
    fullName: "Aditya Sharma",
    email: "aditya.sharma@fleetops.io",
    role: "Mnager", // change to e.g. "Dispatcher" to see Section 3 disappear
  };

  const [form, setForm] = useState({
    mobile: "",
    photoFile: null,
    photoPreview: "",
    fleetCompany: "",
    employeeId: "",
    dlNumber: "",
    dlExpiry: "",
    dlFile: null,
    dlFileName: "",
    declaration: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [savingDraft, setSavingDraft] = useState(false);
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const [organizationSearch, setOrganizationSearch] = useState("");

  const isDriver = registeredUser.role === "Driver";

  const filteredOrganizations = ORGANIZATIONS.filter((org) =>
    org.name.toLowerCase().includes(organizationSearch.toLowerCase()),
  );

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    update("photoFile", file);
    update("photoPreview", URL.createObjectURL(file));
  };

  const handleDlChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    update("dlFile", file);
    update("dlFileName", file.name);
  };

  const validate = () => {
    const errs = {};
    if (!form.mobile.trim()) errs.mobile = "Mobile number is required.";
    if (isDriver) {
      if (!form.dlNumber.trim())
        errs.dlNumber = "Driving licence number is required.";
      if (!form.dlExpiry) errs.dlExpiry = "Licence expiry date is required.";
      if (!form.dlFile) errs.dlFile = "Driving licence upload is required.";
    }
    if (!form.declaration)
      errs.declaration = "Please confirm the declaration to continue.";
    return errs;
  };

  // Mock submit handler — replace with a real API call when the backend is ready.
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const errs = validate();
      setErrors(errs);
      if (Object.keys(errs).length > 0) return;
      setSubmitting(true);

      console.log("Approval request submitted:", form);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSaveDraft = () => {
    setSavingDraft(true);
    setTimeout(() => {
      console.log("Draft saved:", form);
      setSavingDraft(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Ambient background */}

      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-linear-to-br from-amber-400 to-orange-600 opacity-20 blur-3xl dark:opacity-20" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-112 w-md rounded-full bg-linear-to-br from-orange-500 to-amber-400 opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}

        <header className="mb-10 flex flex-col items-center">
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

          <h1 className="text-2xl text-center font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Complete Your Approval Profile
          </h1>
          <p className="mt-3 max-w-md text-sm text-slate-500 dark:text-slate-400 text-center">
            Complete a few details so your Fleet Owner can verify your account
            before granting dashboard access.
          </p>
        </header>

        <Stepper />

        {/* Main card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-8 dark:border-slate-800/70 dark:bg-slate-900/60"
        >
          {/* Section 1 — Personal Information */}
          <Section
            title="Personal Information"
            description="Basic details from your registration."
          >
            <Input
              id="fullName"
              label="Full Name"
              icon={FiUser}
              value={registeredUser.fullName}
              readOnly
            />
            <Input
              id="email"
              label="Email Address"
              icon={FiMail}
              value={registeredUser.email}
              readOnly
            />
            <Input
              id="role"
              label="Role"
              icon={FiBriefcase}
              value={registeredUser.role}
              readOnly
            />
            <Input
              id="mobile"
              label="Mobile Number"
              icon={FiPhone}
              required
              placeholder="+91 98765 43210"
              value={form.mobile}
              onChange={(e) => update("mobile", e.target.value)}
              error={errors.mobile}
            />

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Profile Photo
              </label>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                  {form.photoPreview ? (
                    <img
                      src={form.photoPreview}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FiCamera className="text-slate-400" size={22} />
                  )}
                </div>
                <label
                  htmlFor="photo"
                  className="cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-orange-400 hover:text-orange-600 focus-within:ring-2 focus-within:ring-orange-500/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {form.photoFile ? "Change photo" : "Upload photo"}
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </Section>

          {/* Section 2 — Organization */}
          <Section
            title="Organization"
            description="Confirm the branch you're joining."
          >
            <div className=" relative">
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Organization
                <span className="ml-1 text-orange-500">*</span>
              </label>

              <div
                onClick={() => setOrganizationOpen(true)}
                className="flex cursor-text items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 dark:border-slate-700 dark:bg-slate-900"
              >
                <FiHome className="text-slate-400" />

                <input
                  type="text"
                  value={organizationSearch}
                  onChange={(e) => {
                    setOrganizationSearch(e.target.value);
                    update("fleetCompany", "");
                    setOrganizationOpen(true);
                  }}
                  placeholder="Search organization..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              {organizationOpen && (
                <div className="absolute z-20 mt-2 w-full rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/40 max-h-72 overflow-y-auto animate-[fade_.2s_ease]">
                  {filteredOrganizations.length ? (
                    filteredOrganizations.map((org) => (
                      <button
                        key={org.id}
                        type="button"
                        onClick={() => {
                          update("fleetCompany", org.id);
                          setOrganizationSearch(org.name);
                          setOrganizationOpen(false);
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                            {org.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                            Fleet Code: {org.code}
                          </p>
                        </div>

                        {form.fleetCompany === org.id && (
                          <FiCheck className="h-4 w-4 shrink-0 text-orange-600 dark:text-orange-400" />
                        )}
                      </button>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-2 text-center">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        No organization found
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        Try searching with a different name.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <Input
              id="employeeId"
              label="Employee ID"
              icon={FiHash}
              placeholder="Optional"
              value={form.employeeId}
              onChange={(e) => update("employeeId", e.target.value)}
            />
          </Section>

          {/* Section 3 — Driver-only details */}
          {isDriver && (
            <Section
              title="Driving Credentials"
              description="Required for drivers to be verified for dispatch."
            >
              <Input
                id="dlNumber"
                label="Driving Licence Number"
                icon={FiFileText}
                required
                placeholder="e.g. MP04 20230012345"
                value={form.dlNumber}
                onChange={(e) => update("dlNumber", e.target.value)}
                error={errors.dlNumber}
              />
              <Input
                id="dlExpiry"
                label="Licence Expiry Date"
                icon={FiCalendar}
                type="date"
                required
                value={form.dlExpiry}
                onChange={(e) => update("dlExpiry", e.target.value)}
                error={errors.dlExpiry}
              />
              <div className="sm:col-span-2">
                <UploadField
                  id="dlUpload"
                  label="Driving Licence Upload"
                  icon={FiUploadCloud}
                  accept="image/*,.pdf"
                  required
                  fileName={form.dlFileName}
                  onChange={handleDlChange}
                  error={errors.dlFile}
                />
              </div>
            </Section>
          )}

          {/* Section 4 — Declaration */}
          <section className="border-t border-slate-100 py-7 dark:border-slate-800/70">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.declaration}
                onChange={(e) => update("declaration", e.target.checked)}
                className="peer sr-only"
              />

              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                  form.declaration
                    ? "border-orange-600 bg-orange-600"
                    : "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
                }`}
              >
                {form.declaration && (
                  <svg
                    viewBox="0 0 12 10"
                    className="h-2.5 w-2.5 fill-none stroke-white stroke-[2.2]"
                  >
                    <path
                      d="M1 5l3 3 7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>

              <div className="flex-1">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  I confirm that the information provided is accurate and can be
                  reviewed by my Fleet Administrator.
                </p>

                {errors.declaration && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.declaration}
                  </p>
                )}
              </div>
            </label>
          </section>

          {/* Bottom information card */}
          <div className="mt-2 flex gap-3 rounded-2xl border border-orange-100 bg-orange-50/60 p-4 dark:border-orange-500/20 dark:bg-orange-500/10">
            <FiInfo className="mt-0.5 shrink-0 text-orange-500" size={18} />
            <div className="text-sm text-slate-600 dark:text-slate-300">
              <p className="mb-1.5 font-semibold text-slate-800 dark:text-white">
                What happens next?
              </p>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li>• Your Fleet Owner will review your request.</li>
                <li>• Once approved you'll receive dashboard access.</li>
                <li>
                  • If rejected you can edit your information and resubmit.
                </li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleSaveDraft}
              disabled={savingDraft}
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <FiSave size={15} />
              {savingDraft ? "Saving..." : "Save Draft"}
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-orange-500/40 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 disabled:opacity-70 dark:focus:ring-offset-slate-900 cursor-pointer"
            >
              {submitting ? "Submitting..." : "Submit Approval Request"}
              {!submitting && <FiArrowRight size={15} />}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
          Need help? Contact your Fleet Administrator to speed up verification.
        </p>
      </div>
    </div>
  );
}
