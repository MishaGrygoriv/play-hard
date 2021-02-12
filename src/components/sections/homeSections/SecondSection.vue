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
      <div class="second-section__blocks-wrapper">
        <div class="second-section__first-block-wrapper">
          <div class="second-section__small-block"></div>
          <div class="second-section__big-block"></div>
        </div>
        <div class="second-section__second-block-wrapper">
          <div class="second-section__big-block"></div>
          <div class="second-section__small-block"></div>
        </div>
      </div>
      <div class="second-section__big-block _right-block"></div>
    </div>
    <div class="second-section__blocks-container">
      <div class="second-section__blocks-wrapper">
        <div class="second-section__first-block-wrapper">
          <div class="second-section__small-block"></div>
          <div class="second-section__small-block"></div>
        </div>
        <div class="second-section__second-block-wrapper">
          <div class="second-section__small-block"></div>
          <div class="second-section__small-block"></div>
        </div>
      </div>
      <div class="second-section__sec-right-block"></div>
    </div>
  </div>
</template>
<script>
import Ps4Logo from "../../icons/Ps4Logo";
import XboxOneLogo from "../../icons/XboxOneLogo";
import PcGamerLogo from "../../icons/PcGamerLogo";
import WiiLogo from "../../icons/WiiLogo";
import Ps3Logo from "../../icons/Ps3Logo";
import Xbox360Logo from "../../icons/Xbox360Logo";

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
};
</script>
<style lang="scss">
.second-section {
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
    background-color: green;
    min-width: 295px;
    width: 100%;
    min-height: 295px;
    height: 100%;
    flex: 1;
  }
  &__big-block {
    background-color: red;
    min-width: 590px;
    width: 100%;
    min-height: 295px;
    height: 100%;
    flex: 2;
    display: flex;
    &._right-block {
      background-color: black;
      min-width: 295px;
      width: 100%;
      min-height: 590px;
      height: 100%;
    }
  }
  &__sec-right-block {
    background-color: black;
    min-width: 590px;
    width: 100%;
    min-height: 595px;
    height: 100%;
  }
}
</style>
