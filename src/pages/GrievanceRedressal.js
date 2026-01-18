import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import Badge from '../components/Badge';
import localStorageService from '../utils/localStorageService';

const GrievanceRedressalPage = () => {
  // 🔐 Logged-in user & role
  const currentUser = localStorageService.get('currentUser');
  const userRole = localStorageService.get('userRole');

  // 📦 All grievances
  const allGrievances = localStorageService.get('grievances') || [];

  // 🧠 ROLE-BASED FILTERING
  const grievances =
    userRole === 'Admin' || userRole === 'HR'
      ? allGrievances
      : allGrievances.filter(g => g.empId === currentUser?.empId);

  const [showForm, setShowForm] = useState(false);

  // 📊 Stats (role-based automatically)
  const openCount = grievances.filter(g => g.status === 'Open').length;
  const progressCount = grievances.filter(g => g.status === 'In Progress').length;
  const resolvedCount = grievances.filter(g => g.status === 'Resolved').length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          Grievance Redressal
        </h1>

        {/* Only employees can raise grievance */}
        {userRole === 'Employee' && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition"
          >
            {showForm ? 'Close Form' : 'Raise Grievance'}
          </button>
        )}
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Open Grievances" value={openCount} icon="📢" color="orange" />
        <StatCard title="In Progress" value={progressCount} icon="⚙️" color="yellow" />
        <StatCard title="Resolved" value={resolvedCount} icon="✅" color="green" />
      </div>

      {/* RAISE GRIEVANCE FORM (EMPLOYEE ONLY) */}
      {showForm && userRole === 'Employee' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6 mb-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">
            Raise New Grievance
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Category</label>
              <select className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white">
                <option>Payroll</option>
                <option>Workplace</option>
                <option>Leave</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white"
                placeholder="Brief subject of grievance"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white"
                placeholder="Detailed description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg"
            >
              Submit Grievance
            </button>
          </form>
        </motion.div>
      )}

      {/* TABLE */}
      <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-cyan-500/20">
            <tr>
              <th className="px-6 py-3 text-left text-cyan-300">ID</th>

              {(userRole === 'Admin' || userRole === 'HR') && (
                <th className="px-6 py-3 text-left text-cyan-300">
                  Employee
                </th>
              )}

              <th className="px-6 py-3 text-left text-cyan-300">Category</th>
              <th className="px-6 py-3 text-left text-cyan-300">Subject</th>
              <th className="px-6 py-3 text-left text-cyan-300">Priority</th>
              <th className="px-6 py-3 text-left text-cyan-300">Status</th>
              <th className="px-6 py-3 text-left text-cyan-300">SLA</th>
            </tr>
          </thead>

          <tbody>
            {grievances.length > 0 ? (
              grievances.map(grv => (
                <tr key={grv.id} className="border-t border-cyan-500/20">
                  <td className="px-6 py-4 text-gray-300">#{grv.id}</td>

                  {(userRole === 'Admin' || userRole === 'HR') && (
                    <td className="px-6 py-4 text-white font-semibold">
                      {grv.name}
                    </td>
                  )}

                  <td className="px-6 py-4 text-gray-300">{grv.category}</td>
                  <td className="px-6 py-4 text-gray-300">{grv.subject}</td>
                  <td className="px-6 py-4"><Badge status={grv.priority} /></td>
                  <td className="px-6 py-4"><Badge status={grv.status} /></td>
                  <td className="px-6 py-4 text-gray-300">{grv.sla}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-8 text-center text-gray-400">
                  No grievances found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default GrievanceRedressalPage;
