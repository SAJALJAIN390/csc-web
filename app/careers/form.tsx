"use client";

import { FormEvent, useState } from "react";

const roles = [
  "Graphic Designer",
  "Frontend Developer",
  "Backend Developer",
  "Social Advertisement",
  "Digital Marketing",
  "Social Media Handling",
];

export default function CareerForm() {
  const [loading, setLoading] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [resumeName, setResumeName] = useState("");

  const handleRoleChange = (role: string) => {
    setSelectedRoles((currentRoles) => {
      if (currentRoles.includes(role)) {
        return currentRoles.filter((item) => item !== role);
      }

      if (currentRoles.length >= 2) {
        alert("You can select a maximum of 2 roles.");
        return currentRoles;
      }

      return [...currentRoles, role];
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (selectedRoles.length === 0) {
      alert("Please select at least one role.");
      return;
    }

    if (selectedRoles.length > 2) {
      alert("You can select a maximum of 2 roles.");
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.delete("roles");

    selectedRoles.forEach((role) => {
      formData.append("roles", role);
    });

    try {
      const res = await fetch("/api", {
        method: "POST",
        body: formData,
      });

      const data: {
        success: boolean;
        message: string;
      } = await res.json();

      if (data.success) {
  alert(data.message);

  form.reset();
  setSelectedRoles([]);
  setResumeName("");
}
 else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Career form error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">

      {/* =========================================================
          PERSONAL INFORMATION
      ========================================================= */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#008ba3] to-[#00bcd4] text-white font-black">
            01
          </div>

          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
              Personal Information
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Tell us a little about yourself.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Name */}
          <div className="md:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              Full Name <span className="text-[#008ba3]">*</span>
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              Phone Number <span className="text-[#008ba3]">*</span>
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>
          {/* e-mail */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              E-Mail ID <span className="text-[#008ba3]">*</span>
            </label>
          <input
  id="email"
  type="email"
  name="email"
  placeholder="your@email.com"
  required
  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
/>
</div>


          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              City Name <span className="text-[#008ba3]">*</span>
            </label>

            <input
              id="city"
              type="text"
              name="city"
              placeholder="Enter your city"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              State <span className="text-[#008ba3]">*</span>
            </label>

            <input
              id="state"
              type="text"
              name="state"
              placeholder="Enter your state"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

          {/* Pincode */}
          <div>
            <label
              htmlFor="pincode"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              Pincode <span className="text-[#008ba3]">*</span>
            </label>

            <input
              id="pincode"
              type="text"
              name="pincode"
              placeholder="6-digit pincode"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

        </div>
      </div>

      {/* =========================================================
          EDUCATION
      ========================================================= */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#008ba3] to-[#00bcd4] text-white font-black">
            02
          </div>

          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
              Education
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Share your academic background.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Course */}
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              Course <span className="text-[#008ba3]">*</span>
            </label>

            <input
              id="course"
              type="text"
              name="course"
              placeholder="e.g. B.Tech, BCA, MBA"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

          {/* Year */}
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              Year <span className="text-[#008ba3]">*</span>
            </label>

            <input
              id="year"
              type="text"
              name="year"
              placeholder="e.g. 2nd Year / Final Year"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

          {/* College */}
          <div className="md:col-span-2">
            <label
              htmlFor="collegeName"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              College Name <span className="text-[#008ba3]">*</span>
            </label>

            <input
              id="collegeName"
              type="text"
              name="collegeName"
              placeholder="Enter your college or university name"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

        </div>
      </div>

      {/* =========================================================
          ABOUT YOU
      ========================================================= */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#008ba3] to-[#00bcd4] text-white font-black">
            03
          </div>

          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
              About You
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Help us understand your personality and abilities.
            </p>
          </div>
        </div>

        <div className="space-y-5">

          {/* Strength */}
          <div>
            <label
              htmlFor="strength"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              Your Strength <span className="text-[#008ba3]">*</span>
            </label>

            <textarea
              id="strength"
              name="strength"
              placeholder="What are you really good at?"
              rows={4}
              required
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

          {/* Weakness */}
          <div>
            <label
              htmlFor="weakness"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              Your Weakness <span className="text-[#008ba3]">*</span>
            </label>

            <textarea
              id="weakness"
              name="weakness"
              placeholder="What are you currently working to improve?"
              rows={4}
              required
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

          {/* Skills */}
          <div>
            <label
              htmlFor="keySkills"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              Key Skills <span className="text-[#008ba3]">*</span>
            </label>

            <textarea
              id="keySkills"
              name="keySkills"
              placeholder="e.g. React, Photoshop, Figma, SEO, Node.js..."
              rows={4}
              required
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
            />
          </div>

        </div>
      </div>

      {/* =========================================================
          ROLE SELECTION
      ========================================================= */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#008ba3] to-[#00bcd4] text-white font-black">
            04
          </div>

          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
              Choose Your Role
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Select up to 2 roles that match your skills.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          {roles.map((role) => {
            const isSelected = selectedRoles.includes(role);
            const isDisabled =
              selectedRoles.length >= 2 && !isSelected;

            return (
              <button
                type="button"
                key={role}
                onClick={() => handleRoleChange(role)}
                disabled={isDisabled}
                className={`
                  relative flex items-center justify-between
                  rounded-xl border p-4 text-left
                  transition-all duration-200
                  ${
                    isSelected
                      ? "border-[#00a9c0] bg-gradient-to-r from-[#008ba3]/10 to-[#00bcd4]/10 shadow-[0_5px_20px_rgba(0,188,212,0.12)]"
                      : "border-slate-200 bg-slate-50 hover:border-[#00a9c0]/40 hover:bg-white"
                  }
                  ${
                    isDisabled
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer"
                  }
                `}
              >

                <span
                  className={`font-semibold ${
                    isSelected
                      ? "text-[#007f96]"
                      : "text-slate-700"
                  }`}
                >
                  {role}
                </span>

                <span
                  className={`
                    flex h-6 w-6 shrink-0 items-center justify-center
                    rounded-full border-2 transition-all
                    ${
                      isSelected
                        ? "border-[#008ba3] bg-[#008ba3] text-white"
                        : "border-slate-300 bg-white"
                    }
                  `}
                >
                  {isSelected && (
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3.3-3.3a1 1 0 011.415-1.42l2.593 2.594 6.493-6.494a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>

              </button>
            );
          })}

        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">

          <span className="text-sm text-slate-500">
            You can choose a maximum of 2 roles.
          </span>

          <span
            className={`text-sm font-bold ${
              selectedRoles.length > 0
                ? "text-[#008ba3]"
                : "text-slate-400"
            }`}
          >
            {selectedRoles.length}/2 Selected
          </span>

        </div>
      </div>

      {/* =========================================================
          ONLINE PROFILES
      ========================================================= */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#008ba3] to-[#00bcd4] text-white font-black">
            05
          </div>

          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
              Online Profiles
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Let us explore your professional work.
            </p>
          </div>
        </div>

        <div className="space-y-5">

          {/* LinkedIn */}
          <div>
            <label
              htmlFor="linkedin"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              LinkedIn <span className="text-[#008ba3]">*</span>
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#008ba3] font-bold">
                in
              </span>

              <input
                id="linkedin"
                type="url"
                name="linkedin"
                placeholder="https://www.linkedin.com/in/your-profile"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
              />
            </div>
          </div>

          {/* GitHub */}
          <div>
            <label
              htmlFor="github"
              className="block text-sm font-bold text-slate-700 mb-2"
            >
              GitHub
              <span className="ml-2 font-normal text-slate-400">
                (Optional)
              </span>
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#008ba3] font-bold">
                @
              </span>

              <input
                id="github"
                type="url"
                name="github"
                placeholder="https://github.com/your-username"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a9c0] focus:bg-white focus:ring-4 focus:ring-[#00bcd4]/10"
              />
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          RESUME
      ========================================================= */}
      {/* =========================================================
    RESUME
========================================================= */}
<div>
  <div className="flex items-center gap-4 mb-6">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#008ba3] to-[#00bcd4] text-white font-black">
      06
    </div>

    <div>
      <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
        Resume
      </h3>

      <p className="text-sm text-slate-500 mt-1">
        Upload your latest resume.
      </p>
    </div>
  </div>

  <label
    htmlFor="resume"
    className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-all ${
      resumeName
        ? "border-green-400 bg-green-50"
        : "border-[#008ba3]/20 bg-gradient-to-br from-[#008ba3]/5 to-[#00bcd4]/5 hover:border-[#008ba3]/50 hover:bg-[#008ba3]/10"
    }`}
  >
    <div
      className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md transition-transform group-hover:scale-110 ${
        resumeName ? "text-green-600" : "text-[#008ba3]"
      }`}
    >
      {resumeName ? (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v9"
          />
        </svg>
      )}
    </div>

    {resumeName ? (
      <>
        <span className="text-lg font-bold text-green-600">
          ✓ Resume Uploaded
        </span>

        <span className="mt-2 max-w-full truncate px-4 text-sm font-semibold text-slate-700">
          {resumeName}
        </span>

        <span className="mt-3 text-xs text-slate-400">
          Click to replace your resume
        </span>
      </>
    ) : (
      <>
        <span className="text-lg font-bold text-slate-800">
          Upload your resume
        </span>

        <span className="mt-2 text-sm text-slate-500">
          Click to browse or drag & drop your file here
        </span>

        <span className="mt-3 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#008ba3] shadow-sm">
          PDF, DOC or DOCX
        </span>
      </>
    )}

    <input
      id="resume"
      type="file"
      name="resume"
      accept=".pdf,.doc,.docx"
      required
      className="hidden"
      onChange={(e) => {
        const file = e.target.files?.[0];

        if (file) {
          setResumeName(file.name);
        } else {
          setResumeName("");
        }
      }}
    />
  </label>
</div>


      {/* =========================================================
          SUBMIT
      ========================================================= */}
      <div className="pt-2">

        <button
          type="submit"
          disabled={loading}
          className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#006d80] via-[#008ba3] to-[#00bcd4] px-8 py-5 text-lg font-black uppercase tracking-[0.15em] text-white shadow-[0_12px_30px_rgba(0,139,163,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,188,212,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >

          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>

          <span className="relative flex items-center justify-center gap-3">

            {loading ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="3"
                  />

                  <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M21 12a9 9 0 00-9-9v3a6 6 0 016 6h3z"
                  />
                </svg>

                Submitting Application...
              </>
            ) : (
              <>
                Submit Application

                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            )}

          </span>

        </button>

        <p className="mt-4 text-center text-xs text-slate-400">
          By submitting this application, you confirm that the information
          provided is accurate.
        </p>

      </div>

    </form>
  );
}
