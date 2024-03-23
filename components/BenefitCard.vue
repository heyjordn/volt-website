<template>
  <div class="benefit-card sm:justify-center">
    <div class="mr-5">
      <img  class="max-w-[50px]" :src="image" alt="benefit">
    </div>
    <div>
      <h1 class="text-xl mb-2">{{ headerText }}</h1>
      <div>
        <p class="max-w-[450px] text-sm font-light mb-5">{{ bodyText }}</p>
      </div>
      <nuxt-link class="font-bold text-primary" :class="comingSoon ? 'pointer-events-none opacity-50': 'opacity-100'" :to="linkPath">{{ linkText }} </nuxt-link>
      <span v-if="comingSoon" class="ml-3 text-white text-xs p-2 rounded-full bg-primary whitespace-nowrap">Coming Soon!</span>
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
    linkText: String,
    comingSoon: Boolean
  }
};
</script>

<style>
.benefit-card {
  @apply flex;
  @apply my-3 bg-white;
}
</style>