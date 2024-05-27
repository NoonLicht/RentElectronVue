<template>
  <div class="image-container"></div>
</template>

<script>
export default {
  name: 'ImgModule'
};
</script>

<style scoped>
.image-container {
  width: 95%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.image-container {
  background-image: url("../img/LoginIMG.png");
}
</style>
