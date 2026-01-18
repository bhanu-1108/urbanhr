import React, { useState, useEffect } from 'react';
import { seedData } from './dataSeeder/seedData';
import localStorageService from './utils/localStorageService';
import LandingPage from './pages/Landing';
import RegisterPage from './pages/Register';
import SignInPage from './pages/SignIn';
import DashboardLayout from './layouts/DashboardLayout';
import Footer from "./components/Footer";
function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Seed data on first load
    seedData();

    // Check if user is already authenticated
    const auth = localStorageService.get('isAuthenticated');
    const role = localStorageService.get('userRole');
    
    if (auth) {
      setIsAuthenticated(true);
      setUserRole(role);
      setCurrentView('dashboard');
    }
  }, []);

  const handleLogout = () => {
    localStorageService.remove('currentUser');
    localStorageService.remove('userRole');
    localStorageService.remove('isAuthenticated');
    setIsAuthenticated(false);
    setUserRole(null);
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {currentView === 'landing' && (
        <LandingPage setCurrentView={setCurrentView} />
      )}
      {currentView === 'register' && (
        <RegisterPage setCurrentView={setCurrentView} />
      )}
      {currentView === 'signin' && (
        <SignInPage 
          setCurrentView={setCurrentView}
          setIsAuthenticated={setIsAuthenticated}
          setUserRole={setUserRole}
        />
      )}
      {currentView === 'dashboard' && isAuthenticated && (
        <DashboardLayout 
          userRole={userRole}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;