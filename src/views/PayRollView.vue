<template>
  <div class="d-flex">
    <NavBar />
    <div class="flex-grow-1 content-container">
      <PayRoll />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import PayRoll from '@/components/PayRoll.vue'
export default {
  name: 'PayRollView',
  components: { NavBar, PayRoll }
}
</script>

<style scoped>
.content-container {
  padding: 32px 16px;
  width: 100%;
  min-width: 0;}

  </style>