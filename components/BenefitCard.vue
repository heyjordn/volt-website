<template>
  <div class="benefit-card">
    <div class="mr-5">
      <img  class="max-w-[50px]" :src="image" alt="benefit">
    </div>
    <div>
      <h1 class="text-xl mb-2">{{ headerText }}</h1>
      <div>
        <p class="max-w-[450px] text-sm font-light mb-5">{{ bodyText }}</p>
      </div>
      <nuxt-link class="font-bold text-primary" :to="linkPath">{{ linkText }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitCard",
  props: {
    image: String,
    headerText: String,
    bodyText: String,
    linkPath: String,
    linkText: String
  }
};
</script>

<style>
.benefit-card {
  @apply flex;
  @apply my-3 bg-white;
}
</style>