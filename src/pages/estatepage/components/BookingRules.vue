<!-- src/pages/blogspage/BlogsPage.vue -->
<template>
  <div class="detail-panel panel">
    <div class="rules tmp-font--medium">
      <div class="rules--title tmp-font--big_bold">Правила размещения</div>
      <div class="rules--top">
        <div class="item">
          <div class="clock">
            <div>
              <div class="clock-title">Заезд</div>
              <div class="in">после 15:00</div>
            </div>
            <div>
              <div class="clock-title">Отъезд</div>
              <div class="out">до 12:00</div>
            </div>
            <div class="item">
              <div class="clock-title">Минимальный срок проживания</div>
              <div class="min-time">от 2 суток</div>
            </div>
          </div>
        </div>

      </div>
      <div class="rules--list">
        <div class="item">
          <div class="icon"><span class="icon-app-child"></span></div> можно с
          детьми любого возраста
        </div>
        <div class="item">
          <div class="icon"><span class="icon-app-pets-ok"></span></div> можно с
          питомцами
        </div>
        <div class="item">
          <div class="icon"><span class="icon-app-party-ok"></span></div>
          вечеринки и мероприятия по согласованию с хозяином жилья
        </div>
        <div class="item">
          <div class="icon"><span class="icon-app-no-smoking1"></span></div>
          курение запрещено
        </div>
        <div class="item">
          <div class="icon"><span class="icon-app-doc-on"></span></div> владелец
          предоставляет отчетные документы о проживании по согласованию
        </div>
      </div><!---->
    </div>
  </div>

</template>

<script>
export default {
  name: 'BlogsPage'
}
</script>

<style scoped>
.rules {
  padding: 20px;
}

.clock {
  display: flex;
  flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
        max-width: calc(300% - 10px);
    padding: 4px 0;
    width: calc(235% - 10px);
}

.clock-title {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
}

.in, .out, .min-time {
  font-size: 14px;
}
.rules--title {
  font-size: 24px;
    font-weight: bold;
  margin-bottom: 10px;
}

.rules--top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.rules--top .item {
  flex-basis: 48%;
}

.rules--list .item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 15px;
}

.rules--list .item .icon {
  margin-right: 10px;
}

.rules--list .item .icon span {
  font-size: 24px;
}

.rules--deposit {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 15px;
}

.rules--deposit .price {
  font-size: 18px;
  margin-right: 10px;
}
</style>
