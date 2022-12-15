<template>
    <footer>
        <div class="flex flex-col container mx-auto">
            <div class="flex w-full">
            <div class="w-1/4">
                <img src="~/assets/images/logo-white.svg" alt="Volt Auto Logo">
            </div>
            <div class="w-1/4">
                <p class="footer-heading">Product</p>
                <a href="https://app.voltauto.io">Explore Vehicles</a>
            </div>
            <div class="flex flex-col w-1/4">
                <p class="footer-heading">Company</p>
                <a href="https://app.voltauto.io/privacy-policy">Privacy Policy</a>
                <a href="https://app.voltauto.io/terms-of-service">Terms of Service</a>
            </div>
            <div class="w-1/4">
                <p class="footer-heading">Contact Us</p>
                <a href="https://app.voltauto.io">Email us at voltautojm@gmail.com</a>
            </div>
        </div>
        <div class="flex w-full items-baseline">
            <div class="w-1/3">
                <p>Made by Jordan Jones.</p>
            </div>
            <div class="flex w-1/3 justify-center">
                <a href="https://twitter.com/voltauto">
                    <img class="footer-icon" src="~/assets/images/twitter.svg" alt="Twitter"/>
                </a>
                <a href="https://linkedin.com/voltauto">
                    <img class="footer-icon" src="~/assets/images/linkedin.svg" alt="Linked In"/>
                </a>
                <a href="https://instagram.com/voltautoparts">
                    <img class="footer-icon" src="~/assets/images/instagram.svg" alt="Instagram"/>
                </a>
            </div>
            <div class="flex w-1/3 mt-14  justify-end">
                <p>© Volt Auto, All rights reserved {{new Date().getFullYear()}}.</p>
            </div>
        </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    background:#202020;
    color: white;
    @apply pt-28 pb-8;  
    @apply font-bold;
}

a {
    @apply font-light;
}
.footer-heading {
    @apply font-bold;
    @apply my-3;
    font-size: 18px;
}

.footer-icon {
    @apply mr-3;
}
</style>