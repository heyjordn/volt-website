<template>
  <nav class="bg-white border-b border-gray-100 z-10">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex">
          <div class="shrink-0 flex items-center mr-8">
            <a href="/">
              <img src="/images/logo.svg" alt="logo" class="h-10 w-auto"/>
            </a>
          </div>
          <div class="hidden sm:flex items-center justify-center">
            <nuxt-link class="text-sm mx-4" to="/">Home</nuxt-link>
            <a class="text-sm mx-4 flex items-center " href="https://app.voltauto.io/" rel="noopener noreferrer" target="_blank">Buy
              <svg class="h-3 ml-1 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <a class="text-sm mx-4 flex items-center " href="https://shop.voltauto.io/" rel="noopener noreferrer" target="_blank">Parts
              <svg class="h-3 ml-1 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="hidden sm:flex items-center text-sm">
          <a class="mr-3" href="https://app.voltauto.io/login" rel="noopener noreferrer">Login</a>
          <a class="font-bold text-primary" href="https://app.voltauto.io/register" rel="noopener noreferrer">Create Account</a>
        </div>
         <!-- Hamburger -->
        <div class="-mr-2 flex items-center sm:hidden">
            <button @click="open = !open"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                <svg class="h-6 w-6 text-gray-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path :class="{'hidden': open, 'inline-flex': !open }"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"/>
                    <path :class="{'hidden': !open, 'inline-flex': open }" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
      </div>
      <!-- Responsive Menu -->
      <TransitionGroup name="fade">
        <div v-if="open" :class="{'absolute': open, 'hidden': !open}" class="mobile-nav">
          <div class="pt-2 pb-3 space-y-1">
            <a class="mobile-nav-link text-sm" href="https://app.voltauto.io/" rel="noopener noreferrer" target="_blank">
              Buy
            </a>
            <a class="mobile-nav-link" href="https://app.voltauto.io/login" rel="noopener noreferrer">Login</a>
            <a class="mobile-nav-link mobile-nav-link-primary" href="https://app.voltauto.io/login" rel="noopener noreferrer">Create Account</a>
          </div>
      </div>
      </TransitionGroup>
    </div>
  </nav>
</template>
<script>

export default {
  data(){
    return {
      open: false
    }
  }
}
</script>
<style>
.mobile-nav {
  z-index: 10;
  @apply w-screen bg-white left-0;
  @apply shadow-sm border-b-2;
}

.mobile-nav-link {
  @apply block pl-3 pr-4 py-2 border-l-4;
  @apply border-transparent text-base font-medium; 
  @apply text-gray-600 hover:text-gray-800 hover:bg-gray-50;
  @apply hover:border-gray-300 focus:outline-none;
  @apply focus:text-gray-800 focus:bg-gray-50; 
  @apply focus:border-gray-300 transition;
}

.mobile-nav-link-primary {
  @apply hover:text-primary text-red-600 font-bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>