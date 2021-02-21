<template>
  <div class="game-details">
    <div class="page-art">
      <div
        class="page-art__colored"
        :style="{
          zIndex: `1`,
          height: `500px`,
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url(${gameDetails.background_image})`,
        }"
      ></div>
    </div>
    <div class="game-details__wrapper">
      <div class="game-details__col-left">
        <!-- <div class="game-details__img-wrapper">
          <img
            class="game-details__img"
            :src="gameDetails.background_image"
            alt="img"
          />
        </div> -->
        <div class="game-details__video-wrapper">
          <video
            class="game-details__video"
            loop
            autoplay
            controls
            muted
            type="video/mp4"
            :src="video"
          ></video>
        </div>
        <div class="game-details__screenshots-wrapper">
          <game-details-carousel />
          <!-- <div v-for="(image, idx) in screenshots" :key="idx">
          <img
            class="game-details__img-screenshots"
            :src="image.image"
            alt="img"
          />
        </div> -->
        </div>
      </div>
      <div class="game-details__col-right">
        <ul class="game-details__list">
          <li class="game-details__item">
            <h2 class="game-details__title">{{ gameDetails.name }}</h2>
          </li>
          <li class="game-details__item">
            <div class="game-details__rating-wrapper">
              <span class="game-details__rating">
                {{ gameDetails.rating }}
              </span>
              <a-rate
                class="game-details__rating-stars"
                :default-value="gameDetails.rating"
              />
              <a-progress
                class="game-details__progress"
                type="circle"
                :width="100"
                :stroke-color="{
                  '0%': '#f5e033',
                  '100%': '#87d068',
                }"
                :percent="Number(gameDetails.metacritic)"
              />
            </div>
          </li>
          <li class="game-details__item">
            Genre:
            <span
              class="game-details__text"
              v-for="(name, idx) in genre"
              :key="idx"
              >{{ name.name }}</span
            >
          </li>
          <li class="game-details__item">
            Developer:
            <span
              class="game-details__text"
              v-for="(name, idx) in developer"
              :key="idx"
              >{{ name.name }}</span
            >
          </li>
          <li class="game-details__item">
            Released:
            <span class="game-details__text">{{ gameDetails.released }}</span>
          </li>
          <li class="game-details__item">
            Platforms:
            <span
              class="game-details__text"
              v-for="(name, idx) in platforms"
              :key="idx"
              >{{ name.platform.name }}</span
            >
          </li>
          <li class="game-details__item">
            Website:
            <a
              class="game-details__website-link"
              :href="gameDetails.website"
              target="_blank"
              >{{ gameDetails.website }}</a
            >
          </li>
          <li class="game-details__item">
            <div class="game-details__btn-wrapper">
              <cart-button class="game-details__btn" />
              <favourite-button class="game-details__favourite-btn" />
            </div>
          </li>
        </ul>
        <h2 class="game-details__description-title">Description</h2>
        <p class="game-details__descriptions">
          {{ gameDetails.description_raw }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { httpService } from "../http/httpService";
import { mapActions, mapState } from "vuex";
import CartButton from "../components/common/CartButton.vue";
import FavouriteButton from "../components/common/FavouriteButton.vue";
import GameDetailsCarousel from "../components/common/GameDetailsCarousel.vue";

export default {
  name: "GameDetails",
  components: {
    CartButton,
    FavouriteButton,
    GameDetailsCarousel,
  },
  data() {
    return {
      id: null,
      screenshots: "",
      genre: "",
      platforms: "",
      developer: "",
      video: "",
    };
  },
  computed: {
    ...mapState("games", ["gameDetails", "loading", "screenShotsGames"]),
  },
  methods: {
    ...mapActions("games", ["getGameDetails", "fetchScreenShotsGames"]),
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
    const details = await httpService.getGameDetails(this.$route.params.id);
    this.genre = details.genres;
    this.platforms = details.platforms;
    this.developer = details.developers;
    this.video = details.clip.clip;
    console.log(this.video);
  },
};
</script>
<style lang="scss">
// .test {
//   background-image: linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),
//     linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5));
// }
.page-art {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 92.5%;
  background-color: #151515;
  &__colored {
    max-height: 100%;
    background-size: cover;
    width: 100%;
    height: 100%;
    background: no-repeat top;
    background-size: cover;
  }
}
.game-details {
  padding: 70px 0;
  &__wrapper {
    @include flex(space-between, space-between);
    width: 100%;
    height: 100%;
    max-height: 100%;
    background-size: cover;
    background: no-repeat top;
    background-size: cover;
  }
  &__col-left {
    flex: 1;
    margin-right: 50px;
    z-index: 2;
  }
  &__col-right {
    flex: 1;
    z-index: 2;
  }
  // &__img-wrapper {
  //   border-radius: 10px;
  //   margin-right: 10px;
  //   overflow: hidden;
  //   position: relative;
  //   padding-bottom: 55%;
  // }
  // &__img {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // }
  &__video-wrapper {
    margin-bottom: 20px;
  }
  &__video {
    max-width: 550px;
    width: 100%;
    border-radius: 10px;
    &:focus {
      border: none;
      outline: none;
    }
  }
  &__list {
    margin-bottom: 56px;
  }
  &__item {
    @include text($H60, 600, $yellow-color);
    margin-bottom: 15px;
    &:nth-child(2) {
      margin-bottom: 10px;
    }
    &:nth-child(7) {
      margin-bottom: 30px;
    }
  }
  &__title {
    @include text($H300, 600, $light-color);
    margin-bottom: 0;
  }
  &__text {
    @include text($H60, 400, $light-color);
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    &:not(:last-child):after {
      content: ", ";
    }
  }
  &__website-link {
    @include text($H60, 400, $light-color);
    text-decoration: underline;
    transition: color 0.5s ease;
    &:hover {
      color: $yellow-color;
      text-decoration: underline;
    }
  }
  &__rating-wrapper {
    display: flex;
  }
  &__rating {
    @include text($H200, 600, $yellow-color);
    margin-right: 12px;
  }
  &__rating-stars {
    margin-right: 250px;
    svg {
      width: 12px;
    }
  }
  &__progress {
    @include text($H60, 600, $light-color);
  }
  &__btn-wrapper {
    display: flex;
  }
  &__btn {
    height: 47px;
    width: 217px;
    margin-right: 29px;
  }
  &__description-title {
    @include text($H200, 600, $yellow-color);
    margin-bottom: 29px;
  }
  &__descriptions {
    @include text($H40, 400, $text-color);
  }
}
.ant-progress-circle .ant-progress-text {
  color: $light-color;
}
</style>
