import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import localStorageService from '../utils/localStorageService';

const EmployeeManagementPage = () => {
  const [employees] = useState(localStorageService.get('employees') || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.empId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Employee Management</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, ID, or department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-cyan-500/20">
            <tr>
              <th className="px-6 py-3 text-left text-cyan-300">Employee ID</th>
              <th className="px-6 py-3 text-left text-cyan-300">Name</th>
              <th className="px-6 py-3 text-left text-cyan-300">Department</th>
              <th className="px-6 py-3 text-left text-cyan-300">Position</th>
              <th className="px-6 py-3 text-left text-cyan-300">Status</th>
              <th className="px-6 py-3 text-left text-cyan-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <motion.tr
                key={emp.id}
                whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                className="border-t border-cyan-500/20"
              >
                <td className="px-6 py-4 text-gray-300">{emp.empId}</td>
                <td className="px-6 py-4 text-white font-semibold">{emp.name}</td>
                <td className="px-6 py-4 text-gray-300">{emp.department}</td>
                <td className="px-6 py-4 text-gray-300">{emp.position}</td>
                <td className="px-6 py-4"><Badge status={emp.status} /></td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedEmployee(emp)}
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    View Details
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={!!selectedEmployee} onClose={() => setSelectedEmployee(null)} title="Employee Details">
        {selectedEmployee && (
          <div className="space-y-4 text-gray-300">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Employee ID</p>
                <p className="text-white font-semibold">{selectedEmployee.empId}</p>
              </div>
              <div>
                <p className="text-gray-400">Name</p>
                <p className="text-white font-semibold">{selectedEmployee.name}</p>
              </div>
              <div>
                <p className="text-gray-400">Department</p>
                <p className="text-white font-semibold">{selectedEmployee.department}</p>
              </div>
              <div>
                <p className="text-gray-400">Position</p>
                <p className="text-white font-semibold">{selectedEmployee.position}</p>
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white font-semibold">{selectedEmployee.email}</p>
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <p className="text-white font-semibold">{selectedEmployee.phone}</p>
              </div>
              <div>
                <p className="text-gray-400">Join Date</p>
                <p className="text-white font-semibold">{selectedEmployee.joinDate}</p>
              </div>
              <div>
                <p className="text-gray-400">Salary</p>
                <p className="text-white font-semibold">₹{selectedEmployee.salary.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default EmployeeManagementPage;