<template>
  <div class="content-mini-active">
    <div class="product-card">
      <div class="image-card">
        <img src="@/assets/img/1.jpg" alt="product-image" />
      </div>
      <div class="details-container">
        <div class="left-details">
          <div class="product-header">
            <header class="product-title">
              <router-link to="/object">
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
            <span class="type">0.0<div class="star"></div></span>
            <span class="type"></span>
          </div>
          <div class="price-details">
            <span class="price" style="color: red;">7 800 ₽</span>
            <span class="type">за сутки</span>
          </div>
        </div>
      </div>
      <div class="down-details">
        <div class="down-statistic">
          <canvas ref="chart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    const today = new Date();
    const formattedToday = today.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });

    const numDays = 7; // количество дней, которое должно отображаться на графике
    const labels = [formattedToday]; // массив меток для оси X
    for (let i = 1; i < numDays; i++) {
      const nextDay = new Date(today.getTime() + i * 24 * 60 * 60 * 1000); // добавляем i дней к текущей дате
      const formattedNextDay = nextDay.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
      labels.push(formattedNextDay);
    }

    this.chart = new Chart(this.$refs.chart, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Просмотры',
          data: [0, 0, 0, 0, 0, 0, 0],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false,
          tension: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            }
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  },
  beforeUnmount() {
    this.chart.destroy();
  },
}

</script>



<style scoped>
/* @import '@/assets/css/content.css'; */
.content-mini-active {
  width: 100%;
  height: auto;
  /* Увеличено для размещения down-details */
}

.content-mini-active a {
  text-decoration: none;
  color: black;
}

.product-card {
  border-radius: .3rem;
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
  background-color: #ffffff;
  cursor: pointer;
  display: block;
}

.product-card:hover {
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.5);
}

.image-card {
  border-radius: .3rem;
  width: 100%;
  height: 250px;
  background-color: white;
  overflow: hidden;
  transition: transform .2s ease-in-out;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease-in-out;
}

.image-card img:hover {
  transform: scale(1.1);
}

.details-container {
  display: flex;
  width: 100%;
}

.left-details {
  width: 70%;
  /* Пропорциональное деление пространства */
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
}

.right-details {
  width: 30%;
  /* Пропорциональное деление пространства */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px;
}

.left-details header {
  font-family: inter, sans-serif;
  letter-spacing: 0px;
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
}

.right-details .type,
.left-details .type {
  font-family: inter, sans-serif;
  letter-spacing: 0px;
  font-size: 16px;
  color: gray;
}

.left-details .desc {
  font-size: 16px;
}

.product-title h4 {
  font-size: 22px;
  margin-block-start: 1em;
  margin-block-end: 1em;
}

.product-info h4 {
  color: black;
  font-size: 14px;
  margin-block-start: .11em;
  margin-block-end: .1em;
}

.product-info h5 {
  font-size: 14px;
}

.product-info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.reviews {
  display: flex;
  align-items: center;
}

.reviews .star {
  margin-top: 2.2rem;
}

.price-details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 10px;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
}

.star {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(250, 200, 100, 1);
  background: linear-gradient(to right, rgba(250, 200, 100, 1) 100%, yellow);
  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.down-details {
  width: 100%;
  padding: 10px;
  /* Добавлено для улучшения внешнего вида */
  background-color: #f9f9f9;
  /* Добавлено фоновый цвет */
  border-top: 1px solid #ccc;
  /* Добавлено для разделения с остальной карточкой */
}
</style>
