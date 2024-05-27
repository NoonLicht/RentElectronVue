<template>
  <div>
    <GlobalHeader />
    <div class="coms-main">
      <div class="cons-filter">
        <div class="filter-container">
          <Filters />
        </div>
        <div class="mini-container">
          <div style="margin-top: 65px;">
            <HouseMini />
            <HouseMini />
            <HouseMini />
            <HouseMini />
            <HouseMini />
            <HouseMini />
            <HouseMini />
            <HouseMini />
          </div>
        </div>
      </div>
      <div class="cons-maps">
        <YandexMap />
      </div>
    </div>
  </div>
</template>

<script>
import GlobalHeader from '../../components/GlobalHeader'
import YandexMap from './components/YandexMap'
import Filters from './components/Filters'
import HouseMini from './components/HouseMini'


export default {

  components: {
    GlobalHeader,
    YandexMap,
    Filters,
    HouseMini,
  },

}
</script>

<style scoped>
@import '@/assets/css/index.css';

.mini-container {
  gap: 10px;
}

.mini-container {

  width: 100%;
  /* Отступ вокруг каждого элемента */
  padding-bottom: 100px;
}

.coms-main {
  display: flex;
  height: 100vh;
  /* Высота на всю страницу */
}

.cons-filter {
  width: 65%;
  background-color: #f6f6f6;
  /* Цвет фона для фильтра */
  overflow-y: auto;
  display: flex;
  /* Используем Flexbox */
  justify-content: space-between;
  /* Размещаем элементы с равным расстоянием между ними */
  align-items: flex-start;
  /* Выравниваем элементы по верхнему краю */
}

.filter-container {
  background-color: #f6f6f6;
  width: 30%;
  height: 100vh;
  /* Высота фильтров минус отступы */
  overflow-y: auto;
  /* Включаем вертикальную прокрутку, если содержимое фильтров не помещается */
}

.mini-container {
  background-color: #ececec;
  height: 100vh;
  width: 70%;
  /* Высота фильтров минус отступы */
  overflow-y: auto;
  /* Включаем вертикальную прокрутку, если содержимое фильтров не помещается */
}

.cons-maps {
  width: 35%;
}

/* @import '~/assets/css/filter.css';
@import '~/assets/css/content.css'; */
</style>