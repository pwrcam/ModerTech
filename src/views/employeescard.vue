<template>
  <div class="main-container">
    <NavBar/>
    <div class="content-area">
      <form @submit.prevent="addEmployee" class="add-form">
      <input v-model="newEmployee.name" placeholder="Name" required />
      <input v-model="newEmployee.contact" placeholder=" Contact" required />
      <input v-model="newEmployee.position" placeholder="Position" required />
      </form>
      <form @submit.prevent="addEmployee" class="add-form">
        <input v-model="newEmployee.employmentHistory" placeholder="Employment History" required />
      <input v-model="newEmployee.salary" placeholder="Salary" required />
      <input v-model="newEmployee.department" placeholder="Department" required />
      <button type="submit">Add Employee</button>
      </form>
      <div class="card-container">
      <CardComp v-for="employer in $store.state.employeeInformation" :employee="employer"/>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import CardComp from '../components/CardComp.vue';
export default {
  components: {
    CardComp,
    NavBar
  },
  data() {
    return {
      newEmployee: {
        name: "",
        contact: "",
        position: "",
        employmentHistory: "",
        salary: "",
        department: ""
      }
    }
  },
  methods: {
    addEmployee() {
      this.$store.commit('ADD_EMPLOYEE', { ...this.newEmployee });
      this.newEmployee = { name: "", contact: "", position: "", employmentHistory: "" , salary: "", department: ""};
    }
  }
}
</script>
<style>
.main-container {
  display: flex;
  min-height: 100vh;
}
.content-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 25px;
  box-sizing: border-box;
}
.add-form {
  margin: 20px;
  display: flex;
  gap: 10px;
}
</style>