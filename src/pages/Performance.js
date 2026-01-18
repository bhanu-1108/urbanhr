import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/Badge';
import localStorageService from '../utils/localStorageService';

const PerformancePage = () => {
  const performance = localStorageService.get('performance') || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Performance & KPIs</h1>
      
      <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-cyan-500/20">
            <tr>
              <th className="px-6 py-3 text-left text-cyan-300">Employee ID</th>
              <th className="px-6 py-3 text-left text-cyan-300">Name</th>
              <th className="px-6 py-3 text-left text-cyan-300">Period</th>
              <th className="px-6 py-3 text-left text-cyan-300">Rating</th>
              <th className="px-6 py-3 text-left text-cyan-300">KPI</th>
              <th className="px-6 py-3 text-left text-cyan-300">Reviewer</th>
              <th className="px-6 py-3 text-left text-cyan-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {performance.map(perf => (
              <tr key={perf.id} className="border-t border-cyan-500/20">
                <td className="px-6 py-4 text-gray-300">{perf.empId}</td>
                <td className="px-6 py-4 text-white font-semibold">{perf.name}</td>
                <td className="px-6 py-4 text-gray-300">{perf.period}</td>
                <td className="px-6 py-4 text-cyan-400 font-bold">{perf.rating}/5.0</td>
                <td className="px-6 py-4 text-gray-300">{perf.kpi}</td>
                <td className="px-6 py-4 text-gray-300">{perf.reviewer}</td>
                <td className="px-6 py-4"><Badge status={perf.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PerformancePage;