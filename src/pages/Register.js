import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import localStorageService from '../utils/localStorageService';

const RegisterPage = ({ setCurrentView }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Employee'
  });
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const users = localStorageService.get('users') || [];
    
    if (users.find(u => u.email === formData.email)) {
      setMessage('Email already exists!');
      return;
    }
    const generateEmpId = () => {
  const timestamp = Date.now().toString().slice(-5);
  return `EMP${timestamp}`;
};
const empId = generateEmpId();
    const newUser = {
      id: users.length + 1,
  empId,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      department: 'General'
    };

    users.push(newUser);
    localStorageService.set('users', users);
    setMessage('Registration successful! Redirecting to sign in...');
    
    setTimeout(() => {
      setCurrentView('signin');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      <Navbar isAuthenticated={false} />
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-8 max-w-md w-full"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Register</h2>
          
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Role</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Employee">Employee</option>
                <option value="HR">HR</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            {message && (
              <p className={`text-center ${message.includes('successful') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
            
            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition"
            >
              Register
            </button>
          </form>
          
          <p className="text-center text-gray-400 mt-4">
            Already have an account?{' '}
            <button onClick={() => setCurrentView('signin')} className="text-cyan-400 hover:underline">
              Sign In
            </button>
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;