Copy code
<template>
  <div class="benefit-card">
    <div class="my-4">
      <img :src="image" alt="benefit">
    </div>
    <div>
      <h1 class="text-xl mb-2">{{ headerText }}</h1>
    </div>
    <div>
      <p class="text-sm font-light mb-5">{{ bodyText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitCard",
  props: {
    image: String,
    headerText: String,
    bodyText: String
  }
};
</script>

<style>
.benefit-card {
  @apply flex flex-col;
  @apply items-center;
  @apply p-4 m-2 bg-white;
  min-height: 300px
}
</style>