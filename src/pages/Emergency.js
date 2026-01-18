import React from 'react';
import { motion } from 'framer-motion';

const EmergencyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🚨</span>
          <div>
            <h2 className="text-xl font-bold text-red-400">Emergency Alert System</h2>
            <p className="text-gray-300">No active emergencies</p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Emergency & Crisis Management</h1>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Emergency Contacts</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Fire Department</span>
              <span className="text-white font-semibold">101</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Police</span>
              <span className="text-white font-semibold">100</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Ambulance</span>
              <span className="text-white font-semibold">102</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Emergency Control Room</span>
              <span className="text-white font-semibold">1800-XXX-XXXX</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Workforce Deployment Status</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Available Staff</span>
              <span className="text-green-400 font-semibold">98</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">On Duty</span>
              <span className="text-cyan-400 font-semibold">27</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Emergency Response Team</span>
              <span className="text-yellow-400 font-semibold">Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EmergencyPage;