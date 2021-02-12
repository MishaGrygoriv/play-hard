<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="item in items" :key="item.img">
        <img class="carousel__img" :src="item.img" alt="img" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { httpService } from "../../http";
export default {
  name: "SlickCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      // top: "",
      settings: {
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
      items: [
        {
          img: "https://picsum.photos/id/237/800/450",
        },
        {
          img: "https://picsum.photos/id/238/800/450",
        },
        {
          img: "https://picsum.photos/id/239/800/450",
        },
        {
          img: "https://picsum.photos/id/240/800/450",
        },
        {
          img: "https://picsum.photos/id/241/800/450",
        },
        {
          img: "https://picsum.photos/id/242/800/450",
        },
        {
          img: "https://picsum.photos/id/243/800/450",
        },
        {
          img: "https://picsum.photos/id/244/800/450",
        },
      ],
    };
  },
  computed: {
    ...mapState("games", ["topGames"]),
  },
  methods: {
    ...mapActions("games", ["fetchTopGames"]),
  },
  async created() {
    const topGames = await httpService.getTopGames();
    console.log(topGames.results);
  },
  // async created() {
  //   const topGames = await httpService.getTopGames();
  //   //   // await this.fetchTopGames;
  //   console.log(httpService.getTopGames());
  //   console.log(topGames.results);
  //   //   const topGames = await httpService.getTopGames();
  //   //   // this.top = topGames.results.slice(0, 10);
  //   //   this.top = topGames.results.genres;
  //   //   console.log(this.top);
  // },
};
</script>
