import localStorageService from '../utils/localStorageService';

export const seedData = () => {
  // Check if data already seeded
  if (localStorageService.get('dataSeeded')) {
    return;
  }

  // Seed Users
  const users = [
    { 
      id: 1, 
      name: 'John Admin', 
      email: 'admin@urbanhr.gov', 
      password: 'admin123', 
      role: 'Admin', 
      department: 'IT', 
      empId: 'EMP001' 
    },
    { 
      id: 2, 
      name: 'Sarah HR', 
      email: 'hr@urbanhr.gov', 
      password: 'hr123', 
      role: 'HR', 
      department: 'Human Resources', 
      empId: 'EMP002' 
    },
    { 
      id: 3, 
      name: 'Mike Employee', 
      email: 'employee@urbanhr.gov', 
      password: 'emp123', 
      role: 'Employee', 
      department: 'Engineering', 
      empId: 'EMP003' 
    },
    { 
      id: 4, 
      name: 'Lisa Manager', 
      email: 'lisa@urbanhr.gov', 
      password: 'pass123', 
      role: 'Employee', 
      department: 'Finance', 
      empId: 'EMP004' 
    },
    { 
      id: 5, 
      name: 'David Tech', 
      email: 'david@urbanhr.gov', 
      password: 'pass123', 
      role: 'Employee', 
      department: 'IT', 
      empId: 'EMP005' 
    }
  ];

  // Seed Employees
  const employees = [
    { 
      id: 1, 
      empId: 'EMP001', 
      name: 'John Admin', 
      department: 'IT', 
      position: 'System Admin', 
      email: 'admin@urbanhr.gov', 
      phone: '9876543210', 
      joinDate: '2020-01-15', 
      salary: 75000, 
      status: 'Active' 
    },
    { 
      id: 2, 
      empId: 'EMP002', 
      name: 'Sarah HR', 
      department: 'Human Resources', 
      position: 'HR Manager', 
      email: 'hr@urbanhr.gov', 
      phone: '9876543211', 
      joinDate: '2019-06-20', 
      salary: 65000, 
      status: 'Active' 
    },
    { 
      id: 3, 
      empId: 'EMP003', 
      name: 'Mike Employee', 
      department: 'Engineering', 
      position: 'Senior Engineer', 
      email: 'employee@urbanhr.gov', 
      phone: '9876543212', 
      joinDate: '2021-03-10', 
      salary: 55000, 
      status: 'Active' 
    },
    { 
      id: 4, 
      empId: 'EMP004', 
      name: 'Lisa Manager', 
      department: 'Finance', 
      position: 'Finance Manager', 
      email: 'lisa@urbanhr.gov', 
      phone: '9876543213', 
      joinDate: '2018-11-05', 
      salary: 70000, 
      status: 'Active' 
    },
    { 
      id: 5, 
      empId: 'EMP005', 
      name: 'David Tech', 
      department: 'IT', 
      position: 'Developer', 
      email: 'david@urbanhr.gov', 
      phone: '9876543214', 
      joinDate: '2022-02-28', 
      salary: 50000, 
      status: 'Active' 
    }
  ];

  // Seed Attendance
  const attendance = [
    { 
      id: 1, 
      empId: 'EMP001', 
      name: 'John Admin', 
      date: '2026-01-18', 
      status: 'Present', 
      checkIn: '09:00', 
      checkOut: '18:00' 
    },
    { 
      id: 2, 
      empId: 'EMP002', 
      name: 'Sarah HR', 
      date: '2026-01-18', 
      status: 'Present', 
      checkIn: '08:45', 
      checkOut: '17:30' 
    },
    { 
      id: 3, 
      empId: 'EMP003', 
      name: 'Mike Employee', 
      date: '2026-01-18', 
      status: 'Present', 
      checkIn: '09:15', 
      checkOut: '18:15' 
    },
    { 
      id: 4, 
      empId: 'EMP004', 
      name: 'Lisa Manager', 
      date: '2026-01-18', 
      status: 'Absent', 
      checkIn: '-', 
      checkOut: '-' 
    },
    { 
      id: 5, 
      empId: 'EMP005', 
      name: 'David Tech', 
      date: '2026-01-18', 
      status: 'Present', 
      checkIn: '09:00', 
      checkOut: '18:00' 
    }
  ];

  // Seed Leaves
  const leaves = [
    { 
      id: 1, 
      empId: 'EMP003', 
      name: 'Mike Employee', 
      type: 'Casual Leave', 
      from: '2026-01-20', 
      to: '2026-01-22', 
      days: 3, 
      status: 'Pending', 
      reason: 'Personal work' 
    },
    { 
      id: 2, 
      empId: 'EMP004', 
      name: 'Lisa Manager', 
      type: 'Sick Leave', 
      from: '2026-01-18', 
      to: '2026-01-18', 
      days: 1, 
      status: 'Approved', 
      reason: 'Fever' 
    },
    { 
      id: 3, 
      empId: 'EMP005', 
      name: 'David Tech', 
      type: 'Earned Leave', 
      from: '2026-02-01', 
      to: '2026-02-05', 
      days: 5, 
      status: 'Pending', 
      reason: 'Vacation' 
    }
  ];

  // Seed Grievances
  const grievances = [
    { 
      id: 1, 
      empId: 'EMP003', 
      name: 'Mike Employee', 
      category: 'Payroll', 
      subject: 'Incorrect salary calculation', 
      status: 'Open', 
      priority: 'High', 
      date: '2026-01-15', 
      sla: '2 days' 
    },
    { 
      id: 2, 
      empId: 'EMP005', 
      name: 'David Tech', 
      category: 'Workplace', 
      subject: 'AC not working in office', 
      status: 'In Progress', 
      priority: 'Medium', 
      date: '2026-01-10', 
      sla: '5 days' 
    },
    { 
      id: 3, 
      empId: 'EMP004', 
      name: 'Lisa Manager', 
      category: 'Leave', 
      subject: 'Leave not credited', 
      status: 'Resolved', 
      priority: 'Low', 
      date: '2026-01-05', 
      sla: 'Completed' 
    }
  ];

  // Seed Recruitment
  const recruitment = [
    { 
      id: 1, 
      position: 'Senior Developer', 
      department: 'IT', 
      openings: 3, 
      applicants: 45, 
      status: 'Active', 
      postedDate: '2026-01-10' 
    },
    { 
      id: 2, 
      position: 'HR Executive', 
      department: 'HR', 
      openings: 2, 
      applicants: 28, 
      status: 'Active', 
      postedDate: '2026-01-08' 
    },
    { 
      id: 3, 
      position: 'Finance Analyst', 
      department: 'Finance', 
      openings: 1, 
      applicants: 15, 
      status: 'Closed', 
      postedDate: '2025-12-20' 
    }
  ];

  // Seed Transfers & Promotions
  const transfers = [
    { 
      id: 1, 
      empId: 'EMP003', 
      name: 'Mike Employee', 
      type: 'Transfer', 
      from: 'Engineering', 
      to: 'IT', 
      status: 'Approved', 
      date: '2026-01-10', 
      effectiveDate: '2026-02-01' 
    },
    { 
      id: 2, 
      empId: 'EMP005', 
      name: 'David Tech', 
      type: 'Promotion', 
      from: 'Developer', 
      to: 'Senior Developer', 
      status: 'Requested', 
      date: '2026-01-15', 
      effectiveDate: '-' 
    }
  ];

  // Seed Performance
  const performance = [
    { 
      id: 1, 
      empId: 'EMP001', 
      name: 'John Admin', 
      period: 'Q4 2025', 
      rating: 4.5, 
      kpi: 'Excellent', 
      reviewer: 'Sarah HR', 
      status: 'Completed' 
    },
    { 
      id: 2, 
      empId: 'EMP003', 
      name: 'Mike Employee', 
      period: 'Q4 2025', 
      rating: 4.2, 
      kpi: 'Good', 
      reviewer: 'Lisa Manager', 
      status: 'Completed' 
    },
    { 
      id: 3, 
      empId: 'EMP005', 
      name: 'David Tech', 
      period: 'Q4 2025', 
      rating: 4.0, 
      kpi: 'Good', 
      reviewer: 'John Admin', 
      status: 'Pending' 
    }
  ];

  // Seed Dashboard Metrics
  const metrics = {
    totalEmployees: 125,
    presentToday: 98,
    absentToday: 27,
    onLeave: 15,
    pendingLeaves: 8,
    openGrievances: 12,
    activeRecruitment: 5,
    pendingApprovals: 18
  };

  // Save all data to localStorage
  localStorageService.set('users', users);
  localStorageService.set('employees', employees);
  localStorageService.set('attendance', attendance);
  localStorageService.set('leaves', leaves);
  localStorageService.set('grievances', grievances);
  localStorageService.set('recruitment', recruitment);
  localStorageService.set('transfers', transfers);
  localStorageService.set('performance', performance);
  localStorageService.set('metrics', metrics);
  localStorageService.set('dataSeeded', true);

  console.log('✅ Data seeded successfully!');
};