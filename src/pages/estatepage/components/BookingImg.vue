<template>
  <div id="gallery" class="container" style="background-color: white;">
    <div id="gallery-box" :style="{ overflow: scrollMode === 'yes' ? 'scroll' : 'hidden', height: scaleValue + 'px' }">
      <a :href="currentImage" target="_blank" id="gallery-link">
        <div id="image-container">
          <img ref="galleryImg" :src="currentImage" id="gallery-img" :style="{ height: scaleValue + 'px' }" />
        </div>
      </a>
    </div>
    <div class="gallery-thumbnails">
      <div class="col-xs-12 no-pad thumbnails-container">
        <img v-for="(image, index) in images" :key="index" :src="image" :id="index + 1" class="img-responsive"
          @click="changeImage(index)" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://loremflickr.com/1920/1080/dog?lock=10",
        "https://loremflickr.com/1920/1080/dog?lock=20",
        "https://loremflickr.com/1920/1080/dog?lock=30",
        "https://loremflickr.com/1920/1080/dog?lock=40",
        "https://loremflickr.com/1920/1080/dog?lock=50",
        "https://loremflickr.com/1920/1080/dog?lock=60",
        "https://loremflickr.com/800/600/dog?lock=70",
        "https://loremflickr.com/800/600/dog?lock=80",
        "https://loremflickr.com/800/600/dog?lock=90",
        "https://loremflickr.com/800/600/dog?lock=10",
        "https://loremflickr.com/800/600/dog?lock=20",
        "https://loremflickr.com/800/600/dog?lock=30",
        "https://loremflickr.com/800/600/dog?lock=40",
        "https://loremflickr.com/800/600/dog?lock=50",
        "https://loremflickr.com/800/600/dog?lock=60",
        "https://loremflickr.com/800/600/dog?lock=70",
        "https://loremflickr.com/800/600/dog?lock=80",
        "https://loremflickr.com/800/600/dog?lock=90",
        "https://loremflickr.com/800/600/dog?lock=100"
      ],
      currentImageIndex: 0,
      displayMode: 'contain',
      scrollMode: 'no',
      scaleValue: 500 // начальное значение
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  methods: {
    changeImage(index) {
      this.currentImageIndex = index;
      this.$nextTick(() => {
        this.adjustImageSize();
      });
    },
    adjustImageSize() {
      const img = this.$refs.galleryImg;
      const container = img.parentElement;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const imgNaturalWidth = img.naturalWidth;
      const imgNaturalHeight = img.naturalHeight;

      const widthRatio = containerWidth / imgNaturalWidth;
      const heightRatio = containerHeight / imgNaturalHeight;

      const ratio = Math.max(widthRatio, heightRatio);
      img.style.width = imgNaturalWidth * ratio + 'px';
      img.style.height = imgNaturalHeight * ratio + 'px';
    }
  },
  mounted() {
    this.adjustImageSize();
    window.addEventListener('resize', this.adjustImageSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustImageSize);
  }
}
</script>

<style scoped>
label {
  color: #5d5dff;
}

#gallery {
  color: white;
}

#gallery-box {
  display: block;
  position: relative;
  width: 100%;
  overflow: scroll;
}

#gallery-box::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

#gallery-box::-webkit-scrollbar-track {
  background: #e5e5e5;
}

#gallery-box::-webkit-scrollbar-thumb {
  background: #5d5dff;
}

#gallery-box::-webkit-scrollbar-thumb:hover {
  background: #7d7dff;
}

#gallery-count {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  height: 50px;
  text-decoration: none;
}

#image-container {
  width: 100%;
  height: 100%;
}

#gallery-img {
  border-radius: 1rem;
  transition: 0.3s ease-in-out;
  object-fit: cover;
  width: 100%;
  height: 480px !important;
}

.gallery-thumbnails {
  display: flex;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 0px;
}

.gallery-thumbnails:hover {
  overflow-x: auto;
}

.gallery-thumbnails img {
  float: left;
  width: 100px !important;
  height: 56.25px !important;
  object-fit: cover;
  /* Устанавливаем масштабирование содержимого */
  cursor: pointer;
  padding: 0;
  filter: grayscale(1);
  margin-right: 15px;
  border-radius: 1rem;
}

.gallery-thumbnails img:hover {
  filter: none !important;
}

.thumbnails-container {
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;
}

.thumbnails-container::-webkit-scrollbar {
  height: 5px;
}

.thumbnails-container::-webkit-scrollbar-track {
  background: #e5e5e5;
}

.thumbnails-container::-webkit-scrollbar-thumb {
  background: #739ce7;
}

.thumbnails-container::-webkit-scrollbar-thumb:hover {
  background: #739ce7;
}
</style>
