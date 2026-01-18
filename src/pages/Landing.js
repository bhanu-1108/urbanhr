import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const LandingPage = ({ setCurrentView }) => {
  /* ================= PARALLAX VALUES ================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const textX = useTransform(mouseX, [-300, 300], [-25, 25]);
  const textY = useTransform(mouseY, [-300, 300], [-25, 25]);

  const orbX = useTransform(mouseX, [-300, 300], [-60, 60]);
  const orbY = useTransform(mouseY, [-300, 300], [-60, 60]);

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col overflow-hidden">
      <Navbar isAuthenticated={false} setCurrentView={setCurrentView} />

      {/* ================= HERO SECTION ================= */}
      <section
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left - rect.width / 2);
          mouseY.set(e.clientY - rect.top - rect.height / 2);
        }}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* 🔵 PARALLAX BACKGROUND ORBS */}
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute top-24 left-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute bottom-24 right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center px-6 relative z-10"
        >
          {/* 🌟 3D + PARALLAX TITLE */}
          <motion.h1
            style={{ x: textX, y: textY }}
            whileHover={{
              rotateX: 14,
              rotateY: -14,
              scale: 1.07
            }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight text-white perspective-1000"
            style={{
              textShadow:
                "0 30px 70px rgba(0,255,255,0.45), 0 15px 40px rgba(0,0,0,0.6)"
            }}
          >
            Urban<span className="text-cyan-400">HR</span>
          </motion.h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A unified, intelligent HRMS platform powering{" "}
            <span className="text-white font-semibold">
              Smart Municipal Corporations
            </span>
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView("register")}
              className="px-12 py-4 rounded-xl bg-cyan-500 text-white font-semibold text-lg shadow-xl shadow-cyan-500/40"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-xl border border-slate-600 text-slate-300 hover:text-white"
            >
              View Demo
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ===== REST OF YOUR PAGE (UNCHANGED) ===== */}
      <section className="bg-[#f8fafc] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Designed for Smart Governance
          </h2>
      
          <div className="grid md:grid-cols-3 gap-8">
  {[
    {
      title: "Centralized Employee Data",
      img: "/images/signin.png",
      desc: "Single source of truth for all municipal employees"
    },
    {
      title: "Automated HR Processes",
      img: "/images/hr.png",
      desc: "Leave, payroll, and approvals fully automated"
    },
    {
      title: "Smart Analytics & Insights",
      img: "/images/dashboard.png",
      desc: "Data-driven governance decisions"
    }
  ].map((item, i) => (
    <motion.div
      key={item.title}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden"
    >
      {/* IMAGE */}
      <div className="h-40 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover
                     group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {item.title}
        </h3>
        <p className="text-slate-500 text-sm">
          {item.desc}
        </p>
      </div>
    </motion.div>
    
  ))}
</div>

        </div>
      </section>
      
      {/* How UrbanHR Works */}
      
      <section className="bg-[#0f172a] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            How Urban<span className="text-cyan-400">HR</span> Works
          </h2>
      
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Register Employees",
              "Automate HR Tasks",
              "Track Performance",
              "Make Smart Decisions"
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#020617] border border-slate-700 rounded-xl p-6 text-center"
              >
                <div className="text-5xl font-bold text-cyan-400 mb-4">
                  {i + 1}
                </div>
                <p className="text-slate-300">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats */}

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            ["500K+", "Employees Managed"],
            ["100+", "Municipal Bodies"],
            ["40%", "Process Efficiency"],
            ["24/7", "Availability"]
          ].map(([value, label]) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-extrabold text-slate-900">
                {value}
              </div>
              <p className="text-slate-500 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-6"
        >
          Ready to Transform Municipal HR?
        </motion.h2>
      
        <p className="text-gray-300 mb-10">
          Join the future of smart city workforce management.
        </p>
      
        <motion.button
          whileHover={{ scale: 1.15 }}
          className="px-12 py-4 bg-cyan-500 hover:bg-cyan-600
                     text-white rounded-xl text-lg font-semibold
                     shadow-xl shadow-cyan-500/40"
        >
          Launch UrbanHR
        </motion.button>
      </section>
      <Footer />
      
    </div>
    
    
  );
  
  
};

export default LandingPage;
