<template>
  <div class="price-box">
    <a :href="linkUrl" target="_blank" rel="noreferrer noopener">
      <h1 class="text-[32px] mb-1">{{ price }} JMD</h1>
      <p class="text-gray-400">per month</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "PriceBox",
  props: {
    price: String,
    linkUrl: String,
  }
};
</script>

<style>
.price-box {
  @apply flex;
  @apply items-center justify-center text-center;
  @apply px-8 py-10 my-3 bg-white;
  border-radius: 11px;
  border: 1px solid #D4D4D4;
  color: #2B2B2B;
  font-family: "CamptonBold", sans-serif;
}
</style>