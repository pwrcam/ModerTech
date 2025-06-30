<template>
    <div class="dashboard">
      <div class="dashboard-stats">
        <h2>Business Dashboard</h2>
        <div class="stats-container">
          <div class="stat-row">
            <div class="stat-card">
              <h3>Total Employees</h3>
              <P>{{ totalEmployees }}</P>
            <div class="stat-cardb">
              <p><!-- Inside your stat-cardb or any blank card -->
<h3>Attendance (2025-07-27)</h3>
<div class="attendance-bar">
  <div class="present-bar" :style="{ width: presentPercent70 + '%' }"></div>
  <div class="absent-bar" :style="{ width: absentPercent30 + '%' }"></div>
</div>
<div class="attendance-names">
  <div>
    <strong>Present: 70%</strong>
    <span v-for="name in presentNames" :key="name">{{ name }}</span>
  </div>
  <div>
    <strong>Absent: 30%</strong>
    <span v-for="name in absentNames" :key="name">{{ name }}</span>
  </div>
</div></p>
            </div>
            </div>
          </div>
          <div class="stat-row">
            <div class="stat-card">
              <h3>New Clients</h3>
              <p>{{ newClients }}</p>
            </div>
            <div class="stat-card">
              <h3>Total Revenue</h3>
              <p>{{ totalRevenue }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-stats">
        <h2>HR Dashboard</h2>
        <div class="stats-container">
          <div class="stat-row">
            <div class="stat-card">
              <h3>On Leave</h3>
              <p>{{ OnLeave }}</p>
              <div class="stat-cardb">
              <h3>Signed In</h3>
             <P>{{ Signedin }}</P>
            </div>
            </div>
          </div>
          <div class="stat-row">
            <div class="stat-card">
              <h3>Open Positions</h3>
              <p>{{ openPositions }}</p>
            </div>
            <div class="stat-card">
              <h3>Interviews Today</h3>
              <p>{{ interviewsToday }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        totalEmployees: 10,
        activeProjects: 8,
        newClients: 5,
        totalRevenue: "R499,300",
        OnLeave: 1,
        Signedin: 9,
        openPositions: 2,
        interviewsToday: 1,
      };
    },
  };
  </script>
  <style scoped>
  .stat-card,
  .stat-cardb {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInCard 0.9s ease forwards;
  }
  .stat-cardb {
    animation-delay: 0.15s;
  }
  .stat-row .stat-card:nth-child(2) {
    animation-delay: 0.1s;
  }
  .stat-row .stat-card:nth-child(3) {
    animation-delay: 0.2s;
  }
  @keyframes fadeInCard {
    to {
      opacity: 1;
      transform: none;
    }
  }
  .dashboard {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    justify-content: center;
    margin: auto;
    width: 100vh;
  }
  .dashboard-stats {
    background: linear-gradient(135deg, #F8FAFC 60%, #E2E8F0 100%);
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    padding: 36px 28px;
    min-width: 450px;
    max-width: 560px;
    justify-content: center;
  }
  .dashboard-stats h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 32px;
    color: #2D3748;
    letter-spacing: 1px;
  }
  .stats-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .stat-row {
    display: flex;
    gap: 18px;
    justify-content: center;
  }
  .stat-card {
    flex: 1;
    background: linear-gradient(135deg, #F8FAFC 60%, #E2E8F0 100%);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
    padding: 24px 18px 18px 18px;
    text-align: center;
    transition: transform 0.18s, box-shadow 0.18s;
    position: relative;
  }
  .stat-card:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
  }
  .stat-card h3 {
    font-size: 1.1rem;
    color: #4A5568;
    margin-bottom: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .stat-card p {
    font-size: 2rem;
    font-weight: bold;
    color: #2D3748;
    margin-top: 4px;
    letter-spacing: 1px;
  }
  .stat-cardb {
    flex: 1;
    background: linear-gradient(135deg, #F8FAFC 60%, #E2E8F0 100%);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
    padding: 24px 18px 18px 18px;
    text-align: center;
    transition: transform 0.18s, box-shadow 0.18s;
    position: relative;
    border: solid 1px black;
  }
  .stat-cardb:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
  }
  .stat-cardb h3 {
    font-size: 1.1rem;
    color: #4A5568;
    margin-bottom: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .stat-cardb p {
    font-size: 2rem;
    font-weight: bold;
    color: #2D3748;
    margin-top: 4px;
    letter-spacing: 1px;
  }
  @media (max-width: 1200px) {
    .dashboard {
      flex-direction: column;
      align-items: stretch;
      width: 100%;
      gap: 24px;
    }
    .dashboard-stats {
      min-width: unset;
      max-width: 100%;
      width: 90vw;
      margin: 0 auto;
    }
  }

  @media (max-width: 800px) {
    .dashboard-stats {
      padding: 24px 8px;
      min-width: unset;
      max-width: 100%;
      width: 98vw;
    }
    .stat-row {
      flex-direction: column;
      gap: 12px;
    }
  }

  @media (max-width: 500px) {
    .dashboard {
      padding: 0;
      width: 100vw;
    }
    .dashboard-stats {
      padding: 12px 2vw;
      border-radius: 8px;
    }
    .stat-card,
    .stat-cardb {
      padding: 12px 4px 10px 4px;
      font-size: 0.95rem;
      border-radius: 8px;
    }
    .dashboard-stats h2 {
      font-size: 1.2rem;
      margin-bottom: 18px;
    }
    .stat-card h3,
    .stat-cardb h3 {
      font-size: 1rem;
    }
    .stat-card p,
    .stat-cardb p {
      font-size: 1.2rem;
    }
  }
  </style>
