import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import Badge from '../components/Badge';
import localStorageService from '../utils/localStorageService';

const RecruitmentPage = () => {
  const recruitment = localStorageService.get('recruitment') || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Recruitment & Onboarding</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Active Openings" value="5" icon="🎯" color="cyan" />
        <StatCard title="Total Applicants" value="88" icon="👥" color="blue" />
        <StatCard title="Interviews Scheduled" value="12" icon="📅" color="yellow" />
      </div>

      <div className="grid gap-6">
        {recruitment.map(job => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400">{job.position}</h3>
                <p className="text-gray-400">{job.department}</p>
              </div>
              <Badge status={job.status} />
            </div>
            <div className="grid grid-cols-3 gap-4 text-gray-300">
              <div>
                <p className="text-gray-400 text-sm">Openings</p>
                <p className="text-white font-semibold">{job.openings}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Applicants</p>
                <p className="text-white font-semibold">{job.applicants}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Posted</p>
                <p className="text-white font-semibold">{job.postedDate}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecruitmentPage;
