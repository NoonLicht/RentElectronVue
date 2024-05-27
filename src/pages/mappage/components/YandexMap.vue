<template>
  <div ref="yandexMap" style="width: 100%; height: 100vh;"></div>
</template>

<script>
export default {
  name: 'YandexMap',
  mounted() {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=ad95be97-b299-4c89-83fa-89341a76855b&lang=ru_RU";
    script.onload = this.initMap;
    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map(this.$refs.yandexMap, {
            center: [55.76, 37.64],
            zoom: 10,
            controls: []
          });

          // Удаление контролов, если они присутствуют по умолчанию
          map.controls.remove('defaultSet'); // контроль масштаба


          // Добавление метки
          map.geoObjects.add(new window.ymaps.Placemark([55.76, 37.64], {
            balloonContent: 'Москва'
          }));
        });
      } else {
        console.error('Не удалось загрузить Яндекс.Карты');
      }
    }
  }
};
</script>

<style scoped>
/* ваши стили здесь */
</style>
