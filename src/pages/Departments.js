import React from "react";

const departments = [
  "Administration",
  "Engineering",
  "Health & Sanitation",
  "Finance",
  "IT & Digital Services",
  "Public Works",
];

const Departments = () => (
    <div className="pt-32 px-6 text-white max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Municipal Departments
      </h1>

    <div className="grid md:grid-cols-2 gap-6">
      {departments.map((d, i) => (
        <div
          key={i}
          className="bg-white/5 border border-cyan-500/20 rounded-xl p-5"
        >
          <h3 className="text-lg font-semibold text-cyan-300">{d}</h3>
          <p className="text-sm text-slate-400 mt-1">
            Managed digitally through UrbanHR
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Departments;
