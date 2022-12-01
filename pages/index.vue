<template>
  <header class="hero-section h-screen">
    <div class="container mx-auto">
      <h1 class="hero-heading">Explore the Caribbean’s largest vehicle marketplace</h1>
      <h2 class="hero-subheading">Volt Auto is a peer-to-peer marketplace for buying, selling and sourcing all types of Vehicles across Jamaica and the wider Caribbean.</h2>
      <a class="mx-auto text-center" href="https://app.voltauto.io/">Explore</a>
    </div>
  </header>
</template>
<script>
definePageMeta({
  layout: "default",
});
</script>
<style>
.hero-section {
  position: relative;
  @apply flex flex-col items-center;
}

.hero-heading {
  @apply text-primary font-bold text-5xl text-center;
  @apply max-w-[750px] mx-auto pt-[200px];
}

.hero-subheading {
  @apply max-w-[750px] mx-auto text-center;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url("/images/halftone-globe.svg");
  mix-blend-mode: multiply;
  opacity: 10%;
}
</style>