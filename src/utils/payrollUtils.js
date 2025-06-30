/**
 * Calculates final salary after deductions.
 * @param {number} baseSalary - The employee's base salary.
 * @param {number} leaveDeductions - The amount to deduct for leave.
 * @returns {number} - The calculated final salary.
 */
export function calculateFinalSalary(baseSalary, leaveDeductions) {
  if (typeof baseSalary !== 'number' || typeof leaveDeductions !== 'number') return 0;
  return baseSalary - leaveDeductions;
}

/**
 * Merges employee info and payroll data by employeeId.
 * @param {Array} employees - Array of employee info objects.
 * @param {Array} payrolls - Array of payroll data objects.
 * @returns {Array} - Array of merged payroll info.
 */
export function mergePayrollData(employees, payrolls) {
  return payrolls.map(payroll => {
    const emp = employees.find(e => e.employeeId === payroll.employeeId);
    return {
      employeeId: payroll.employeeId,
      name: emp ? emp.name : 'N/A',
      position: emp ? emp.position : 'N/A',
      department: emp ? emp.department : 'N/A',
      salary: emp ? emp.salary : 0,
      hoursWorked: payroll.hoursWorked,
      leaveDeductions: payroll.leaveDeductions,
      finalSalary: payroll.finalSalary ?? calculateFinalSalary(emp ? emp.salary : 0, payroll.leaveDeductions),
      contact: emp ? emp.contact : 'N/A'
    }
  })};