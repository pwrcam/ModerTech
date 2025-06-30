<template>
  <div class="d-flex">
    <NavBar/>
    <div class="flex-grow-1 content-container">
      <PerformanceReview />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import PerformanceReview from '@/components/PerformanceReview.vue'
export default {
  name: 'PerformanceReviewView',
  components: { NavBar, PerformanceReview }
}
</script>

<style scoped>
.content-container {
  padding: 32px 16px;
  width: 100%;
  min-width: 0;
}
</style>