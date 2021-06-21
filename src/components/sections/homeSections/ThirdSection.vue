<template>
  <div class="third-section">
    <ul class="third-section__list">
      <li class="third-section__item">
        <a
          href="https://www.facebook.com"
          target="_blank"
          class="third-section__link"
          ><facebook-icon
        /></a>
      </li>
      <li class="third-section__item">
        <a
          href="https://twitter.com"
          target="_blank"
          class="third-section__link"
          ><twitter-icon
        /></a>
      </li>
      <li class="third-section__item">
        <a
          href="https://www.twitch.tv"
          target="_blank"
          class="third-section__link"
          ><twitch-logo
        /></a>
      </li>
      <li class="third-section__item">
        <a
          href="https://www.youtube.com"
          target="_blank"
          class="third-section__link"
          ><you-tube-logo
        /></a>
      </li>
    </ul>
    <h2>test</h2>
  </div>
</template>
<script>
import FacebookIcon from "../../icons/FacebookIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import TwitchLogo from "../../icons/TwitchLogo";
import YouTubeLogo from "../../icons/YouTubeLogo";

export default {
  name: "ThirdSection",
  components: {
    FacebookIcon,
    TwitterIcon,
    TwitchLogo,
    YouTubeLogo,
  },
  data() {
    return {
      social: [
        {
          name: "Facebook",
          path: "https://www.facebook.com",
        },
        {
          name: "Twitter",
          path: "https://twitter.com",
        },
        {
          name: "Twitch",
          path: "https://www.twitch.tv",
        },
        {
          name: "YouTube",
          path: "https://www.youtube.com",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.third-section {
  padding: 80px 0;
  &__list {
    @include flex(stretch, stretch);
    width: 100%;
  }
  &__item {
    @include flex(center, center);
    max-width: 295px;
    width: 100%;
  }
  &__link {
    @include flex(center, center);
    background: $bg-color;
    padding: 84px 60px;
    width: 100%;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: $social-hover-color;
    }
    path {
      transition: fill 0.5s ease;
    }
  }
  &__link:hover path {
    fill: $light-color;
  }
  &__link:hover .twitch-hover-color {
    fill: transparent;
  }
  &__link:hover .youtube-hover-color {
    fill: $red-color;
  }
}
</style>
