<template>
  <header class="sticky top-0 z-10" id="header">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="w-16">
        <a @click="(event) => this.handleScroll(event, '#hero')" href="#hero">
          <img class="w-full h-auto" src="/logo-white.svg" alt="" />
        </a>
      </div>
      <nav>
        <button
          @click="toggleMenu"
          class="md:hidden block text-white focus:outline-none"
        >
          <Menu class="h-8 w-8" />
        </button>
        <ul
          :class="
            isMenuOpen
              ? 'flex flex-col absolute left-0 top-16 py-8 md:py-0 md:top-0 w-full md:flex-row md:relative md:w-auto'
              : 'hidden md:flex'
          "
          class="nav-list items-center space-y-4 md:space-y-0 md:space-x-6 transition duration-200"
        >
          <li>
            <a
              @click="(event) => this.handleScroll(event, '#form')"
              href="#mission"
              class="join-btn text-gray-800 font-bold py-1 px-4 rounded-full inline-block uppercase tracking-wide"
              >Join the waitlist</a
            >
          </li>
          <li>
            <a
              class="uppercase font-bold tracking-wide"
              @click="(event) => this.handleScroll(event, '#mission')"
              href="#mission"
              >Mission</a
            >
          </li>
          <li>
            <a
              class="uppercase font-bold tracking-wide"
              @click="(event) => this.handleScroll(event, '#technology')"
              href="#technology"
              >Technology</a
            >
          </li>
          <li>
            <a
              class="uppercase font-bold tracking-wide"
              @click="(event) => this.handleScroll(event, '#contact')"
              href="#contact"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
header {
  height: 64px;
  color: white;
  background-color: #b07d7d;
}

.nav-list {
  background-color: #b07d7d;
}

.join-btn {
    background-color: #ffd080;
}
</style>

<script>
import Menu from "@/components/Icons/Menu.vue";
export default {
  name: "Header",
  components: {
    Menu,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    handleScroll: function (event, section) {
      event.preventDefault();
      const heroSection = document.querySelector(section);
      heroSection.scrollIntoView({ behavior: "smooth" });
      if (section !== "#hero") {
        this.toggleMenu();
      }
    },
    toggleMenu: function () {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
