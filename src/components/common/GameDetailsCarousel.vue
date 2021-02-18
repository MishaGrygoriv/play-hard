<template>
  <div class="details-carousel">
    <VueSlickCarousel
      class="details-carousel__wrapper _big"
      ref="slider-big"
      @beforeChange="syncSliders"
      :arrows="false"
      v-if="screenshots && screenshots.length > 1"
    >
      <div
        class="details-carousel__img-wrapper"
        v-for="(image, idx) in screenshots"
        :key="idx"
      >
        <img class="details-carousel__img" :src="image.image" alt="img" />
      </div>
      /*...*/
    </VueSlickCarousel>
    <VueSlickCarousel
      class="details-carousel__wrapper"
      ref="slider-thumb"
      @beforeChange="syncSliders"
      :slidesToShow="3"
      :focusOnSelect="true"
      v-if="screenshots && screenshots.length > 1"
    >
      <div
        class="details-carousel__img-wrapper"
        v-for="(image, idx) in screenshots"
        :key="idx"
      >
        <img class="details-carousel__img" :src="image.image" alt="img" />
      </div>
      /*...*/
    </VueSlickCarousel>
  </div>
</template>
<script>
import { httpService } from "../../http/httpService";
import { mapActions, mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "GameDetailsCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      screenshots: "",
      settings: {
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
      },
    };
  },
  computed: {
    ...mapState("games", ["gameDetails", "loading", "screenShotsGames"]),
  },
  methods: {
    ...mapActions("games", ["getGameDetails", "fetchScreenShotsGames"]),
    syncSliders(currentPosition, nextPosition) {
      this.$refs["slider-big"].goTo(nextPosition);
      this.$refs["slider-thumb"].goTo(nextPosition);
    },
  },
  async created() {
    const { $route, getGameDetails, fetchScreenShotsGames } = this;
    const { id } = $route.params;
    getGameDetails(id);
    fetchScreenShotsGames(id);
    const screenGames = await httpService.getScreenShotsGames(
      this.$route.params.id
    );
    this.screenshots = screenGames.results;
    console.log(this.screenshots);
  },
};
</script>
<style lang="scss">
.details-carousel {
  &__wrapper {
    max-width: 550px;
    width: 100%;
    &._big {
      margin-bottom: 20px;
    }
  }
  &__img-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 55%;
    border-radius: 10px;
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
