import React from "react";
import { motion } from "framer-motion";

const navItem = {
  whileHover: { y: -2, scale: 1.05 },
  transition: { type: "spring", stiffness: 300 }
};

const Navbar = ({ isAuthenticated, userRole, onLogout, setCurrentView }) => {

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900/90 to-blue-900/90 backdrop-blur-xl border-b border-cyan-500/30"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
       {/* Logo */}
<div
  className="flex items-center gap-2 cursor-pointer select-none"
  onClick={() => window.location.reload()}
>
  <span className="text-2xl font-extrabold text-cyan-400 tracking-wide">
    UrbanHR
  </span>
  <span className="text-xs text-gray-400">Smart City HRMS</span>
</div>


        {/* Nav Buttons */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {["Features", "Solutions", "Departments", "Analytics", "Contact"].map(
            (item) => (
              <motion.button
                key={item}
                {...navItem}
                className="text-gray-300 hover:text-cyan-400 transition relative"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </motion.button>
            )
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
         {isAuthenticated ? (
  <>
    <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
      {userRole}
    </span>

    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={onLogout}
      className="px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30"
    >
      Logout
    </motion.button>
  </>
) : (
  <>
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={() => setCurrentView("signin")}
      className="px-4 py-2 text-cyan-300 hover:text-cyan-200"
    >
      Sign In
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.08 }}
      onClick={() => setCurrentView("register")}
      className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/30"
    >
      Register
    </motion.button>
  </>
)}

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
