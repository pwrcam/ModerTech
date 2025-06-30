import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' // This is your login page!
import DashBoardView from '@/views/DashBoard.vue'
import PayRollView from '@/views/PayRollView.vue'
import EmployeesCardView from '@/views/employeescard.vue'
import PerformanceReviewView from '@/views/PerformanceReviewView.vue'
import HrView from '@/views/HrView.vue'
import EmployeeView from '@/views/EmployeeView.vue'



const routes = [
  { path: '/', name: 'Login', component: HomeView },
  { path: '/dashboard', name: 'Dashboard', component: DashBoardView },
  { path: '/payroll', name: 'Payroll', component: PayRollView },
  { path: '/employee', name: 'Employees', component: EmployeesCardView },
  { path: '/performance-reviews', name: 'PerformanceReviews', component: PerformanceReviewView },
  { path: '/hrView', name:'hrview', component: HrView},
  { path: '/employeeview', name:'employee', component:EmployeeView}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
