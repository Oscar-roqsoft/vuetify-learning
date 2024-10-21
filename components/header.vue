<template>
  <div :class="['navbar', isScrolled ? 'scrolled' : '']" transition="scroll-y-transition">
    <v-container :class="$vuetify.display.smAndDown ? 'px-2' : ''" style="min-height: 50px; position: relative;">
      <v-row
        no-gutters
        class="d-flex py-0 justify-space-between align-center"
      >
        <div @click="navigateTo('/')" style="font-family: Permanent Marker !important; font-size: 30px; z-index: 20; max-width: 150px; " class="logo pa-2 d-flex justify-center font-weight-bold">
          <img style="height: 50px;" class="w-100" src="https://res.cloudinary.com/dpehz96bs/image/upload/v1729374552/inhouse_logo-11_ol4jws.png" />
          <!-- <img style="height: 50px;" class="w-100" src="https://res.cloudinary.com/dpehz96bs/image/upload/v1727854037/inhouse_logo-05_myp2w6.png" /> -->
        </div>

        <v-col
          v-if="$vuetify.display.mdAndUp"
          class="d-flex align-center justify-end"
          cols=""
        >
          <v-btn-toggle
            rounded="0"
            text
            color="deep-green-accent-3"
            group
            theme="dark"
            variant="text"
          >
            <v-btn value="home" to="/" class="rounded text-capitalize font-weight-bold" style="font-size: 14px !important;">
              Home
            </v-btn>
            <v-btn to="/about" class="rounded text-capitalize font-weight-bold" value="left">
              About us
            </v-btn>
            <v-btn to="/project" class="rounded text-capitalize font-weight-bold" value="center">
              Project
            </v-btn>
            <v-btn to="/services" class="rounded text-capitalize font-weight-bold" value="right">
              Services
            </v-btn>
            <!-- <v-btn to="/contact" class="rounded text-capitalize font-weight-bold" value="justify">
              Contact Us
            </v-btn> -->
            <v-btn to="/contact" style="background: white; color: black" href="#contact" class="rounded ml-3 text-capitalize font-weight-bold" value="justify">
              Contact Us
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <div class="show">
          <drawer>
            <slot></slot>
          </drawer>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      drawer: null,
      open: false,
      isScrolled: false, // State to track scroll
    };
  },
  mounted() {
    gsap.fromTo(
      '.logo',
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleDrawer() {
      this.open = !this.open;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

.logo {
  font-size: 40px;
  color: white;
  font-weight: 700;
  opacity: 0;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #0275b2;
  z-index: 99;
  transition: box-shadow 0.3s ease; /* Smooth transition */
}

.scrolled {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Box shadow on scroll */
}

.show {
  display: none !important;
}

@media only screen and (max-width: 960px) {
  .logoTexta {
    font-size: 23px !important;
    line-height: 30px !important;
  }

  .show {
    display: flex !important;
  }
}
</style>
