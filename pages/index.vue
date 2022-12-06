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
      <h1 class="text-4xl font-display mb-10">Why Advertise on Volt Auto?</h1>
    </div>
    <div class="grid grid-cols-3 container mx-auto justify-center">
      <benefit-card v-for="{image, headerText, bodyText} in benefits" :image="image" :header-text="headerText" :body-text="bodyText"/>
    </div>
  </section>
  <section class="flex container">
    <div class="w-1/2 px-12">
      <img src="~/assets/images/customer.png" alt="Satisfied Customer">
    </div>
    <div class="flex flex-col justify-center w-1/2">
      <h1 class="text-4xl font-display my-5">The Best Experience for Buying and Selling your Car</h1>
      <p class="my-3">Buying or selling your car on Volt Auto can provide a convenient, transparent, and cost-effective way to find the right vehicle for your needs.</p>
      <table class="font-light text-sm">
        <tr>
          <td>
            <img class="mb-3" src="~/assets/images/convenience.svg" alt="Convenience">
          </td>
          <td>
            <p class="ml-5 mb-3">Browse and search for vehicles, compare prices and features, and contact sellers or buyers directly, all from the comfort of your own home</p>
          </td>
        </tr>
        <tr>
          <td>
            <img class="mb-3" src="~/assets/images/choice.svg" alt="Choice">
          </td>
          <td>
            <p class="ml-5 mb-3">Choose from a wide range of vehicles, including cars, trucks, motorcycles, and more.</p>
          </td>
        </tr>
        <tr>
          <td>
            <img class="mb-3" src="~/assets/images/transparency.svg" alt="Transparency">
          </td>
          <td>
            <p class="ml-5 mb-3">We provide transparent and detailed information about each vehicle, including its make and model, age, mileage, and condition.</p>
          </td>
        </tr>
        <tr>
          <td>
            <img class="mb-3" src="~/assets/images/savings.svg" alt="Savings">
          </td>
          <td>
            <p class="ml-5 mb-3">Competitive pricing allows you to negotiate directly with sellers or buyers reducing the overall cost of a transaction.</p>
          </td>
        </tr>
      </table>
    </div>
  </section>
  <section class="bg-light-grey">
    <div class="container mx-auto">
      <h1 class="text-4xl font-display my-5 text-center">What customers are saying</h1>
      <carousel/>
    </div>
  </section>
  <section class="">
    <div class="container max-w-[800px] flex mx-auto py-10 px-9 rounded shadow-sm text-white bg-primary">
      <div class="w-3/4 flex flex-col justify-center">
        <h1 class="text-3xl font-display text-white mb-3">Subscribe to our newsletter</h1>
        <p class="font-light mb-4">Subscribe to our newsletter and get weekly deals on the best and the most affordable vehicles.</p>
        <div>
          <form action="">
            <input type="text" placeholder="Enter your enter address" class="w-3/5 px-8 py-3 mr-4 rounded">
            <button class="px-8 py-3 bg-green-500 rounded text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="w-1/4 relative">
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
        headerText: "Boost Your Visibility",
        bodyText: "Increase the visibility and awareness of your brand among potential customers. Reach a targeted audience of consumers who are interested in buying or selling vehicles.",
        image: "/images/boost-your-visibility.svg"
      },
        {
          headerText: "Supercharge Your Sales",
          bodyText: "Drive traffic to your website or physical storefront, increase conversions and boost your sales. Optimize your campaigns to reach the right people at the right time, and maximize the return on your advertising investment.",
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