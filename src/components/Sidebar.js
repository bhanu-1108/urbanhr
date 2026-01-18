import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ userRole, currentPage, setCurrentPage }) => {
 const employeeMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'my-attendance', label: 'My Attendance', icon: '📅' },
  { id: 'my-leaves', label: 'My Leaves', icon: '🏖️' },
  { id: 'my-grievances', label: 'My Grievances', icon: '📝' },
  { id: 'profile', label: 'My Profile', icon: '👤' } // ✅ FIXED
];


  const hrAdminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'employees', label: 'Employee Management', icon: '👥' },
    { id: 'attendance', label: 'Attendance & Payroll', icon: '💰' },
    { id: 'recruitment', label: 'Recruitment', icon: '🎯' },
    { id: 'transfers', label: 'Transfers & Promotions', icon: '🔄' },
    { id: 'grievances', label: 'Grievance Redressal', icon: '📝' },
    { id: 'performance', label: 'Performance & KPIs', icon: '⭐' },
    { id: 'analytics', label: 'Analytics & Reports', icon: '📈' },
    { id: 'emergency', label: 'Emergency Management', icon: '🚨' },
    { id: 'profile', label: 'My Profile', icon: '👤' } // ✅ changed
  ];

  const menuItems = userRole === 'Employee' ? employeeMenuItems : hrAdminMenuItems;

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 bg-gray-900/80 backdrop-blur-lg border-r border-cyan-500/30 min-h-screen"
    >
      <div className="p-4">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.02, x: 5 }}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition ${
              currentPage === item.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-gray-400 hover:bg-gray-800/50'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </motion.button>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;