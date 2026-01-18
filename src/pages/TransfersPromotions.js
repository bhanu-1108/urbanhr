import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/Badge';
import localStorageService from '../utils/localStorageService';

const TransfersPromotionsPage = () => {
  const transfers = localStorageService.get('transfers') || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Transfers & Promotions</h1>
      
      <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-cyan-500/20">
            <tr>
              <th className="px-6 py-3 text-left text-cyan-300">Employee ID</th>
              <th className="px-6 py-3 text-left text-cyan-300">Name</th>
              <th className="px-6 py-3 text-left text-cyan-300">Type</th>
              <th className="px-6 py-3 text-left text-cyan-300">From</th>
              <th className="px-6 py-3 text-left text-cyan-300">To</th>
              <th className="px-6 py-3 text-left text-cyan-300">Status</th>
              <th className="px-6 py-3 text-left text-cyan-300">Effective Date</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map(transfer => (
              <tr key={transfer.id} className="border-t border-cyan-500/20">
                <td className="px-6 py-4 text-gray-300">{transfer.empId}</td>
                <td className="px-6 py-4 text-white font-semibold">{transfer.name}</td>
                <td className="px-6 py-4 text-gray-300">{transfer.type}</td>
                <td className="px-6 py-4 text-gray-300">{transfer.from}</td>
                <td className="px-6 py-4 text-cyan-400">{transfer.to}</td>
                <td className="px-6 py-4"><Badge status={transfer.status} /></td>
                <td className="px-6 py-4 text-gray-300">{transfer.effectiveDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TransfersPromotionsPage;