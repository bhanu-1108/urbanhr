import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../../components/StatCard';
import Badge from '../../components/Badge';
import localStorageService from '../../utils/localStorageService';

const HRAdminDashboard = () => {
  const metrics = localStorageService.get('metrics') || {};
  const leaves = localStorageService.get('leaves') || [];
  const grievances = localStorageService.get('grievances') || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">HR Dashboard</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Employees" value={metrics.totalEmployees} icon="👥" color="cyan" />
        <StatCard title="Present Today" value={metrics.presentToday} icon="✅" color="green" />
        <StatCard title="On Leave" value={metrics.onLeave} icon="🏖️" color="yellow" />
        <StatCard title="Pending Approvals" value={metrics.pendingApprovals} icon="⏳" color="orange" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Pending Leave Requests</h2>
          <div className="space-y-3">
            {leaves.filter(l => l.status === 'Pending').slice(0, 5).map(leave => (
              <div key={leave.id} className="flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">{leave.name}</p>
                  <p className="text-gray-400 text-sm">{leave.from} to {leave.to}</p>
                </div>
                <Badge status={leave.status} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Open Grievances</h2>
          <div className="space-y-3">
            {grievances.filter(g => g.status === 'Open').slice(0, 5).map(grievance => (
              <div key={grievance.id} className="flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">{grievance.subject}</p>
                  <p className="text-gray-400 text-sm">{grievance.name}</p>
                </div>
                <Badge status={grievance.priority} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <StatCard title="Active Recruitment" value={metrics.activeRecruitment} icon="🎯" color="blue" />
        <StatCard title="Open Grievances" value={metrics.openGrievances} icon="📢" color="red" />
        <StatCard title="Absent Today" value={metrics.absentToday} icon="❌" color="red" />
      </div>
    </motion.div>
  );
};

export default HRAdminDashboard;