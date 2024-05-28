<!-- src/pages/blogspage/BlogsPage.vue -->
<template>
  <div class="detail-panel panel">
    <div class="reviews-section">
      <div class="reviews-rating">
        <div class="reviews-main">
          <div class="reviews-top">
            <div class="reviews-title">
              <div class="big-bold-title">Отзывы</div>
            </div>
          </div>
          <div class="reviews-empty-text">В настоящее время пока никто не оставил отзыв на данный объект</div>
        </div>
      </div>
      <div class="reviews-comments">
        <div class="comments-block"></div>
      </div>
    </div>
    <div class="placeholder-loader-content" style="display: none;">
      <div class="info-map">
        <div class="loader-wrapper">
          <div class="loader-circle"></div>
        </div>
        <div class="info-details">
          <div class="subtitle-info"></div>
          <div class="flex-between-info">
            <div class="type-info"></div>
            <div class="type-info"></div>
          </div>
        </div>
      </div>
      <div class="flex-end-info">
        <div class="type-info"></div>
        <div class="type-info"></div>
        <div class="type-info"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BlogsPage'
}
</script>

<style scoped>
.detail-panel {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 1rem;

}

.reviews-rating {
  text-align: center;
  /* Чтобы разместить отзывы по центру */
}

.reviews-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.reviews-empty-text {
  font-size: 14px;
  color: #999999;
  margin-top: 20px;
text-align: start;
}

.reviews-comments {
  margin-top: 20px;
}

</style>

