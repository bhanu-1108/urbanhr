import React from "react";


const Feature = () => {
  return (
    <div className="pt-32 px-6 text-white max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Platform Features
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-xl border border-cyan-500/20">
          Centralized Employee Data
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-cyan-500/20">
          Attendance & Payroll
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-cyan-500/20">
          Smart Analytics
        </div>
      </div>
    </div>
  );
};
export default Feature;