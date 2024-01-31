<template>
  <div class="vehicle-category-box">
    <a :href="'https://app.voltauto.io?vehicleCategory=' + type" target="_blank" rel="noreferrer noopener">
      <img :src="'/images/' + image" :alt="type">
      <p class="text-[22px] mb-1">{{ title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "VehicleCategoryBox",
  props: {
    type: String,
    image: String,
    title: String
  }
};
</script>

<style>
.vehicle-category-box {
  @apply flex;
  @apply cursor-pointer;
  @apply items-center  justify-center text-center;
  @apply px-8 py-10 my-3 bg-white;
  border-radius: 11px;
  border: 1px solid #D4D4D4;
  color: #2B2B2B;
  font-family: "CamptonBold", sans-serif;
}
</style>