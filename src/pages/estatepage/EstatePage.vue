<template>
  <div class="house-details">
    <div class="container-booking">

      <div class="leftside">
        <div class="main-block">
          <div class="booking-img">
            <BookingImg />
          </div>
          <div class="booking-description">
            <BookingDescription />
          </div>
          <div class="booking-rules">
            <BookingRules />
          </div>
          <div class="booking-features">
            <BookingFeatures />
          </div>
          <div class="booking-reviews">
            <BookingReviews />
          </div>
          <div class="booking-maps">
            <BookingMaps />
          </div>
          <div class="booking-info">
            <BookingInfo />
          </div>
        </div>
      </div>
      <div class="rightside">
        <div class="sidebar">

        </div>
      </div>

    </div>
  </div>
</template>

<script>

import BookingImg from './components/BookingImg';
import BookingDescription from './components/BookingDescription';
import BookingRules from './components/BookingRules';
import BookingFeatures from './components/BookingFeatures';
import BookingReviews from './components/BookingReviews';
import BookingMaps from './components/BookingMaps';
import BookingInfo from './components/BookingInfo';



export default {
  name: 'IndexPage',
  components: {
    BookingImg,
    BookingDescription,
    BookingRules,
    BookingFeatures,
    BookingReviews,
    BookingMaps,
    BookingInfo,
  }
}

</script>

<style>
.house-details {
  width: 80%;
  margin: 0 auto;
  /* Центрирует house-details по горизонтали */
}

.container-booking {
  gap: 20px;
  Padding-top:65px;
    display: grid;
  grid-template-columns: 60% 25%;
  /* Расстояние между колонками */
  justify-content: center;
}

.leftside,
.rightside {
  display: flex;
  align-items: stretch;
  /* Выравнивание по высоте */
}

.leftside {
  height: 100vh;
  background-color: aqua;
}

.rightside {
  height: 100vh;
    background-color: rgb(255, 0, 0);
}

.main-block,
.sidebar {
  width: 100%;
  height: 100%;
}
.booking-img {
  width: 100%;
  height: 600px;
}
</style>
