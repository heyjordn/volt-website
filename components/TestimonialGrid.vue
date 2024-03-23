<template>
  <div class="testimonial-grid">
    <transition-group name="testimonial-grid" tag="div" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
          image: 'https://media.licdn.com/dms/image/C4E03AQEYToHp4Zn9oQ/profile-displayphoto-shrink_400_400/0/1659548411855?e=1716422400&v=beta&t=Lu73XY_Y2N0hMkISfTp-o9mm615x4LzgbOYTSGQIb3w',
          name: "Aeon Townsend",
          title: "Customer Support Representative",
          review: "When I need to find a wide selection of motorcars, Volt is my first choice"
        },
        {
          image: 'https://via.placeholder.com/150',
          name: "Rejeeve Smith",
          title: "Sous chef",
          review: "I really enjoy using the platform, it's really intuitive and user friendly"
        },
        {
          image: 'https://media.licdn.com/dms/image/C4E03AQF5xCnHxetUsA/profile-displayphoto-shrink_400_400/0/1609248911213?e=1716422400&v=beta&t=tRUPKQabwVRwCCdfLgJUJT6tQKjCJb0rwQnGaF55TDg',
          name: "Johnathan Peart",
          title: "Lead Data Analyst",
          review: "Really cool, love the process."
        },
        {
          image: 'https://via.placeholder.com/150',
          name: "Shrewd Sheryl",
          title: "Insurance Manager",
          review: "I really enjoy using the platform, it's really intuitive and user friendly"
        },
        {
          image: 'https://via.placeholder.com/150',
          name: "Andrew Campbell",
          title: "HR Manager",
          review: "A joy to work with the Volt Auto staff and platform"
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
