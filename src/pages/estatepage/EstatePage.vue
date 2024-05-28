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
        </div>
      </div>
      <div class="rightside">
        <div class="sidebar">
          <PriceObject />
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
import PriceObject from './components/PriceObject';



export default {
  name: 'IndexPage',
  components: {
    BookingImg,
    BookingDescription,
    BookingRules,
    BookingFeatures,
    BookingReviews,
    BookingMaps,
    PriceObject
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
  height: auto;
  padding: 10px;
  box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
  border-radius: 1rem;
}

.rightside {
  padding: 20px;
  margin-top: 65px;
  position: fixed;
    top: 0;
    right: 10%;
    width: 25%;
    /* Ширина блока */
    height: auto;
    box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
    overflow-y: auto;
    /* Разрешить вертикальную прокрутку внутри блока */
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
.booking-description {
  
  width: 100%;
  height: auto;
  display: flex;
  justify-content:center;
  box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
    border-radius: 1rem;
}

.booking-rules {
  margin-top: 20px;
  box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
    border-radius: 1rem;
}

.booking-features {
  margin-top: 20px;
  box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
    border-radius: 1rem;
}

.booking-reviews {
  margin-top: 20px;
  box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
    border-radius: 1rem;
}

.booking-maps {
  margin-top: 20px;
  width: 100%;
  height: 400px;
  box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
    margin-bottom: 50px;
}

</style>
