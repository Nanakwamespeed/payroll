<template>
  <Sidenav
    :custom_class="color"
    :class="[isRTL ? 'fixed-end' : 'fixed-start']"
    v-if="showSidenav"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden"
  >
    <!-- nav -->
    <navbar
      :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :color="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="showNavbar"
    />
    <router-view />
    <app-footer v-show="showFooter" />
    <!-- <configurator
      :toggle="toggleConfigurator"
      :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
    /> -->
  </main>
</template>

<script>
import Sidenav from "./components/Sidenav";
// import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/components/Navbar.vue";
import AppFooter from "@/components/Footer.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Sidenav,
    // Configurator,
    Navbar,
    AppFooter,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    ...mapState([
      "isRTL",
      "color",
      "isAbsolute",
      "isNavFixed",
      "navbarFixed",
      "absolute",
      "showSidenav",
      "showNavbar",
      "showFooter",
      // "showConfig",
      // "hideConfigButton",
    ]),
  },
  // Move to the mounted() hook instead of beforeMount()
  mounted() {
    this.$store.state.isTransparent = "bg-transparent";

    const sidenav = document.getElementsByClassName("g-sidenav-show")[0];

    if (window.innerWidth > 1200 && sidenav) {
      sidenav.classList.add("g-sidenav-pinned");
    }
  },
};
</script>
