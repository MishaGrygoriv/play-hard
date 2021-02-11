<template>
  <a-carousel class="carousel" arrows autoplay :autoplaySpeed="5000">
    <div
      slot="prevArrow"
      class="carousel__arrow custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div
      slot="nextArrow"
      class="carousel__arrow custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right-circle" />
    </div>
    <div class="carousel__item" v-for="item in items" :key="item.path">
      <iframe
        class="carousel__video"
        allowfullscreen
        :src="item.path"
        frameborder="0"
        autoplay
        loop
      ></iframe>
      <!-- <img
        class="carousel__img"
        src="https://picsum.photos/id/237/800/350"
        alt=""
      /> -->
    </div>
  </a-carousel>
</template>
<script>
export default {
  name: "TheCarousel",
  data() {
    return {
      items: [
        {
          path: "https://www.youtube.com/embed/hr6aEhU-KhI",
        },
        {
          path: "https://www.youtube.com/embed/2F1QbcZLuHk",
        },
        {
          path: "https://www.youtube.com/embed/gTCdF-c47ZI",
        },
        {
          path: "https://www.youtube.com/embed/CcsZHPdMr1M",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.carousel {
  background: #1c1c1c;
  overflow: hidden;
  &__item {
    width: 100%;
    height: 100%;
    // position: relative;
    // padding-bottom: 50%;
  }
  &__img {
    width: 100%;
  }
  &__video {
    width: 100%;
    min-height: 550px;
    height: 100%;
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
  }
}
.ant-carousel {
  .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .custom-slick-arrow:before {
    display: none;
  }
  .custom-slick-arrow:hover {
    opacity: 0.5;
  }
}
</style>
