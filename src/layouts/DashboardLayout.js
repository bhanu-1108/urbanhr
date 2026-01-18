import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import EmployeeDashboard from '../pages/dashboards/EmployeeDashboard';
import HRAdminDashboard from '../pages/dashboards/HRAdminDashboard';

import EmployeeManagementPage from '../pages/EmployeeManagement';
import AttendancePayrollPage from '../pages/AttendancePayroll';
import RecruitmentPage from '../pages/Recruitment';
import TransfersPromotionsPage from '../pages/TransfersPromotions';
import GrievanceRedressalPage from '../pages/GrievanceRedressal';
import PerformancePage from '../pages/Performance';
import AnalyticsPage from '../pages/Analytics';
import EmergencyPage from '../pages/Emergency';
import ProfilePage from '../pages/Profile';

const DashboardLayout = ({ userRole, onLogout }) => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return userRole === 'Employee'
          ? <EmployeeDashboard />
          : <HRAdminDashboard />;

      case 'employees':
        return <EmployeeManagementPage />;

      case 'attendance':
      case 'my-attendance':
        return <AttendancePayrollPage />;

      case 'recruitment':
        return <RecruitmentPage />;

      case 'transfers':
        return <TransfersPromotionsPage />;

      case 'grievances':
      case 'my-grievances':
        return <GrievanceRedressalPage />;

      case 'performance':
        return <PerformancePage />;

      case 'analytics':
        return <AnalyticsPage />;

      case 'emergency':
        return <EmergencyPage />;

      case 'profile':
        return <ProfilePage />;

      default:
        return userRole === 'Employee'
          ? <EmployeeDashboard />
          : <HRAdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar
        isAuthenticated={true}
        userRole={userRole}
        onLogout={onLogout}
      />

      <div className="flex">
        <Sidebar
          userRole={userRole}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto p-6 space-y-10">
          {renderPage()}

          {/* ================= BENEFITS SECTION (GLOBAL) ================= */}
          <div className="bg-gray-800/40 border border-cyan-500/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Why UrbanHR is a Smart Choice
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900/40 p-4 rounded-lg border border-cyan-500/20">
                <h3 className="text-cyan-300 font-semibold mb-2">
                  📊 Transparency
                </h3>
                <p className="text-gray-400 text-sm">
                  Employees get full visibility into attendance, leaves, and grievances.
                </p>
              </div>

              <div className="bg-gray-900/40 p-4 rounded-lg border border-cyan-500/20">
                <h3 className="text-cyan-300 font-semibold mb-2">
                  ⚡ Faster Processes
                </h3>
                <p className="text-gray-400 text-sm">
                  Automated workflows reduce delays and manual paperwork.
                </p>
              </div>

              <div className="bg-gray-900/40 p-4 rounded-lg border border-cyan-500/20">
                <h3 className="text-cyan-300 font-semibold mb-2">
                  🔒 Secure & Private
                </h3>
                <p className="text-gray-400 text-sm">
                  Role-based access ensures employee data remains confidential.
                </p>
              </div>

              <div className="bg-gray-900/40 p-4 rounded-lg border border-cyan-500/20">
                <h3 className="text-cyan-300 font-semibold mb-2">
                  🕒 24/7 Access
                </h3>
                <p className="text-gray-400 text-sm">
                  Access HR services anytime, anywhere without visiting offices.
                </p>
              </div>

              <div className="bg-gray-900/40 p-4 rounded-lg border border-cyan-500/20">
                <h3 className="text-cyan-300 font-semibold mb-2">
                  🧠 Smart Insights
                </h3>
                <p className="text-gray-400 text-sm">
                  Data-driven insights help improve work-life balance and productivity.
                </p>
              </div>
            </div>
          </div>

          {/* ================= FOOTER (GLOBAL) ================= */}
          <footer className="pt-8 border-t border-cyan-500/20 text-center text-gray-400 text-sm">
            <p className="mb-2">
              © 2026 <span className="text-cyan-400 font-semibold">UrbanHR</span> – Smart City HRMS
            </p>
            <p>
              Support: <span className="text-cyan-300">support@urbanhr.gov</span> |
              Helpline: <span className="text-cyan-300">1800-URBAN-HR</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
