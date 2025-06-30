<template>
  <div class="d-flex">
    <NavBar />
    <div class="flex-grow-1 content-container">
      <DashBoardComp />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import DashBoardComp from '@/components/DashBoardComp.vue'
export default {
  name: 'DashBoardView',
  components: { NavBar, DashBoardComp }
}
</script>

<style scoped>
.content-container {
  padding: 32px 16px;
  width: 100%;
  min-width: 0;
}
</style>






