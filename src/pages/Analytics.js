import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';

const AnalyticsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Analytics & Reports</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Employees" value="125" icon="👥" color="cyan" />
        <StatCard title="Departments" value="8" icon="🏢" color="blue" />
        <StatCard title="Avg Attendance" value="85%" icon="📊" color="green" />
        <StatCard title="Turnover Rate" value="3.2%" icon="🔄" color="yellow" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Department-wise Distribution</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Engineering</span>
              <span className="text-white font-semibold">35 employees</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">IT</span>
              <span className="text-white font-semibold">28 employees</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Finance</span>
              <span className="text-white font-semibold">22 employees</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">HR</span>
              <span className="text-white font-semibold">15 employees</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Operations</span>
              <span className="text-white font-semibold">25 employees</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Monthly Insights</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">New Hires</span>
              <span className="text-green-400 font-semibold">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Resignations</span>
              <span className="text-red-400 font-semibold">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Promotions</span>
              <span className="text-cyan-400 font-semibold">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Transfers</span>
              <span className="text-yellow-400 font-semibold">3</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnalyticsPage;
