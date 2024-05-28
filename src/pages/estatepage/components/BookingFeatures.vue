<!-- src/pages/blogspage/BlogsPage.vue -->
<template>
  <div class="detail-panel panel">
    <div modelvalue="true"
      short-description="Частный дом дизайнерский евроремонт и кухня-столовая сдаётся на минимальный срок от 1 до 2 суток. Заезд после 15:00, отъезд до 12:00">
      <div class="panel-head">
        <h1 class="panel-title big-bold">Основные удобства</h1>
      </div>
      <div class="panel-body often-props" itemprop="description">
        <div class="info-flex">
          <div class="info-list w-100">
            <p class="info-item-pad-sm item-props">
              <span class="icon-wifi no-bg"></span>
              беспроводной интернет Wi-Fi
            </p>
            <p class="info-item-pad-sm item-props">
              <span class="icon-towels no-bg"></span>
              полотенца
            </p>
            <p class="info-item-pad-sm item-props">
              <span class="icon-bedclothes no-bg"></span>
              постельное белье
            </p>
            <p class="info-item-pad-sm item-props">
              <span class="icon-repair no-bg"></span>
              дизайнерский ремонт
            </p>
            </div>
            <div class="info-list w-100">

              <p class="info-item-pad-sm item-props">
                <span class="icon-condition1 no-bg"></span>
                кондиционер
              </p>
              <p class="info-item-pad-sm item-props">
                <span class="icon-tv1 no-bg"></span>
                телевизор
              </p>
              <p class="info-item-pad-sm item-props">
                <span class="icon-microwave1 no-bg"></span>
                микроволновка
              </p>
              <p class="info-item-pad-sm item-props">
                <span class="icon-kettle no-bg"></span>
                электрический чайник
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>


<style scoped>


.panel-title {
  font-size: 24px;
  font-weight: bold;
}

.big-bold {
  font-size: 24px;
  font-weight: bold;
}

.panel-body {
  padding: 20px;
}

.info-flex {
  display: flex;
}

.info-list {
  flex: 1;
}

.info-item-pad-sm {
  padding: 5px;
}

.item-props {
  display: flex;
  align-items: center;
}

.icon-wifi,
.icon-towels,
.icon-bedclothes,
.icon-repair,
.icon-condition1,
.icon-tv1,
.icon-microwave1,
.icon-kettle {
  width: 25px;
  height: 25px;
  background-size: cover;
  margin-right: 10px;
}

.button-md {
  font-size: 16px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-md:hover {
  background-color: #0056b3;
}

p {
  font-size: 14px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-left: -3rem;
}
</style>
