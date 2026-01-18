import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import Badge from '../components/Badge';
import localStorageService from '../utils/localStorageService';

const AttendancePayrollPage = () => {
  // 🔐 Logged-in user & role
  const currentUser = localStorageService.get('currentUser');
  const userRole = localStorageService.get('userRole');

  // 📦 All attendance data
  const allAttendance = localStorageService.get('attendance') || [];

  // 🧠 ROLE-BASED FILTERING
  const attendance =
    userRole === 'Admin' || userRole === 'HR'
      ? allAttendance
      : allAttendance.filter(att => att.empId === currentUser?.empId);

  // 📊 Stats (can be role-based later)
  const presentCount = attendance.filter(a => a.status === 'Present').length;
  const absentCount = attendance.filter(a => a.status === 'Absent').length;
  const leaveCount = attendance.filter(a => a.status === 'On Leave').length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        Attendance & Payroll
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Present" value={presentCount} icon="✅" color="green" />
        <StatCard title="Absent" value={absentCount} icon="❌" color="red" />
        <StatCard title="On Leave" value={leaveCount} icon="🏖️" color="yellow" />
      </div>

      {/* TABLE */}
      <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl overflow-hidden">
        <div className="p-6 bg-cyan-500/20 border-b border-cyan-500/30">
          <h2 className="text-xl font-bold text-cyan-300">
            {userRole === 'Employee' ? 'My Attendance' : "Today's Attendance"}
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-cyan-500/10">
            <tr>
              {(userRole === 'Admin' || userRole === 'HR') && (
                <th className="px-6 py-3 text-left text-cyan-300">
                  Employee ID
                </th>
              )}
              {(userRole === 'Admin' || userRole === 'HR') && (
                <th className="px-6 py-3 text-left text-cyan-300">
                  Name
                </th>
              )}
              <th className="px-6 py-3 text-left text-cyan-300">Date</th>
              <th className="px-6 py-3 text-left text-cyan-300">Status</th>
              <th className="px-6 py-3 text-left text-cyan-300">Check In</th>
              <th className="px-6 py-3 text-left text-cyan-300">Check Out</th>
            </tr>
          </thead>

          <tbody>
            {attendance.length > 0 ? (
              attendance.map(att => (
                <tr key={att.id} className="border-t border-cyan-500/20">
                  {(userRole === 'Admin' || userRole === 'HR') && (
                    <td className="px-6 py-4 text-gray-300">
                      {att.empId}
                    </td>
                  )}
                  {(userRole === 'Admin' || userRole === 'HR') && (
                    <td className="px-6 py-4 text-white font-semibold">
                      {att.name}
                    </td>
                  )}
                  <td className="px-6 py-4 text-gray-300">{att.date}</td>
                  <td className="px-6 py-4">
                    <Badge status={att.status} />
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    {att.checkIn || '-'}
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    {att.checkOut || '-'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-8 text-center text-gray-400"
                >
                  No attendance records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AttendancePayrollPage;
