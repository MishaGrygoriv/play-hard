<template>
  <div class="second-section">
    <ul class="second-section__list">
      <li class="second-section__item">
        <ps4-logo />
      </li>
      <li class="second-section__item">
        <xbox-one-logo />
      </li>
      <li class="second-section__item">
        <pc-gamer-logo />
      </li>
      <li class="second-section__item">
        <wii-logo />
      </li>
      <li class="second-section__item">
        <ps3-logo />
      </li>
      <li class="second-section__item">
        <xbox360-logo />
      </li>
    </ul>
    <div class="second-section__blocks-container">
      <div class="second-section__blocks">
        <div
          class="second-section__block"
          @click="
            scrollToTop();
            $router.push({ path: 'games' });
          "
        >
          <div class="second-section__top-wrapper">
            <a-icon class="second-section__icon" type="crown" />
            <h2 class="second-section__title">Top Games</h2>
          </div>
        </div>
        <div class="second-section__block">
          <div>
            <div class="second-section__img-wrapper _0">
              <img
                class="second-section__img"
                :src="topGamesList[0].background_image"
                alt="img"
                @click="
                  scrollToTop();
                  $router.push({
                    name: 'GameDetails',
                    params: { id: name.id },
                  });
                "
              />
            </div>
          </div>
          <div class="second-section__img-wrapper _1">
            <img
              class="second-section__img"
              :src="topGamesList[1].background_image"
              alt="img"
              @click="
                scrollToTop();
                $router.push({
                  name: 'GameDetails',
                  params: { id: name.id },
                });
              "
            />
          </div>
          <div class="second-section__img-wrapper _2">
            <img
              class="second-section__img"
              :src="topGamesList[2].background_image"
              alt="img"
              @click="
                scrollToTop();
                $router.push({
                  name: 'GameDetails',
                  params: { id: name.id },
                });
              "
            />
          </div>
          <div class="second-section__img-wrapper _3">
            <img
              class="second-section__img"
              :src="topGamesList[3].background_image"
              alt="img"
              @click="
                scrollToTop();
                $router.push({
                  name: 'GameDetails',
                  params: { id: name.id },
                });
              "
            />
          </div>
          <div class="second-section__img-wrapper _4">
            <img
              class="second-section__img"
              :src="topGamesList[4].background_image"
              alt="img"
              @click="
                scrollToTop();
                $router.push({
                  name: 'GameDetails',
                  params: { id: name.id },
                });
              "
            />
          </div>
          <div class="second-section__img-wrapper _5">
            <img
              class="second-section__img"
              :src="topGamesList[5].background_image"
              alt="img"
              @click="
                scrollToTop();
                $router.push({
                  name: 'GameDetails',
                  params: { id: name.id },
                });
              "
            />
          </div>
          <div class="second-section__img-wrapper _6">
            <img
              class="second-section__img"
              :src="topGamesList[6].background_image"
              alt="img"
              @click="
                scrollToTop();
                $router.push({
                  name: 'GameDetails',
                  params: { id: name.id },
                });
              "
            />
          </div>
          <div class="second-section__img-wrapper _7">
            <img
              class="second-section__img"
              :src="topGamesList[7].background_image"
              alt="img"
              @click="
                scrollToTop();
                $router.push({
                  name: 'GameDetails',
                  params: { id: name.id },
                });
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Ps4Logo from "../../icons/Ps4Logo";
import XboxOneLogo from "../../icons/XboxOneLogo";
import PcGamerLogo from "../../icons/PcGamerLogo";
import WiiLogo from "../../icons/WiiLogo";
import Ps3Logo from "../../icons/Ps3Logo";
import Xbox360Logo from "../../icons/Xbox360Logo";
import { httpService } from "../../../http";

export default {
  name: "SecondSection",
  components: {
    Ps4Logo,
    XboxOneLogo,
    PcGamerLogo,
    WiiLogo,
    Ps3Logo,
    Xbox360Logo,
  },
  data() {
    return {
      idGames: [463723, 58751, 41494, 437059, 303576, 440081, 452642, 45775],
      topGamesList: [],
    };
  },
  computed: {
    ...mapState("games", ["topGames", "gameDetails"]),
  },
  methods: {
    ...mapActions("games", ["fetchTopGames", "getGameDetails"]),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  async created() {
    for (const id of this.idGames) {
      const singleGameDetail = await httpService.getGameDetails(id);
      this.topGamesList.push(singleGameDetail);
    }
    console.log("this.topGamesList", this.topGamesList);
    // this.idGamesList = pushIdGames(this.idGames.name1);
    // console.log(this.idGamesList);

    await this.fetchTopGames();
    this.getGameDetails();
    this.hitman = this.topGames.slice(8, 9);
    this.valhala = this.topGames.slice(2, 3);
    this.medium = this.topGames.slice(5, 6);
    this.cyberpunk = this.topGames.slice(0, 1);
    this.souls = this.topGames.slice(14, 15);
    this.speed = this.topGames.slice(18, 19);
    this.pathless = this.topGames.slice(15, 16);
    this.rising = this.topGames.slice(3, 4);
    this.spider = this.topGames.slice(4, 5);
  },
};
</script>
<style lang="scss">
.second-section {
  &__block {
    display: grid;
    width: 100%;
  }
  &__img-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 51%;
    width: 100%;
    &._0 {
      grid-row: 7/9;
      grid-column: 3/4;
    }
    &._1 {
      grid-row: 1/7;
      grid-column: 1/2;
    }
    &._2 {
      grid-row: 1/3;
      grid-column: 2/4;
    }
    &._3 {
      grid-row: 1/3;
      grid-column: 4/5;
    }
    &._4 {
      grid-row: 3/4;
      grid-column: 2/3;
    }
    &._5 {
      grid-row: 3/7;
      grid-column: 3/5;
    }
    &._6 {
      grid-row: 7/9;
      grid-column: 1/2;
    }
    &._7 {
      grid-row: 4/9;
      grid-column: 2/3;
    }
  }
  &__list {
    @include flex(space-between, start);
    padding: 50px 28px;
  }
  &__top-wrapper {
    @include flex(center, center, column);
  }
  &__icon {
    color: $text-color;
    margin-bottom: 24px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  &__title {
    @include text($H200, 400, $text-color);
    text-transform: uppercase;
  }
  &__big-img-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 51%;
    width: 100%;
    &._sec {
      padding-bottom: 98.4%;
    }
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
    cursor: pointer;
  }
}
</style>
