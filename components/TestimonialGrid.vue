<template>
  <div class="testimonial-grid">
    <transition-group name="testimonial-grid" tag="div" class="grid grid-cols-3">
      <testimonial v-for="(testimonial, index) in testimonials"
                   :key="index"
                   :image="testimonial.image"
                   :name="testimonial.name"
                   :title="testimonial.title"
                   :review="testimonial.review"
                   :linked-in="testimonial.linkedIn"
                   :instagram="testimonial.instagram"
                   :rating="5">
        {{ testimonial.text }}
      </testimonial>
    </transition-group>
  </div>
</template>

<script>
import Testimonial from "./Testimonial";
export default {
  components:{
    Testimonial
  },
  data() {
    return {
      testimonials: [
        {
          image: '/images/robin.jpeg',
          name: "Robin Barrett",
          title: "Data Analyst",
          review: "Volt is where I turn when Im ready to see the best deals on cars!",
          linkedIn: "https://www.linkedin.com/in/robin-barrett-7532ab238/",
          instagram: "https://instagram.com/hey_jordn"
        },
        {
          image: 'https://via.placeholder.com/150',
          name: "Anonymous Andy",
          title: "Car Salesman",
          review: "When I need to find a wide selection of motorcars, Volt is my first choice"
        },
        {
          image: 'https://via.placeholder.com/150',
          name: "Shrewd Sheryl",
          title: "Insurance Manager",
          review: "I really enjoy using the platform, it's really intuitive and user friendly"
        },
        {
          image: 'https://via.placeholder.com/150',
          name: "Anonymous Andy",
          title: "Car Salesman",
          review: "When I need to find a wide selection of motorcars, Volt is my first choice"
        },
        {
          image: 'https://via.placeholder.com/150',
          name: "Shrewd Sheryl",
          title: "Insurance Manager",
          review: "I really enjoy using the platform, it's really intuitive and user friendly"
        },
        {
          image: 'https://via.placeholder.com/150',
          name: "Shrewd Sheryl",
          title: "Insurance Manager",
          review: "I really enjoy using the platform, it's really intuitive and user friendly"
        },
      ]
    }
  }
}
</script>

<style>
.testimonial-grid {
  position: relative;
  overflow: hidden;
  @apply flex container mx-auto;
}

</style>
