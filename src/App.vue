<template>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Media queries for all devices  */
@media (max-width: 600px) {
  #app {
    font-size: 14px;
  }
}
/* Responsive container for router-view */
#app, .router-view {
  max-width: 100vw;
  box-sizing: border-box;
  padding: 0 16px;
}

/* Responsive nav layout */
@media (max-width: 900px) {
  nav {
    padding: 16px;
  }
  nav a {
    display: block;
    margin: 8px 0;
  }
}

/* Further reduce padding and font size on very small screens */
@media (max-width: 400px) {
  #app {
    font-size: 12px;
    padding: 0 4px;
  }
  nav {
    padding: 8px;
  }
}

/* Dashboard responsiveness */
.dashboard-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

@media (max-width: 900px) {
  .dashboard-container {
    flex-direction: column;
    padding: 12px;
    gap: 12px;
  }
}

/* Payroll responsiveness */
.payroll-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  overflow-x: auto;
}

.payroll-table {
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
}

.payroll-table th,
.payroll-table td {
  padding: 8px 12px;
  text-align: left;
}

@media (max-width: 700px) {
  .payroll-container {
    padding: 8px;
  }
  .payroll-table {
    min-width: 400px;
    font-size: 14px;
  }
}

/* EmployeesCard responsiveness */
.employees-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}

.employee-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 20px;
  min-width: 260px;
  max-width: 320px;
  flex: 1 1 260px;
  margin: 8px;
  box-sizing: border-box;
}

@media (max-width: 900px) {
  .employees-card-container {
    padding: 12px;
    gap: 12px;
  }
  .employee-card {
    min-width: 180px;
    max-width: 100%;
    padding: 12px;
  }
}

@media (max-width: 600px) {
  .employees-card-container {
    flex-direction: column;
    align-items: stretch;
    padding: 8px;
    gap: 8px;
  }
  .employee-card {
    min-width: 100%;
    margin: 0 0 8px 0;
  }
}

</style>
