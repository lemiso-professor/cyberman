<template>
  <div>
    <div>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    </div>
    <footer class="bg-blue-900 text-white py-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div class="flex items-center space-x-2 md:space-x-8 mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <!-- SVG path -->
            </svg>
            <p class="text-center md:text-left text-2xl">
              2129 General Booth Blvd, Suite <br> 103-217, Virginia Beach, VA 23454
            </p>
          </div>
          <div class="flex items-center space-x-2 md:space-x-8 mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <!-- SVG path -->
            </svg>
            <p class="text-center md:text-left text-2xl">
              Call Us On: <br> (757) 301-0600
            </p>
          </div>
          <div class="flex items-center space-x-2 md:space-x-8 mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <!-- SVG path -->
            </svg>
            <p class="text-center md:text-left text-2xl">
              Email On: <br> contact@cotechnologies.com
            </p>
          </div>
        </div>

        <div class="flex flex-wrap justify-center md:justify-start items-center mt-8 space-x-8">
          <img src="@/assets/lg.webp" alt="Technologies Logo" class="h-20">
          <div class="flex space-x-8 ">
            <a href="#" class="text-blue-500 hover:text-white"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-blue-500 hover:text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-blue-500 hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-blue-500 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-blue-500 hover:text-white"><i class="fab fa-youtube"></i></a>
            <a href="#" class="text-blue-500 hover:text-white"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8 space-x-12">
          <div>
            <h4 class="font-bold mb-4 text-2xl">Useful Links</h4>
            <ul class="space-y-2 text-xl">
              <li><a href="#" class="hover:text-blue-500">Home</a></li>
              <li><a href="#" class="hover:text-blue-500">About Us</a></li>
              <li><a href="#" class="hover:text-blue-500">Service</a></li>
              <li><a href="#" class="hover:text-blue-500">Cyber Security</a></li>
              <li><a href="#" class="hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-2xl">Services</h4>
            <ul class="space-y-2 text-xl">
              <li><a href="#" class="hover:text-blue-500">Cyber Security</a></li>
              <li><a href="#" class="hover:text-blue-500">Business Continuity</a></li>
              <li><a href="#" class="hover:text-blue-500">Cloud Services</a></li>
              <li><a href="#" class="hover:text-blue-500">Service Desk</a></li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-8">
          <p>©2024 Technologies. All rights reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>


<script setup></script>

<style lang="scss" scoped></style>
