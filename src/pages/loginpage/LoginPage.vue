<template>
  <div class="container">
    <div class="left-img">
      <ImgModule imageSrc="./img/LoginIMG.png" altText="Description of the image" />
    </div>
    <div class="right-module">
      <LoginModule />
    </div>
  </div>
</template>

<script>
import ImgModule from './components/ImgModule.vue';
import LoginModule from './components/LoginModule.vue';

export default {
  name: 'App',
  components: {
    ImgModule,
    LoginModule
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  /* Занимает всю высоту окна браузера */
}

.left-img,
.right-module {
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 65px; */
}

.left-img {
  width: 40%;
  /* Пример фона, можно удалить */
}

.right-module {
  width: 60%;
  /* Пример фона, можно удалить */
}


</style>
