<template>
    <div class="mt-16 ml-6 flex flex-col gap-8 justify-center items-center lg:flex-row">
      <div class="text-center lg:text-left">
        <div class="font-bold text-3xl text-blue-900 sm:text-4xl md:text-6xl lg:text-8xl">
          Your Trusted <br />Partner In IT And <br />Cyber Security
        </div>
        <div class="mt-10 text-xl sm:text-2xl">
          Our mission is simple. We maximize your success by keeping your best
          <br />
          interests central to everything we do. We partner with you to see the
          big <br />
          picture, leveraging our combined 100 years of industry expertise to
          create <br />
          and share strategies that ensure success for your organization.
        </div>
        <div>
          <router-link to="/services">
            <button
              class="border border-white bg-blue-700 text-white font-bold py-4 px-7 mt-10 rounded-full flex items-center justify-center animate-bounce"
            >
              EXPLORE NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right ml-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </router-link>
        </div>
      </div>
      <div class="flex justify-center mt-10 lg:mt-0">
        <img
          src="@/assets/hero.png"
          alt="Description"
          class="w-full sm:w-4/5 md:w-2/3 lg:w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </template>
  

<script setup></script>

<style lang="scss" scoped></style>
