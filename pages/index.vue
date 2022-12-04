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
  <section class="bg-light-grey">
    <div class="flex items-center justify-center">
      <h3 class="text-4xl font-display mb-10">Why Advertise on Volt Auto?</h3>
    </div>
    <div class="grid grid-cols-3 container mx-auto justify-center">
      <benefit-card v-for="{image, headerText, bodyText} in benefits" :image="image" :header-text="headerText" :body-text="bodyText"/>
    </div>
  </section>
</template>
<script>
definePageMeta({
  layout: "default",
});

export default {
  data(){
    return {
      benefits: [{
        headerText: "Boost Your Visibility",
        bodyText: "Increase the visibility and awareness of your brand among potential customers. By placing ads on the platform, you can reach a targeted audience of consumers who are interested in buying or selling vehicles, and who may be more likely to engage with your brand.",
        image: "/images/boost-your-visibility.svg"
      },
        {
          headerText: "Supercharge Your Sales",
          bodyText: "Drive traffic to your website or physical storefront, which can in turn lead to increased conversions and sales. By targeting your ads to specific segments of the platform's audience, optimize your campaigns to reach the right people at the right time, and maximize the return on your advertising investment.",
          image: "/images/supercharge-your-sales.svg"
        },
        {
          headerText: "Satisfy your Customers",
          bodyText: "Advertising on Volt Auto can provide valuable insights into consumer behavior and preferences, which can help you to better understand your target audience and tailor your marketing efforts accordingly.",
          image: "/images/satisfy-your-customers.svg"
        }
      ]
    }
  }
}

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

section {
  @apply py-32;
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