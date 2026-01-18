import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import localStorageService from '../utils/localStorageService';

const SignInPage = ({ setCurrentView, setIsAuthenticated, setUserRole }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Employee'
  });
  const [message, setMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = localStorageService.get('users') || [];
    
    const user = users.find(u => 
      u.email === formData.email && 
      u.password === formData.password && 
      u.role === formData.role
    );

    if (user) {
      localStorageService.set('currentUser', user);
      localStorageService.set('userRole', user.role);
      localStorageService.set('isAuthenticated', true);
      setIsAuthenticated(true);
      setUserRole(user.role);
      setCurrentView('dashboard');
    } else {
      setMessage('Invalid credentials or role mismatch!');
    }
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Sign In</h2>
          
          <form onSubmit={handleSignIn} className="space-y-4">
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
              <p className="text-center text-red-400">{message}</p>
            )}
            
            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-center text-gray-400 mt-4">
            Don't have an account?{' '}
            <button onClick={() => setCurrentView('register')} className="text-cyan-400 hover:underline">
              Register
            </button>
          </p>

          <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <p className="text-cyan-300 text-sm font-semibold mb-2">Demo Credentials:</p>
            <p className="text-gray-300 text-xs">Admin: admin@urbanhr.gov / admin123</p>
            <p className="text-gray-300 text-xs">HR: hr@urbanhr.gov / hr123</p>
            <p className="text-gray-300 text-xs">Employee: employee@urbanhr.gov / emp123</p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;