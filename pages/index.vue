<template>
  <header class="hero-section">
    <div class="container mx-auto flex justify-center md:flex-row md:justify-between items-center">
      <div class="py-[170px] text-center sm:text-left">
        <p class="font-black mb-3 text-md"><span class="text-primary">_</span>CERTIFIED USED CAR DEALER</p>
        <h1 class="hero-heading">Your <span class="text-primary">Dream</span> Car, <br/> Directly from <span class="text-primary">Japan</span></h1>
        <h2 class="hero-subheading">Volt Auto is the most trusted and reliable source of used vehicles from Japan, shop in convenience and comfort.</h2>
        <div class="flex my-5 justify-center sm:justify-start">
          <a class="text-center bg-primary text-white px-5 py-2 rounded" href="https://app.voltauto.io/">Shop Now</a>
        </div>
      </div>
      <div class="flex justify-center items-center relative">
        <img class="hidden absolute lg:block h-[72px] top-[280px] right-[-10px]" src="~/assets/images/auction-box.png" alt="Auctions"/>
        <img class="hidden absolute lg:block h-[72px] top-[350px] right-[260px]" src="~/assets/images/vehicle-box.png" alt="Vehicles"/>
        <img class="hidden sm:flex max-h-[440px]" src="~/assets/images/hero-image.png" alt="Hero Image"/>
      </div>
    </div>
  </header>
  <section class="container mx-auto flex justify-between">
    <div class="hidden md:flex flex-col items-center md:w-1/2">
      <img class="max-w-[400px]" src="~/assets/images/shop-with-confidence.png" alt="Shopper With Confidence">
    </div>
    <div class="flex flex-col justify-center w-full md:w-1/2">
      <h1 class="sub-heading mb-10">Shop With Confidence</h1>
      <div class="grid grid-cols-1 container mx-auto justify-center">
        <benefit-card v-for="{image, headerText, bodyText, linkText, linkPath, comingSoon} in benefits" :image="image" :header-text="headerText" :body-text="bodyText" :link-text="linkText" :link-path="linkPath" comingSoon/>
      </div>
    </div>
  </section>
  <div class="container mx-auto ">
    <h2 class="sub-heading">Choose Your Budget</h2>
    <p class="my-3">Shop from vehicles with a financing option that suites your needs.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-6">
      <price-box v-for="{price, linkUrl} in prices" :price="price" :link-url="linkUrl"/>
    </div>
  </div>
  <section class="container mx-auto ">
    <h2 class="sub-heading">Shop By Vehicle Type</h2>
    <p class="my-3">Shop from vehicles with a financing option that suites your needs.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-6">
      <vehicle-category-box v-for="{title, type, image} in vehicleCategories" :title="title" :type="type" :image="image"/>
    </div>
  </section>
  <section class="bg-light-grey">
    <div class="container mx-auto">
      <h1 class="sub-heading font-display my-5 text-center">Testimonials</h1>
      <testimonial-grid/>
    </div>
  </section>
  <section class="parts-cta">
    <div class="container mx-auto text-center text-white">
      <p class="sub-heading font-bold">Shop For Parts</p>
      <p class="max-w-[700px] mx-auto">Rev up your ride with Volt Auto! Explore our extensive inventory of new and used parts for every make and model. Upgrade your vehicle today and experience the power of choice!</p>
      <div class="my-5">
        <a class="text-center bg-primary text-white px-5 py-2 rounded" href="https://shop.voltauto.io/">Shop Now</a>
      </div>
    </div>
  </section>
</template>
<script>
definePageMeta({
  layout: "default",
});

import TestimonialGrid from "../components/TestimonialGrid.vue";
export default {
  components: {TestimonialGrid},
  data(){
    return {
      benefits: [{
        headerText: "Hassle Free, Transparent Process",
        bodyText: "We offer a hassle-free and transparent car-buying experience. Say goodbye to hidden fees and stressful negotiations—we provide upfront pricing and expert guidance every step of the way. Visit us today and discover how easy it is to find your dream car with Volt Auto.",
        image: "/images/hassle-free-transparent-process.svg",
        linkText: "Track My Shipment",
        linkPath: "https://app.voltauto.io/shipments",
        comingSoon: true
      },
        {
          headerText: "Get Pre-approved for financing",
          bodyText: "Experience the convenience of securing financing from the comfort of your own home with our online platform. Our safe and easy-to-use process allows you to get pre-approved for financing quickly and securely. With competitive rates and flexible terms, you can shop with confidence knowing your budget and options.",
          image: "/images/get-pre-approved-for-financing.svg",
          linkText: "Find Out About Financing",
          linkPath: "/finance",
          comingSoon: true

        },
        {
          headerText: "Around the Clock Support",
          bodyText: "Advertising on Volt Auto can provide valuable insights into consumer behavior and preferences, which can help you to better understand your target audience and tailor your marketing efforts accordingly.",
          image: "/images/around-the-clock-support.svg",
          linkText: "Contact Support",
          linkPath: "/support",
          comingSoon: true
        }
      ],
      prices: [
        {
          price: "$60,000",
          linkUrl: "https://app.voltauto.io?min_price=60000"
        },
        {
          price: "$70,000",
          linkUrl: "https://app.voltauto.io?min_price=70000"
        },
        {
          price: "$80,000",
          linkUrl: "https://app.voltauto.io?min_price=80000"
        },
        {
          price: "$90,000",
          linkUrl: "https://app.voltauto.io?min_price=90000"
        },
      ],
      vehicleCategories:[
        {
          title: "Sedans",
          type: "Sedan",
          image: "sedan.png",
        },
        {
          title: "Hatchbacks",
          type: "Hatchback",
          image: "hatchback.png",
        },
        {
          title: "Wagons",
          type: "Wagon",
          image: "wagon.png",
        },
        {
          title: "Vans",
          type: "Van",
          image: "van.png",
        },
        {
          title: "SUVs",
          type: "SUV",
          image: "suv.png",
        },
        {
          title: "Pick Ups",
          type: "Pick%20Ups",
          image: "pick-up.png",
        },
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

.parts-cta {
  background-image: url("/images/background.png");
}

section {
  @apply py-20;
}

.sub-heading {
  @apply text-4xl font-display;
}

@media screen and (max-width: 768px) {
  .hero-heading {
    @apply text-4xl;
  }

  .sub-heading {
    @apply text-3xl font-display text-center;
  }

  section {
    @apply py-16;
  }

  .benefit-icon {
    display: none;
  }
}

@media screen and (min-width:120px) and (max-width: 320px) {
  .hero-heading {
    @apply text-3xl;
  }
}

</style>