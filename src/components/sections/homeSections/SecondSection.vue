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
          <div class="second-section__first-block"></div>
          <div class="second-section__second-block"></div>
        </div>
        <div class="second-section__second-block-wrapper">
          <div class="second-section__third-block"></div>
          <div class="second-section__fourth-block"></div>
        </div>
      </div>
      <div class="second-section__fifth-block"></div>
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
  &__first-block {
    background-color: green;
    width: 200px;
    height: 200px;
    flex: 1;
  }
  &__second-block {
    background-color: red;
    width: 500px;
    height: 200px;
    flex: 2;
  }
  &__third-block {
    background-color: blue;
    width: 500px;
    height: 200px;
    flex: 2;
  }
  &__fourth-block {
    background-color: yellow;
    width: 200px;
    height: 200px;
    flex: 1;
  }
  &__fifth-block {
    background-color: black;
    width: 200px;
    height: 400px;
    display: flex;
  }
}
</style>
