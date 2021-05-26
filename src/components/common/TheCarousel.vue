<template>
  <VueSlickCarousel v-bind="settings">
    <div class="carousel__item" v-for="item in items" :key="item.path">
      <iframe
        class="carousel__video"
        allowfullscreen
        :src="item.path"
        frameborder="0"
        autoplay
        loop
      ></iframe>
    </div>
  </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "TheCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        accessibility: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
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
