<template>
  <div class="login-bg">
    <div class="login-container">
      <h1>HR System Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Dummy login, always succeeds
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped>
.login-bg {
  height: 100vh;
  width: 100vw;
  margin-left: -16px;
  background: url('../assets/pexels-mikhail-nilov-8101891.jpg') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
}
.login-container {
  background: rgba(255, 255, 255, 0.85);
  padding: 40px 32px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  color: #000000;
  width: 320px;
}
.login-container h1 {
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
}
.login-container input {
  width: 100%;
  margin-bottom: 16px;
  padding: 10px 12px;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
}
.login-container button {
  width: 100%;
  padding: 10px;
  background: #1565c0;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  letter-spacing: 1px;
  transition: background 0.2s;
}
.login-container button:hover {
  background: #1976d2;
}
</style>
