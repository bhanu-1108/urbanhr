import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 border-t border-cyan-500/30">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 items-start gap-10 text-sm">

        {/* LEFT — About */}
        <div className="md:text-left text-center">
          <h3 className="text-cyan-400 font-bold text-lg mb-3">UrbanHR</h3>
          <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
            Unified Digital HRMS platform designed for Smart City Municipal
            Corporations with automation, analytics, and transparency.
          </p>
        </div>

        {/* CENTER — Quick Links */}
        <div className="text-center">
          <h3 className="text-cyan-400 font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Employee Portal",
              "HR Dashboard",
              "Analytics",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — Contact */}
        <div className="md:text-right text-center">
          <h3 className="text-cyan-400 font-bold text-lg mb-3">Contact</h3>
          <p className="text-gray-400 leading-relaxed">
            Municipal Tech Office<br />
            Smart City Complex<br />
            New Delhi, India
          </p>

          <p className="text-gray-400 mt-2">
            📧 support@urbanhr.gov<br />
            📞 +91 98765 43210
          </p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600
                       text-white rounded-lg shadow-lg shadow-cyan-500/30"
          >
            Contact Support
          </motion.button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 py-4 border-t border-cyan-500/20">
        © 2026 UrbanHR — Smart City HRMS
      </div>
    </footer>
  );
};

export default Footer;
