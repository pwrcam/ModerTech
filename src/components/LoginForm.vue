<template>
  <form @submit.prevent="handleLogin">
    <div class="mb-3">
      <label for="userId" class="form-label">User ID</label>
      <input type="text" v-model="userId" class="form-control" id="userId" required />
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" v-model="password" class="form-control" id="password" required />
    </div>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <button type="submit" class="btn btn-primary w-100">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: '',
      error: ''
    };
  },
  methods: {
    handleLogin() {
      if (this.userId === 'admin' && this.password === 'admin123') {
        this.$router.push('/dashboard');
      } else {
        this.error = 'Invalid ID or password.';
      }
    }
  }
};
</script>
