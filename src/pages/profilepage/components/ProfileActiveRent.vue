<template>
  <div class="timeline">
    <div class="timeline-right" style="padding-left: 0px;">
      <div class="album-active box">
        <div class="album-active-content">
          <ActiveRentMini />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActiveRentMini from './ActiveRentMini'


export default {
  components: {
    ActiveRentMini,

  }
};
</script>

<style scoped>
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

.album-active {

  margin-top: 20px;
}

.album-active .status-main {
  border: none;
  display: flex;
}

.album-active .intro-menu {
  margin-bottom: auto;
  margin-top: 5px;
}

.album-active-detail {
  display: flex;
  width: calc(100% - 110px);
  font-size: 15px;
  flex-direction: column;
  align-items: flex-start;
}

.album-active-title span {
  color: #1771d6;
  cursor: pointer;
  font-size: 15px;
}

.album-active-date {
  font-size: 15px;
  color: #595c6c;
  margin-top: 4px;
}

.album-active-content {
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: flex-start;
}

.album-active-photo {
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  margin-top: 10px;
}

.album-active-photos {
  display: flex;
  margin-top: 20px;
  max-height: 30vh;
}

.album-active-photos>.album-active-photo {
  width: 50%;
}

.album-active-right {
  width: 50%;
  margin-left: 10px;
  line-height: 0;
  display: flex;
  flex-direction: column;
}

.album-active-right .album-active-photo {
  height: calc(50% - 10px);
}

.album-active-actions {
  display: flex;
  font-size: 20px;
  padding: 0 20px 20px;
  flex-direction: row;
  align-items: flex-start;
}

.album-active-action {
  margin-right: 20px;
  text-decoration: none;
  color: #a2a4b4;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
}

.album-active-action:hover {
  color: #000000;
}

.album-active-action svg {
  width: 16px;
  margin-right: 6px;
}
</style>