<template>
  <header class="hero-section h-screen">
    <img class="heading-icon honda-icon" src="~/assets/images/honda-icon.svg" alt="Honda">
    <img class="heading-icon infiniti-icon" src="~/assets/images/infinit-icon.svg" alt="Infiniti">
    <img class="heading-icon nissan-icon" src="~/assets/images/nissan-icon.svg" alt="Nissan">
    <img class="heading-icon mitsubishi-icon" src="~/assets/images/mitsubishi-icon.svg" alt="Mitsubishi">
    <img class="heading-icon suzuki-icon" src="~/assets/images/suzuki-icon.svg" alt="Suzuki">
    <img class="heading-icon toyota-icon" src="~/assets/images/toyota-icon.svg" alt="Toyota">
    <div class="container mx-auto">
      <h1 class="hero-heading">Explore the Caribbean’s largest vehicle marketplace</h1>
      <h2 class="hero-subheading">Volt Auto is a peer-to-peer marketplace for buying, selling and sourcing all types of Vehicles across Jamaica and the wider Caribbean.</h2>
      <div class="flex justify-center my-5">
        <a class="text-center bg-primary text-white px-5 py-2 rounded" href="https://app.voltauto.io/">Explore Vehicles</a>
      </div>
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
  @apply text-primary font-display text-5xl text-center;
  @apply max-w-[750px] mx-auto pt-[230px];
}

.hero-subheading {
  @apply max-w-[750px] mx-auto text-center my-5;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-position: center;
  background-size: cover;
  z-index: -1;
  background-image: url("/images/halftone-globe.svg");
  mix-blend-mode: multiply;
  opacity: 10%;
}

.heading-icon {
  @apply absolute h-12;
}

.honda-icon {
  right: calc(10vw + 300px);
  top: calc(10vh + 50px);
}

.mitsubishi-icon {
  bottom: calc(25vh + 20px);
  right: calc(15vw + 150px);
}

.infiniti-icon {
  left: calc(50vw - 450px);
  bottom: calc(60vh - 50px);
  @apply h-14;
}

.nissan-icon {
  left: calc(50vw - 230px);
  top: calc(10vh + 30px);
  @apply h-16;
}

.toyota-icon {
  bottom: calc(25vh + 20px);
  left: calc(30vw + 50px);
  @apply h-14;
}

.suzuki-icon {
  right: calc(10vw + 100px);
  top: calc(10vh + 150px);
  @apply h-16;
}
</style>