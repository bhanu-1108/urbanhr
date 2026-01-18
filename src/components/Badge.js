import React from 'react';

const Badge = ({ status }) => {
  const colors = {
    Active: 'bg-green-500/20 text-green-300 border-green-500/30',
    Pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    Approved: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    Rejected: 'bg-red-500/20 text-red-300 border-red-500/30',
    Open: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    Resolved: 'bg-green-500/20 text-green-300 border-green-500/30',
    'In Progress': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    Present: 'bg-green-500/20 text-green-300 border-green-500/30',
    Absent: 'bg-red-500/20 text-red-300 border-red-500/30',
    High: 'bg-red-500/20 text-red-300 border-red-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    Low: 'bg-green-500/20 text-green-300 border-green-500/30',
    Closed: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    Completed: 'bg-green-500/20 text-green-300 border-green-500/30',
    Requested: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs border ${colors[status] || colors.Active}`}>
      {status}
    </span>
  );
};

export default Badge;


