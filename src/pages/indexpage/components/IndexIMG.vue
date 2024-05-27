<template>
  <div class="bgimg-1">
    <!-- <GlobalHeader /> -->
      <div class="caption">
        <SearchBar />

      </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
// import GlobalHeader from './GlobalHeader.vue'

export default {
  components: {
    SearchBar,
    // GlobalHeader
  }
}
</script>

<style>
@import '@/assets/css/index.css';
</style>