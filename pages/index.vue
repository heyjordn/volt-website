<template>
  <header class="hero-section h-screen">
    <div class="container mx-auto flex justify-between items-center">
      <div class="pt-[230px]">
        <p class="font-black mb-3 text-md"><span class="text-primary">_</span>CERTIFIED USED CAR DEALER</p>
        <h1 class="hero-heading">Your <span class="text-primary">Dream</span> Car, <br/> Directly from <span class="text-primary">Japan</span></h1>
        <h2 class="hero-subheading">Volt Auto is the most trusted and reliable source of used vehicles from Japan, shop in convenience and comfort.</h2>
        <div class="flex my-5">
          <a class="text-center bg-primary text-white px-5 py-2 rounded" href="https://app.voltauto.io/">Shop Now</a>
        </div>
      </div>
      <div class="flex justify-center items-center relative">
        <img class="absolute h-[72px] top-[350px] right-[-10px]" src="~/assets/images/auction-box.png" alt="Auctions"/>
        <img class="absolute h-[72px] top-[450px] right-[300px]" src="~/assets/images/vehicle-box.png" alt="Vehicles"/>
        <img class="max-h-[550px]" src="~/assets/images/hero-image.png" alt="Hero Image"/>
      </div>
    </div>
  </header>
  <section class="container mx-auto flex justify-between">
    <div class="flex flex-col items-center w-1/2">
      <img class="max-w-[400px]" src="~/assets/images/shop-with-confidence.png" alt="Shopper With Confidence">
    </div>
    <div class="w-1/2">
      <h1 class="sub-heading mb-10">Shop With Confidence</h1>
      <div class="grid grid-cols-1 container mx-auto justify-center">
        <benefit-card v-for="{image, headerText, bodyText, linkText, linkPath} in benefits" :image="image" :header-text="headerText" :body-text="bodyText" :link-text="linkText" :link-path="linkPath"/>
      </div>
    </div>
  </section>
  <section class="bg-light-grey">
    <div class="container mx-auto">
      <h1 class="sub-heading font-display my-5 text-center">What customers are saying</h1>
      <carousel/>
    </div>
  </section>
  <section>
    <div class="container max-w-[800px] flex mx-auto py-10 px-9 sm:rounded shadow-sm text-white bg-primary">
      <div class="w-full sm:w-3/4 flex flex-col justify-center">
        <h1 class="text-3xl font-display text-white mb-3">Subscribe to our newsletter</h1>
        <p class="font-light mb-4">Subscribe to our newsletter and get weekly deals on the best and the most affordable vehicles.</p>
        <div>
          <form class="flex flex-col sm:block">
            <input type="text" placeholder="Enter your enter address" class="w-full sm:w-3/5 px-8 py-3 mr-4 rounded">
            <button class="mt-5 sm:mt-0 px-8 py-3 bg-green-500 rounded text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="hidden sm:block w-1/4 relative">
        <img class="absolute min-w-[300px] right-[-100px]" src="~/assets/images/sample-car.png" alt="Sample Car">
      </div>
    </div>
  </section>
</template>
<script>
definePageMeta({
  layout: "default",
});

import Carousel from "../components/Carousel";
export default {
  components: {Carousel},
  data(){
    return {
      benefits: [{
        headerText: "Hassle Free, Transparent Process",
        bodyText: "Increase the visibility and awareness of your brand among potential customers. Reach a targeted audience of consumers who are interested in buying or selling vehicles.",
        image: "/images/hassle-free-transparent-process.svg",
        linkText: "Track My Shipment",
        linkPath: "https://app.voltauto.io/shipments"
      },
        {
          headerText: "Get Pre-approved for financing",
          bodyText: "Drive traffic to your website or physical storefront, increase conversions and boost your sales. Optimize your campaigns to reach the right people at the right time, and maximize the return on your advertising investment.",
          image: "/images/get-pre-approved-for-financing.svg",
          linkText: "Find Out About Financing",
          linkPath: "/finance"
        },
        {
          headerText: "Around the Clock Support",
          bodyText: "Advertising on Volt Auto can provide valuable insights into consumer behavior and preferences, which can help you to better understand your target audience and tailor your marketing efforts accordingly.",
          image: "/images/around-the-clock-support.svg",
          linkText: "Contact Support",
          linkPath: "/support"
        }
      ]
    }
  }
}

</script>
<style>
.hero-section {
  position: relative;
  @apply flex flex-col;
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

.hero-heading {
  @apply text-[#2B2B2B] font-display text-5xl;
  @apply leading-[55px];
  @apply max-w-[750px];
}

.hero-subheading {
  @apply max-w-[550px] my-5;
}

section {
  @apply py-32;
}

.sub-heading {
  @apply text-4xl font-display;
}

@media screen and (max-width: 768px) {
  .hero-heading {
    @apply text-3xl;
  }

  .sub-heading {
    @apply text-3xl font-display text-center;
  }

  section {
    @apply py-24;
  }

  .benefit-icon {
    display: none;
  }
}

@media screen and (min-width:120px) and (max-width: 320px) {
  .hero-heading {
    @apply text-3xl;
    @apply pt-[130px];
  }
}

</style>