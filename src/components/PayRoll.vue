<template>
  <div class="payroll-root">
    <h2>Payroll Overview</h2>
    <button class="btn btn-primary mb-3" @click="downloadPDF">Download All as PDF</button>
    <div class="table-responsive">
      <table class="table payroll-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Base Salary</th>
            <th>Leave Days Used</th>
            <th>Leave Deductions</th>
            <th>Final Salary</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(emp, idx) in payrollData" :key="idx">
            <td>{{ emp.name }}</td>
            <td>{{ emp.position }}</td>
            <td>{{ emp.department }}</td>
            <td>R{{ emp.salary }}</td>
            <td>{{ emp.leaveDays }}</td>
            <td>R{{ emp.leaveDeductions }}</td>
            <td>R{{ emp.finalSalary }}</td>
            <td>{{ emp.contact }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import employeeInfo from '../data/employee_info.json'
// Dummy leave days for demo, in real use, fetch from leave data
const leaveDaysUsed = [2, 4, 1, 0, 3, 2]; // Should match employee count

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default {
  name: 'PayRoll',
  data() {
    return {
      payrollData: []
    }
  },
  created() {
    // Merge employee info with payroll calculations
    this.payrollData = employeeInfo.employeeInformation.map((emp, idx) => {
      const salary = Number(emp.salary) || 0;
      const leaveDays = leaveDaysUsed[idx] || 0;
      const leaveDeductions = leaveDays * 150;
      const finalSalary = salary - leaveDeductions;
      return {
        ...emp,
        salary,
        leaveDays,
        leaveDeductions,
        finalSalary
      }
    });
  },
  methods: {
    downloadPDF() {
      const doc = new jsPDF();
      doc.text('Payroll Overview', 14, 16);
      autoTable(doc, {
        startY: 22,
        head: [[
          'Employee Name', 'Position', 'Department', 'Base Salary',
          'Leave Days Used', 'Leave Deductions', 'Final Salary', 'Contact'
        ]],
        body: this.payrollData.map(emp => [
          emp.name,
          emp.position,
          emp.department,
          `R${emp.salary}`,
          emp.leaveDays,
          `R${emp.leaveDeductions}`,
          `R${emp.finalSalary}`,
          emp.contact
        ]),
        styles: { fontSize: 9, cellPadding: 2 },
        headStyles: { fillColor: [21, 101, 192] }
      });
      doc.save('payroll.pdf');
    }
  }
}
</script>

<style scoped>
.payroll-root {
  max-width: 1100px;
  margin: 10px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(21,101,192,0.08);
  padding: 32px 24px;
}
h2 {
  color: #1565c0;
  text-align: center;
  margin-bottom: 24px;
}
.table-responsive {
  width: 100%;
  overflow-x: auto;
}
.payroll-table {
  width: 100%;
  background: #e3f0ff;
  border-radius: 8px;
  overflow: hidden;
}
.payroll-table th {
  background: #1565c0;
  color: #fff;
  text-align: center;
}
.payroll-table td {
  text-align: center;
  vertical-align: middle;
  background: #fff;
}
.btn-primary {
  background: #1565c0;
  border: none;
  border-radius: 4px;
  padding: 8px 18px;
  font-weight: bold;
  letter-spacing: 1px;
}
.btn-primary:hover {
  background: #1976d2;
}
@media (max-width: 700px) {
  .payroll-root {
    padding: 8px 2px;
  }
  .payroll-table th, .payroll-table td {
    font-size: 0.95rem;
    padding: 6px 2px;
  }
}
</style>