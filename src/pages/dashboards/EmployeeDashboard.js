import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../../components/StatCard';
import Badge from '../../components/Badge';
import localStorageService from '../../utils/localStorageService';

const EmployeeDashboard = () => {
  const currentUser = localStorageService.get('currentUser');
  const leaves = localStorageService.get('leaves') || [];
  const attendance = localStorageService.get('attendance') || [];
  const grievances = localStorageService.get('grievances') || [];

  const myLeaves = leaves.filter(l => l.empId === currentUser?.empId);
  const myAttendance = attendance.filter(a => a.empId === currentUser?.empId);
  const myGrievances = grievances.filter(g => g.empId === currentUser?.empId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 space-y-10"
    >
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Employee Dashboard
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Leave Balance" value="18 days" icon="🏖️" color="cyan" />
        <StatCard title="Present This Month" value="15 days" icon="✅" color="green" />
        <StatCard
          title="Pending Leaves"
          value={myLeaves.filter(l => l.status === 'Pending').length}
          icon="⏳"
          color="yellow"
        />
        <StatCard
          title="Open Grievances"
          value={myGrievances.filter(g => g.status === 'Open').length}
          icon="📝"
          color="orange"
        />
      </div>

      {/* PROFILE + ATTENDANCE */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">
            Profile Summary
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong>Name:</strong> {currentUser?.name}</p>
            <p><strong>Employee ID:</strong> {currentUser?.empId}</p>
            <p><strong>Department:</strong> {currentUser?.department || 'General'}</p>
            <p><strong>Email:</strong> {currentUser?.email}</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">
            Recent Attendance
          </h2>
          <div className="space-y-2">
            {myAttendance.slice(0, 3).map(att => (
              <div
                key={att.id}
                className="flex justify-between items-center text-gray-300"
              >
                <span>{att.date}</span>
                <Badge status={att.status} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

     
    </motion.div>
  );
};

export default EmployeeDashboard;
