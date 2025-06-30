<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h1>{{ employee.name }}</h1>
        <p>{{ employee.contact }}</p>
      </div>
      <div class="flip-card-back">
        <p>{{ employee.employmentHistory }}</p>
        <p>{{ employee.position }}</p>
        <p>{{ employee.department }}</p>
        <p>R {{ employee.salary }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['employee']
}
</script>
<style scoped>
@media (max-width: 900px) {
  .flip-card {
    width: 90vw;
    height: 220px;
    min-width: 0;
    font-size: 1rem;
  }
  .flip-card-front p {
    margin-top: 5rem;
    font-size: 1rem;
  }
  h1 {
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
  p {
    font-size: 0.95rem;
    margin-top: 1rem;
  }
  .flip-card-front, .flip-card-back {
    background-size: 6rem;
  }
}

@media (max-width: 600px) {
.flip-card {
  opacity: 0;
  animation: fadeIn 3s ease forwards;
  background-color: transparent;
  width: 350px;
  max-width: 95vw;
  height: 250px;
  max-height: 60vw;
  border: 1px solid #F1F1F1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  border-radius: 5px;
}
  h1 {
    font-size: 1rem;
    margin-top: 0.3rem;
  }
  p {
    font-size: 0.85rem;
    margin-top: 0.7rem;
  }
  .flip-card-front, .flip-card-back {
    background-size: 4rem;
  }
}
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect) */

.flip-card {
  opacity: 0;
  animation: fadeIn 3s ease forwards;
  background-color: transparent;
  width: 350px;
  height: 250px;
  border: 1px solid #F1F1F1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  border-radius: 5px;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1.8s;
  transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
}

/* Only show the image on the front */
.flip-card-front {
  background-image: url('https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740');
  background-repeat: no-repeat;
  background-size: 10rem;
  background-position: center;
}
/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #FFFFFF;
  color: black;
  filter: blur();
}
/* Style the back side */
.flip-card-back {
  background-color: rgb(0, 115, 255);
  color: white;
  transform: rotateY(180deg);
}
p{
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
}
.flip-card-front p{
  margin-top: 9rem;
}
h1{
  margin-top: 1rem;
  font-size: 2.1rem;
  font-weight: bold
}
</style>
