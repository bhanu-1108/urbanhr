import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import Badge from '../components/Badge';
import localStorageService from '../utils/localStorageService';

const MyLeaves = () => {
  const currentUser = localStorageService.get('currentUser');
  const leaves = localStorageService.get('leaves') || [];

  // 🔐 Only this employee's leaves
  const myLeaves = leaves.filter(l => l.empId === currentUser?.empId);

  const pending = myLeaves.filter(l => l.status === 'Pending').length;
  const approved = myLeaves.filter(l => l.status === 'Approved').length;
  const rejected = myLeaves.filter(l => l.status === 'Rejected').length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 space-y-8"
    >
      <h1 className="text-3xl font-bold text-cyan-400">My Leaves</h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Pending" value={pending} icon="⏳" color="yellow" />
        <StatCard title="Approved" value={approved} icon="✅" color="green" />
        <StatCard title="Rejected" value={rejected} icon="❌" color="red" />
      </div>

      {/* TABLE */}
      <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl overflow-hidden">
        <div className="p-6 bg-cyan-500/20 border-b border-cyan-500/30">
          <h2 className="text-xl font-bold text-cyan-300">
            Leave History
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-cyan-500/10">
            <tr>
              <th className="px-6 py-3 text-left text-cyan-300">From</th>
              <th className="px-6 py-3 text-left text-cyan-300">To</th>
              <th className="px-6 py-3 text-left text-cyan-300">Type</th>
              <th className="px-6 py-3 text-left text-cyan-300">Reason</th>
              <th className="px-6 py-3 text-left text-cyan-300">Status</th>
            </tr>
          </thead>

          <tbody>
            {myLeaves.length > 0 ? (
              myLeaves.map(leave => (
                <tr key={leave.id} className="border-t border-cyan-500/20">
                  <td className="px-6 py-4 text-gray-300">{leave.from}</td>
                  <td className="px-6 py-4 text-gray-300">{leave.to}</td>
                  <td className="px-6 py-4 text-gray-300">{leave.type}</td>
                  <td className="px-6 py-4 text-gray-300">{leave.reason}</td>
                  <td className="px-6 py-4">
                    <Badge status={leave.status} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-gray-400">
                  No leave records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default MyLeaves;
