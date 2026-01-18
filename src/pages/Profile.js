import React from 'react';
import { motion } from 'framer-motion';
import localStorageService from '../utils/localStorageService';

const ProfilePage = () => {
  const currentUser = localStorageService.get('currentUser');

  if (!currentUser) {
    return (
      <div className="p-6 text-red-400">
        No user data found. Please login again.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        My Profile
      </h1>

      {/* PROFILE CARD */}
      <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-6 mb-6">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400">
            {currentUser.name?.charAt(0).toUpperCase()}
          </div>

          {/* Basic Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              {currentUser.name}
            </h2>
            <p className="text-gray-400">
              Employee ID: <span className="text-cyan-400">{currentUser.empId}</span>
            </p>
            <p className="text-gray-400 capitalize">
              Role: {currentUser.role}
            </p>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Details */}
          <div className="bg-gray-900/40 rounded-lg p-4 border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">
              Personal Details
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Name:</strong> {currentUser.name}</p>
              <p><strong>Email:</strong> {currentUser.email}</p>
              <p><strong>Department:</strong> {currentUser.department || 'General'}</p>
            </div>
          </div>

          {/* Employment Details */}
          <div className="bg-gray-900/40 rounded-lg p-4 border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">
              Employment Details
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Employee ID:</strong> {currentUser.empId}</p>
              <p><strong>Status:</strong> Active</p>
              <p><strong>Join Date:</strong> {currentUser.joinDate || '2026-01-01'}</p>
            </div>
          </div>

          {/* System Details */}
          <div className="bg-gray-900/40 rounded-lg p-4 border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">
              System Information
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Account Type:</strong> {currentUser.role}</p>
              <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>
            </div>
          </div>

          {/* Leave Info */}
          <div className="bg-gray-900/40 rounded-lg p-4 border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">
              Leave Information
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Leave Balance:</strong> 18 days</p>
              <p><strong>Pending Requests:</strong> 0</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
