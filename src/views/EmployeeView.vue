<template >
  <div class="section">
    <form @submit.prevent="handleSubmit">
        <h2>LEAVE REQUEST</h2>
        <br>
        <div class="mb-3 input" >
          <label for="employeeNum" class="form-label">Employee name: </label>
          <input type="text" class="form-control" id="employeeName" aria-describedby="" v-model="EmpName" required>
        </div>
        <div class="mb-3 input">
          <br>
          <label for="dateforleave" class="form-label" >Dates: </label>
          <input  type="date" class="date" id="dateforleave" placeholder="YY-MM-DD" v-model="EmpDate" required>
        </div>
        <br>
        <div class="mb-3 input">
          <label for="typeleave" class="form-label" placeholder="">Reason: </label>
          <select v-model="EmpReason" required>
            <option disabled value="">Please select a reason</option>
            <option>Sick Leave</option>
            <option>Personal</option>
            <option>Family Responsibilty</option>
            <option>Vacation</option>
            <option>Medical Appointment</option>
            <option>Bereavement</option>
            <option>ChildCare</option>
            <option>Other</option>
          </select>
          <br>
        </div>
        <button type="submit" class="mybtn">Submit</button>
<button type="button" class="mybtn" @click="$router.push('/DashBoard')">Back</button>
</form>
</div>
</template>
<script>
    export default{
       data(){
        return{
          EmpName : '',
          EmpDate : '',
          EmpReason : '',
        };
        },
        methods: {
          handleLogout(){
            alert('You have been logged out.');
            this.EmpName = '';
            this.EmpDate = '';
            this.EmpReason = '';
            this.$router.push('/EmployeeView')
          },
          handleSubmit(){
            alert('Form submitted successfully! Thank you.')
            this.EmpName = '';
            this.EmpDate = '';
            this.EmpReason = '';
          }
        },
    }
</script>
<style scoped>
/* Responsive styles */
@media (max-width: 600px) {
  .section {
    padding: 0.5rem;
    font-size: 0.95rem;
    height: auto;
  }
  form {
    max-width: 95vw;
    padding: 15px;
    border-radius: 12px;
  }
  input, select {
    width: 100%;
    min-width: 0;
    font-size: 1rem;
  }
  .mb-3 {
    grid-template-columns: 1fr;
    width: 100%;
  }
  button {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    
  }
  .button-group {
    flex-direction: column;
    gap: 8px;
  }
}
.section {
  height: 700px;
  z-index: 999;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
}

/* Fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
h2{
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
form {
  border-radius: 20px;
  width: 350px;
  height: 400px;
  margin: 50px auto; /* Center horizontally */
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 1.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
}

button {
  color: rgb(255, 255, 255);
  border-radius: 5px;
  font-size: medium;
  padding: 4px 15px;
  /* Remove grid, use flex in .button-group */
  margin-bottom: 1rem;
}

.mybtn{
  background-color: #36a8ff;
}
input {
  width: 125px;
  height: 23px;
  border-radius: 5px;
  font-size: medium;
  align-self: center;
}
.mb-3 {
  justify-content: center;
  align-items: center;
  gap: -500px;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: beige;
  margin: 0;
  padding: 0;
  text-align: center;
}
p {
  color: red;
}

</style>