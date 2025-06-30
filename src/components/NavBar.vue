<template>
  <!-- Hamburger Toggle Button 
  (always visible) -->
  <button
    class="navbar-toggler"
    type="button"
    @click="toggleSidebar"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Side Navbar -->
  <div
    class="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar"
    :class="{ 'sidebar-collapsed': !sidebarOpen }"
  >
    <!-- Brand/Logo -->
    <router-link to="" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img src="https://cdn.pixabay.com/photo/2017/10/04/12/17/clinic-2816039_1280.png" alt="Logo" style="height:32px;width:32px;margin-right:10px;" />
      <span class="fs-4">HR System</span>
    </router-link>
    <hr>
    <!-- Main Navigation -->
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/DashBoard" class="nav-link" active-class="active" exact>
          <i class="bi bi-speedometer2 me-2"></i>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/employee" class="nav-link" active-class="active">
          <i class="bi bi-people-fill me-2"></i>
          Employees
        </router-link>
      </li>
      <li>
        <router-link to="/payroll" class="nav-link" active-class="active">
          <i class="bi bi-cash-stack me-2"></i>
          Payroll
        </router-link>
      </li>
      <li>
        <router-link to="/hrView" class="nav-link" active-class="active">
          <i class="bi bi-graph-up me-2"></i>
          Leave Requests
        </router-link>
      </li>
      <li>
        <router-link to="/performance-reviews" class="nav-link" active-class="active">
          <i class="bi bi-clipboard-check me-2"></i>
          Performance Reviews
        </router-link>
      </li>
    </ul>
    <!-- User Profile & Logout - Now sticky to bottom -->
    <div class="mt-auto">
      <hr>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
          <strong>HR User</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser">
          <li><hr class="dropdown-divider"></li>
          <li>
            <router-link class="dropdown-item" to="/" @click.prevent="logout">
              <i class="bi bi-box-arrow-right me-2"></i>Sign out
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HrView from '@/views/HrView.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      sidebarOpen: window.innerWidth >= 768
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    logout() {
      this.$router.push('/');
      console.log('User logged out and redirected to login page');
    },
    handleResize() {
      this.sidebarOpen = window.innerWidth >= 768;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style scoped>
.sidebar {
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.1);
  width: 280px;
  height: 100vh;
  margin-left: -10px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  transition: transform 0.3s ease;
  z-index: 1050;
}
.nav-link {
  border-radius: 4px;
}
.nav-link.active {
  background-color: #007BFF;
  color: white;
}
@media (max-width: 991px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh !important;
    width: 220px !important;
    transform: translateX(-100%);
    background: #f8f9fa;
    transition: transform 0.3s ease;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }
  .sidebar:not(.sidebar-collapsed) {
    transform: translateX(0);
  }
  .sidebar.sidebar-collapsed {
    transform: translateX(-100%);
  }
  .navbar-toggler {
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1100;
    background: #fff;
    border: none;
    outline: none;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    padding: 8px 12px;
    border-radius: 4px;
    display: block;
  }
  .navbar-toggler-icon {
    display: inline-block;
    width: 24px;
    height: 2px;
    background: #333;
    position: relative;
  }
  .navbar-toggler-icon::before,
  .navbar-toggler-icon::after {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background: #333;
    position: absolute;
    left: 0;
    transition: 0.2s;
  }
  .navbar-toggler-icon::before {
    top: -7px;
  }
  .navbar-toggler-icon::after {
    top: 7px;
  }
}
@media (min-width: 992px) {
  .navbar-toggler {
    display: none;
  }
}
.sidebar .nav-link {
  padding: 10px 15px;
}
/* Ensure the sidebar takes full height and content doesn't overflow */
html, body {
  height: 100%;
  margin: 0;
}
</style>