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
        <div class="game-details__img-wrapper">
          <img
            class="game-details__img"
            :src="gameDetails.background_image"
            alt="img"
          />
        </div>
        <!-- <div class="game-details__video-wrapper">
          <video
            class="game-details__video"
            loop
            autoplay
            controls
            muted
            type="video/mp4"
            :src="video"
          ></video>
        </div> -->
        <div class="game-details__screenshots-wrapper">
          <game-details-carousel />
        </div>
      </div>
      <div class="game-details__col-right">
        <ul class="game-details__list">
          <li class="game-details__item">
            <h2 class="game-details__title">{{ gameDetails.name }}</h2>
          </li>
          <li class="game-details__item">
            <div class="game-details__rating-wrapper">
              <span
                v-if="gameDetails.rating === 0"
                class="game-details__rating"
              >
                {{ 1.1 }}
              </span>
              <span
                v-else-if="gameDetails.rating > 0"
                class="game-details__rating"
              >
                {{ gameDetails.rating }}
              </span>
              <a-rate
                v-if="gameDetails.rating === 0"
                class="game-details__rating-stars"
                :value="1"
              />
              <a-rate
                v-else-if="gameDetails.rating > 0"
                class="game-details__rating-stars"
                :value="Number(gameDetails.rating)"
                :count="5"
              />
              <a-progress
                class="game-details__progress"
                v-for="(name, idx) in rating"
                :key="idx"
                type="circle"
                :width="100"
                :stroke-color="{
                  '0%': '#f5e033',
                  '50%': '#87d068',
                }"
                :percent="Number(name.percent)"
              />
            </div>
          </li>
          <li class="game-details__item">
            <div class="game-details__item-wrapper">
              <div class="game-details__recommendation-value-wrapper">
                <span
                  class="game-details__recommendation-value _first"
                  v-for="(name, idx) in ratings"
                  :key="idx"
                >
                  {{ name.count }}
                </span>
              </div>
              <div class="game-details__recommendation-wrapper">
                <span
                  class="game-details__recommendation-text"
                  v-for="(name, idx) in ratings"
                  :key="idx"
                >
                  {{ name.title }}
                </span>
              </div>
              <div class="game-details__icons-wrapper">
                <happy-face class="game-details__icons _first" />
                <upset-face class="game-details__icons _second" />
                <sad-face class="game-details__icons _third" />
                <face-palm class="game-details__icons _fourth" />
              </div>
            </div>
          </li>
          <li class="game-details__item">
            <span class="game-details__subtitle">Genre:</span>
            <span
              class="game-details__text"
              v-for="(name, idx) in genre"
              :key="idx"
              >{{ name.name }}</span
            >
          </li>
          <li class="game-details__item">
            <span class="game-details__subtitle">Developer:</span>
            <span
              class="game-details__text"
              v-for="(name, idx) in developer"
              :key="idx"
              >{{ name.name }}</span
            >
          </li>
          <li class="game-details__item">
            <span class="game-details__subtitle">Released:</span>
            <span class="game-details__text">{{ gameDetails.released }}</span>
          </li>
          <li class="game-details__item">
            <span class="game-details__subtitle">Platforms:</span>
            <span
              class="game-details__text"
              v-for="(name, idx) in platforms"
              :key="idx"
              >{{ name.platform.name }}</span
            >
          </li>
          <li class="game-details__item">
            <span class="game-details__subtitle">Website:</span>
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
        <p class="game-details__descriptions" v-if="!readMore">
          {{ gameDetails.description_raw.substring(0, 300) + "..." }}
        </p>
        <p class="game-details__descriptions" v-else-if="readMore">
          {{ gameDetails.description_raw }}
        </p>
        <button
          @click="showMore"
          v-if="!readMore"
          class="game-details__btn-show"
        >
          Show more
        </button>
        <button
          @click="showLess"
          v-else-if="readMore"
          class="game-details__btn-show"
        >
          Show less
        </button>
        <!-- <p class="game-details__descriptions" v-if="!readMore">
          {{ gameDetails.description_raw.substring(0, 600) + "..." }}
        </p>
        <p class="game-details__descriptions" v-else-if="readMore">
          {{ gameDetails.description_raw }}
        </p>
        <button
          @click="showMore"
          v-if="!readMore"
          class="game-details__btn-show"
        >
          Show more
        </button>
        <button
          @click="showLess"
          v-else-if="readMore"
          class="game-details__btn-show"
        >
          Show less
        </button> -->
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
import HappyFace from "../components/icons/HappyFace";
import UpsetFace from "../components/icons/UpsetFace";
import SadFace from "../components/icons/SadFace";
import FacePalm from "../components/icons/FacePalm";

export default {
  name: "GameDetails",
  components: {
    CartButton,
    FavouriteButton,
    GameDetailsCarousel,
    HappyFace,
    UpsetFace,
    SadFace,
    FacePalm,
  },
  data() {
    return {
      id: null,
      screenshots: "",
      genre: "",
      platforms: "",
      developer: "",
      rating: "",
      ratings: "",
      readMore: false,
      // video: "",
    };
  },
  computed: {
    ...mapState("games", ["gameDetails", "loading", "screenShotsGames"]),
  },
  methods: {
    ...mapActions("games", ["getGameDetails", "fetchScreenShotsGames"]),
    showMore() {
      this.readMore = true;
    },
    showLess() {
      this.readMore = false;
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
    const details = await httpService.getGameDetails(this.$route.params.id);
    this.genre = details.genres;
    this.platforms = details.platforms;
    this.developer = details.developers;
    this.rating = details.ratings.slice(0, 1);
    this.ratings = details.ratings.sort((a, b) => (a.title > b.title ? 1 : -1));
    // this.video = details.clip.clip;
  },
};
</script>
<style lang="scss">
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
    @include flex(space-between, stretch);
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
  &__img-wrapper {
    border-radius: 10px;
    margin-right: 10px;
    overflow: hidden;
    position: relative;
    padding-bottom: 55%;
    margin-bottom: 30px;
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
  // &__video-wrapper {
  //   margin-bottom: 20px;
  // }
  // &__video {
  //   max-width: 550px;
  //   width: 100%;
  //   border-radius: 10px;
  //   &:focus {
  //     border: none;
  //     outline: none;
  //   }
  // }
  &__col-right {
    flex: 1;
    z-index: 2;
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
  &__list {
    margin-bottom: 56px;
  }
  &__item {
    margin-bottom: 15px;
    &:nth-child(2) {
      margin-bottom: 10px;
    }
    &:nth-child(3) {
      margin-bottom: 20px;
    }
    &:nth-child(8) {
      margin-bottom: 30px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__title {
    @include text($H300, 600, $light-color);
    margin-bottom: 0;
  }
  &__item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 363px;
  }
  &__recommendation-value-wrapper {
    display: flex;
    justify-content: space-around;
  }
  &__recommendation-wrapper {
    display: flex;
    justify-content: space-around;
    max-width: 343px;
  }
  &__icons-wrapper {
    display: flex;
    justify-content: space-around;
  }
  &__icons {
    &._fourth {
      width: 30px;
      height: 30px;
    }
  }
  &__subtitle {
    @include text($H60, 600, $yellow-color);
    margin-right: 10px;
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
  &__btn-show {
    height: 30px;
    padding: 0 5px;
    border: none;
    outline: none;
    border: 2px solid transparent;
    cursor: pointer;
    @include text($H40, 700, $dark-color);
  }
}
.ant-progress-circle .ant-progress-text {
  color: $light-color;
}
</style>
