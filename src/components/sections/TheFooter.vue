<template>
  <div class="footer">
    <div class="footer__wrapper container">
      <div class="footer__col-wrapper">
        <div class="footer__col-first">
          <ul class="footer__list">
            <li
              class="footer__item"
              v-for="item in itemsColFirst"
              :key="item.name"
            >
              <a href="#" class="footer__link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col-second">
          <ul class="footer__list">
            <li
              class="footer__item"
              v-for="item in itemsColSecond"
              :key="item.name"
            >
              <a href="#" class="footer__link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col-third">
          <ul class="footer__list">
            <li
              class="footer__item"
              v-for="item in itemsColThird"
              :key="item.name"
            >
              <a href="#" class="footer__link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__logo-wrapper">
        <icon-logo class="footer__logo-icon" />
        <a href="/" class="footer__logo">Play Hard</a>
      </div>
    </div>
    <div class="footer__contact-wrapper container">
      <ul class="footer__social-list">
        <li class="footer__social-item" v-for="item in social" :key="item.name">
          <a :href="item.path" target="_blank" class="footer__social-link">{{
            item.name
          }}</a>
        </li>
      </ul>
      <div class="footer__contact-numbers">
        <a href="tel:+" class="footer__phone-number">+38 (066) 430-66-98</a>
        <a href="tel:+" class="footer__phone-number">+38 (099) 893-15-90</a>
      </div>
    </div>
  </div>
</template>
<script>
import IconLogo from "../icons/IconLogo";

export default {
  name: "TheFooter",
  components: {
    IconLogo,
  },
  data() {
    return {
      itemsColFirst: [
        {
          name: "New",
        },
        {
          name: "Games",
        },
        {
          name: "Video",
        },
        {
          name: "Screenshots",
        },
      ],
      itemsColSecond: [
        {
          name: "Community",
        },
        {
          name: "Forum",
        },
        {
          name: "Support",
        },
        {
          name: "About",
        },
      ],
      itemsColThird: [
        {
          name: "Blog",
        },
        {
          name: "Store",
        },
        {
          name: "FAQS",
        },
        {
          name: "Contact us",
        },
      ],
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
.footer {
  padding: 37px 0 25px;
  background-color: $navigation-bg-color;
  &__wrapper {
    @include flex(space-between, flex-start);
    position: relative;
    &::after {
      content: "";
      background-color: $footer-border-color;
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 16px;
    }
  }
  &__col-wrapper {
    @include flex(space-between, flex-start);
    max-width: 660px;
    width: 100%;
    margin-bottom: 62px;
  }
  &__list {
    margin-bottom: 0;
  }
  &__item {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__link {
    @include text($H40, 400, $text-color);
    &:hover {
      color: $yellow-color;
    }
  }
  &__logo-icon {
    margin-right: 12px;
  }
  &__logo {
    @include text($H260, 400, $text-color);
    &:hover {
      color: $yellow-color;
    }
    // position: relative;
    // &::before {
    //   content: "";
    //   background-color: $navigation-bg-color;
    //   position: absolute;
    //   width: 7px;
    //   height: 10px;
    //   left: -35px;
    //   bottom: 26px;
    //   transform: rotateZ(50deg);
    // }
  }
  &__contact-wrapper {
    @include flex(space-between, flex-start, row);
  }
  &__social-list {
    @include flex(flex-start, flex-start);
  }
  &__social-item {
    margin-right: 27px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__social-link {
    @include text($H20, 400, $text-color);
    &:hover {
      color: $yellow-color;
    }
  }
  &__phone-number {
    @include text($H20, 400, $text-color);
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: $yellow-color;
    }
  }
}
</style>
