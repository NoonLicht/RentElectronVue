<template>
  <div>
    <GlobalHeader />
    <router-view /> <!-- Оставляем только router-view -->
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader.vue'

export default {
  name: 'App',
  components: {
    GlobalHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
