<template>
  <div>
    <IndexIMG />
    <IndexText />
    <IndexIMGLast />
    <IndexTextLast />
  </div>
  </template>

<script>

import IndexIMG from './components/IndexIMG';
import IndexIMGLast from './components/IndexIMGLast';
import IndexText from './components/IndexText';
import IndexTextLast from './components/IndexTextLast';


export default {
  name: 'IndexPage',
  components: {
    IndexIMG,
    IndexIMGLast,
    IndexText,
    IndexTextLast,
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
