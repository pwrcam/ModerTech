<template>
  <div class="main-flex">
    <NavBar />
    <div>

    </div>
    <div class="flex-grow-1 hrrequest">
      <h1>HR REQUESTS</h1>
      <router-link to="/EmployeeView" id="RL">Request</router-link>
      <HrList />
    </div>
  </div>
</template>

<script>
import HrList from '@/components/HrList.vue';
import NavBar from '@/components/NavBar.vue';
import TableTag from '@/components/TableTag.vue';

export default {
  components: {
    HrList,
    NavBar,
    TableTag
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .main-flex {
    flex-direction: column;
  }
  .hrrequest {
    padding: 16px 8px;
  }
  h1 {
    font-size: 1.5rem;
  }
}
.main-flex {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
.hrrequest {
  flex-grow: 1;
  padding: 32px 16px;
  background: #fff;
}
h1 {
  text-align: center;
}
#RL {
  display: inline-block;
  background-color: #36a8ff;
  color: #fff;
  text-decoration: none;
  width: 7rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(54,168,255,0.15);
  transition: background 0.2s;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
}
#RL:hover {
  background-color: #258be2;
}
</style>