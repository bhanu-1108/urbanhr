import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon, color = 'cyan' }) => {
  const colorClasses = {
    cyan: 'border-cyan-500/30 text-cyan-400',
    green: 'border-green-500/30 text-green-400',
    yellow: 'border-yellow-500/30 text-yellow-400',
    orange: 'border-orange-500/30 text-orange-400',
    red: 'border-red-500/30 text-red-400',
    blue: 'border-blue-500/30 text-blue-400'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className={`bg-gray-800/50 backdrop-blur-lg border ${colorClasses[color]} rounded-xl p-6 transform-gpu perspective-1000`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm mb-2">{title}</p>
          <p className={`text-3xl font-bold ${colorClasses[color].split(' ')[1]}`}>{value}</p>
        </div>
        <span className="text-4xl">{icon}</span>
      </div>
    </motion.div>
  );
};

export default StatCard;