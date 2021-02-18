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
    <div class="second-section__container">
      <div class="second-section__blocks-container">
        <div class="second-section__blocks-wrapper">
          <div class="second-section__first-block-wrapper">
            <div
              class="second-section__small-block _bg-hover"
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
            <div
              class="second-section__big-block"
              v-for="name in topGamesList.slice(7)"
              :key="name.id"
            >
              <div class="second-section__big-img-wrapper">
                <img
                  class="second-section__img"
                  :src="name.background_image"
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
          <div class="second-section__second-block-wrapper">
            <div class="second-section__big-block">
              <div class="second-section__big-img-wrapper">
                <img
                  class="second-section__img"
                  :src="topGamesList[2].background_image"
                  alt="img"
                  @click="
                    scrollToTop();
                    $router.push({
                      name: 'GameDetails',
                      params: { id: topGamesList[2].id },
                    });
                  "
                />
              </div>
            </div>
            <div
              class="second-section__small-block"
              v-for="name in topGamesList.slice(4, 5)"
              :key="name.id"
            >
              <div class="second-section__small-img-wrapper">
                <img
                  class="second-section__img"
                  :src="name.background_image"
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
        <div class="second-section__big-block _right-block">
          <div class="second-section__big-img-wrapper">
            <img
              v-for="name in topGamesList.slice(5, 6)"
              :key="name.id"
              class="second-section__img"
              :src="name.background_image"
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
    <div class="second-section__container">
      <div class="second-section__blocks-container">
        <div class="second-section__blocks-wrapper">
          <div class="second-section__first-block-wrapper">
            <div
              class="second-section__small-block"
              v-for="name in topGamesList.slice(0, 2)"
              :key="name.id"
            >
              <div class="second-section__small-img-wrapper">
                <img
                  class="second-section__img"
                  :src="name.background_image"
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
          <div class="second-section__second-block-wrapper">
            <div
              class="second-section__small-block"
              v-for="name in topGamesList.slice(4, 6)"
              :key="name.id"
            >
              <div class="second-section__small-img-wrapper">
                <img
                  class="second-section__img"
                  :src="name.background_image"
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
      <div class="second-section__sec-right-block">
        <div
          class="second-section__big-img-wrapper _sec"
          v-for="name in topGamesList.slice(3, 4)"
          :key="name.id"
        >
          <img
            class="second-section__img"
            :src="name.background_image"
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
  &__container {
    display: flex;
  }
  &__list {
    @include flex(space-between, start);
    padding: 50px 28px;
  }
  &__blocks-container {
    display: flex;
  }
  &__blocks-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  &__first-block-wrapper,
  &__second-block-wrapper {
    display: flex;
  }
  &__small-block {
    background-color: $side-bar-bg-color;
    min-width: 285px;
    width: 100%;
    min-height: 295px;
    height: 100%;
    @include flex(center, center);
    &._bg-hover {
      transition: background-color 0.5s ease;
      &:hover {
        background-color: $social-hover-color;
      }
    }
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
  &__small-img-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 103%;
    width: 100%;
  }
  &__big-block {
    background-color: $side-bar-bg-color;
    min-width: 570px;
    width: 100%;
    min-height: 295px;
    height: 100%;
    display: flex;
    &._right-block {
      background-color: $side-bar-bg-color;
      min-width: 315px;
      width: 100%;
      min-height: 590px;
      height: 100%;
    }
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
  &__sec-right-block {
    background-color: $side-bar-bg-color;
    min-width: 560px;
    width: 100%;
    min-height: 590px;
    height: 100%;
  }
}
</style>
