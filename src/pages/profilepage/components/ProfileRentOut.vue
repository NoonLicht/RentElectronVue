<template>
  <div class="timeline">
    <div class="timeline-right" style="padding-left: 0px;">
      <button class="add-estate">
        Добавить недвижимость
      </button>
      <div class="album-rentout box">
        <div class="album-rentout-content">
          <RentOutMini />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RentOutMini from './RentOutMini'


export default {
  components: {
    RentOutMini,

  }
};
</script>

<style scoped>

.add-estate {
  border-radius: 4px;
    border: none;
  background-color: #709bea;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
  transition: transform 80ms ease-in;
}

.add-estate:active {
  transform: scale(0.95);
  box-shadow: 4px 4px 11px 0px rgba(34, 60, 80, 0.2) inset;
}

.add-estate:focus {
  outline: none;
}
.timeline {
  display: flex;
  padding-top: 20px;
  position: relative;
  z-index: 2;
}

.timeline-left {
  width: 310px;
  flex-shrink: 0;

}

.timeline-right {
  flex-grow: 1;
}

@media screen and (max-width: 768px) {
  .timeline {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }

  .timeline-right {
    padding-left: 0;
    margin-bottom: 20px;
  }

  .timeline-left {
    width: 100%;
  }
}

.album-rentout {

  margin-top: 20px;
}

.album-rentout .status-main {
  border: none;
  display: flex;
}

.album-rentout .intro-menu {
  margin-bottom: auto;
  margin-top: 5px;
}

.album-rentout-detail {
  display: flex;
  width: calc(100% - 110px);
  font-size: 15px;
  flex-direction: column;
  align-items: flex-start;
}

.album-rentout-title span {
  color: #1771d6;
  cursor: pointer;
  font-size: 15px;
}

.album-rentout-date {
  font-size: 15px;
  color: #595c6c;
  margin-top: 4px;
}

.album-rentout-content {
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: flex-start;
}

.album-rentout-photo {
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  margin-top: 10px;
}

.album-rentout-photos {
  display: flex;
  margin-top: 20px;
  max-height: 30vh;
}

.album-rentout-photos>.album-rentout-photo {
  width: 50%;
}

.album-rentout-right {
  width: 50%;
  margin-left: 10px;
  line-height: 0;
  display: flex;
  flex-direction: column;
}

.album-rentout-right .album-rentout-photo {
  height: calc(50% - 10px);
}

.album-rentout-actions {
  display: flex;
  font-size: 20px;
  padding: 0 20px 20px;
  flex-direction: row;
  align-items: flex-start;
}

.album-rentout-action {
  margin-right: 20px;
  text-decoration: none;
  color: #a2a4b4;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
}

.album-rentout-action:hover {
  color: #000000;
}

.album-rentout-action svg {
  width: 16px;
  margin-right: 6px;
}
</style>