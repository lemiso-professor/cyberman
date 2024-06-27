<template>
  <div class="bg-blue-900 font-Lato, sans-serif text-white p-7">
    <nav>
      <div
        class="container nav-wrapper flex text-center items-center justify-between"
      >
        <div class="brand flex items-center">
          <img src="@/assets/lg.webp" alt="Technologies Logo" class="h-24">
          <span><strong>CYBERMAN <br>GLOBAL</strong></span>
        </div>

        <div class="hamburger" @click="toggleMobileNav">
          <span :class="{ active: isMobileNavOpen }"></span>
          <span :class="{ active: isMobileNavOpen }"></span>
          <span :class="{ active: isMobileNavOpen }"></span>
        </div>
        <ul
          class="nav-list flex items-center"
          :class="{ open: isMobileNavOpen }"
        >
          <li>
            <RouterLink
              @click.native="closeMobileNav"
              to="/"
              class="text-purple-500"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click.native="closeMobileNav"
              to="#"
              class="text-white hover:text-purple-500"
              >About</RouterLink
            >
            <ul
              class="dropdown-list bg-gradient-to-r from-blue-500 to-blue-900"
            >
              <li>
                <RouterLink
                  @click.native="closeMobileNav"
                  to="/aboutus"
                  class="hover:text-purple-500"
                  >About us</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  @click.native="closeMobileNav"
                  to="/team"
                  class="hover:text-purple-500"
                  >Our Team</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  @click.native="closeMobileNav"
                  to="/projects"
                  class="hover:text-purple-500"
                  >Our Projects</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  @click.native="closeMobileNav"
                  to="/training"
                  class="hover:text-purple-500"
                  >Training</RouterLink
                >
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              @click.native="closeMobileNav"
              to="/services"
              class="text-white hover:text-purple-500"
              >Services</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click.native="closeMobileNav"
              to="/contact"
              class="text-white hover:text-purple-500"
              >Cybersecurity</RouterLink
            >
          </li>
          <!-- <li>
            <router-link
              @click.native="closeMobileNav"
              to="/Signup"
              class="border rounded-lg p-2 border-purple-500 hover:text-purple-500"
              >Join Us</router-link
            >
          </li> -->
          <li>
            <router-link
              @click.native="closeMobileNav"
              to="/#"
              class="border rounded-lg p-2 border-purple-500 hover:text-purple-500"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isMobileNavOpen = ref(false);
const Router = useRouter();

function toggleMobileNav() {
  isMobileNavOpen.value = !isMobileNavOpen.value;
}

function closeMobileNav() {
  isMobileNavOpen.value = false;
}

window.addEventListener("resize", addRequiredClass);

function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}

window.onload = addRequiredClass;
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.container {
  width: 1152px;
  max-width: 90%;
  margin: 0 auto;
}

.brand svg {
  height: 30px;
  margin-right: 10px;
}

.brand svg path {
  fill: #232323;
}

.nav-wrapper ul.nav-list li {
  margin-left: 30px;
  padding: 20px 0;
  position: relative;
}

nav ul.dropdown-list {
  list-style-type: none;
  display: block;
  padding: 6px 16px;
  position: absolute;
  width: max-content;
  z-index: 9999;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
}

.nav-wrapper ul.dropdown-list li {
  margin-left: 0;
  padding: 5px 0;
}

.nav-wrapper ul.nav-list li:hover .dropdown-list {
  opacity: 1;
  pointer-events: auto;
  animation: moveUp 0.5s ease-in-out forwards;
}

@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(20px);
  }
}

.hamburger {
  display: none;
}

.mobile .hamburger {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  cursor: pointer;
}

.mobile .hamburger span {
  background: grey;
  width: 28px;
  height: 2px;
  margin-bottom: 8px;
}

.mobile ul.nav-list {
  background: -webkit-linear-gradient(45deg, #434343, #000000);
  background: linear-gradient(45deg, #434343, #000000);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
}

.hamburger,
.brand {
  z-index: 9999;
}

.mobile ul.nav-list.open {
  opacity: 1;
  pointer-events: auto;
}

.mobile .hamburger span {
  transform-origin: left;
  transition: all 0.3 ease-in-out;
}

.mobile ul.dropdown-list {
  position: relative;
  background: transparent;
  text-align: center;
  height: 0;
  overflow-y: hidden;
  transition: opacity 1s ease-in-out;
  padding-top: 0;
}

.mobile .nav-wrapper ul li:hover .dropdown-list {
  height: max-content;
  padding-top: 6px;
}

.mobile ul.nav-list li {
  margin-left: 0;
  text-align: center;
}

.hamburger span.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.active:nth-child(2) {
  opacity: 0;
}

.hamburger span.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}
</style>

