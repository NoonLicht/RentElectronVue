<template>
  <nav class="nav" :class="{ 'affix': isAffixed }">
    <div class="container-head">
      <div class="logo">
        <router-link to="/">RentHub</router-link> <!-- Используем router-link для перехода на главную страницу -->
      </div>
      <div id="mainListDiv" class="main_list" :class="{ 'show_list': isMenuOpen }">
        <ul class="navlinks">
          <li><router-link to="/">Home</router-link></li>
          <!-- Используем router-link для перехода на главную страницу -->
          <li><router-link to="/map">Map</router-link></li>
          <!-- Используем router-link для перехода на страницу карты -->
          <li><router-link to="/about">About</router-link></li>
          <!-- Пример для другой страницы, которой у вас может не быть -->
          <li><router-link to="/login">Login</router-link></li>
          <!-- Пример для другой страницы, которой у вас может не быть -->
          <li><router-link to="/profile">Profile</router-link></li>
          <!-- Пример для другой страницы, которой у вас может не быть -->
        </ul>
      </div>
      <span class="navTrigger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GlobalHeader',
  data() {
    return {
      isMenuOpen: false,
      isAffixed: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      if (window.scrollY > 50) {
        this.isAffixed = true;
      } else {
        this.isAffixed = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
@import '../assets/css/header.css'
</style>
