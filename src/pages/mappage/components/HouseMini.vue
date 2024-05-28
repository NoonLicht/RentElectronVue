<template>
  <div class="content-mini">
    <div class="product-card">
      <div class="image-card">
        <img src="@/assets/img/1.jpg" alt="product-image" />
      </div>
      <div class="left-details">
        <div class="product-header">
          <header class="product-title">
            <router-link to="/estate">
              <h4>"Прибрежная Идиллия"</h4>
            </router-link>
          </header>
          <section class="product-info">
            <span class="type">
              <a>Коттедж</a>
            </span>
            <span class="type">
              <a>6 гостей / 3 кровати / 500 м²</a>
            </span>
          </section>
        </div>
        <section class="product-description">
          <span class="desc">Москва, ул. Маршала Бирюзова</span>
          <span class="desc">Ближайшее метро: Парк Победы</span>
        </section>
      </div>
      <div class="right-details">
        <div class="reviews">
          <span class="type">4.5<div class="star"></div></span>
          <span class="type"></span>
        </div>
        <div class="price-details">

          <span class="price" style="color: red;">7 800 ₽</span>
          <span class="type">за сутки</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
@import '@/assets/css/content.css';
</style>
