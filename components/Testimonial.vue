// The component template, written in HTML
<template>
  <div class="flex flex-col bg-white p-4 m-3 rounded">
    <div>
      <img class="h-12 rounded-full" :src="image" :alt="name + ' profile picture'">
    </div>
    <div class="flex items-center my-3">
      <h3 class="mt-1 mr-2">{{ name }}</h3>
      <a class="mr-1" :href="linkedIn" v-if="linkedIn" target="_blank" rel="noopener noreferrer">
        <svg class="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9H2V21H6V9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a class="mr-1" :href="instagram" v-if="instagram" target="_blank" rel="noopener noreferrer">
        <svg class="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.5 6.5H17.51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    <h4 class=" text-xs testimonial__title">{{ title }}</h4>
    <p class="flex-1 text-sm font-light">{{ review }}</p>
    <div class="">
      <span v-for="rate in rating" :key="rate" class="testimonial__star">⭐</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    linkedIn: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    }
  },
};
</script>
<style>
.social-icon {
  @apply stroke-current text-zinc-400 hover:text-primary h-4;
}
</style>