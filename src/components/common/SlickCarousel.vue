<template>
  <VueSlickCarousel v-bind="settings" v-if="topGames && topGames.length > 1">
    <div class="slick-carousel" v-for="game in topGames" :key="game.id">
      <div class="slick-carousel__img-wrapper">
        <img
          class="slick-carousel__img"
          :src="game.background_image"
          alt="img"
          @click="
            scrollToTop();
            $router.push({ name: 'GameDetails', params: { id: game.id } });
          "
        />
      </div>
    </div>
  </VueSlickCarousel>
  <!-- <VueSlickCarousel v-bind="settings" v-if="top && top.length > 1">
      <div v-for="item in items" :key="item.img" v-for="game in top" :key="game.id">
        <img class="carousel__img" :src="item.img" alt="img" />
      </div>
    </VueSlickCarousel> -->
</template>

<script>
import { mapActions, mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import { httpService } from "../../http";
export default {
  name: "SlickCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      // top: [],
      settings: {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    };
  },
  computed: {
    ...mapState("games", ["topGames"]),
  },
  methods: {
    ...mapActions("games", ["fetchTopGames"]),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  async created() {
    await this.fetchTopGames();
    // this.top = this.topGames.slice(0, 20);
    // console.log(this.topGames);
  },
};
</script>
<style lang="scss">
.slick-carousel {
  &__img-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 75%;
    cursor: pointer;
  }
  &__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
