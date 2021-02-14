<template>
  <div class="header">
    <div class="header__wrapper container">
      <div class="header__logo-wrapper">
        <icon-logo class="header__logo-icon" />
        <a href="/" class="header__logo">Play hard</a>
      </div>
      <ul class="header__list">
        <li class="header__item" v-for="item in items" :key="item.name">
          <a href="#" class="header__link">{{ item.name }}</a>
        </li>
      </ul>
      <div class="header__icon-wrapper">
        <a href="#" class="header__icon">
          <a-icon type="heart" />
        </a>
        <a href="#" class="header__icon">
          <a-icon type="shopping" />
        </a>
      </div>
      <div class="header__login-wrapper">
        <a href="#" class="header__login">Login</a>
        <a href="#" class="header__login">Registration</a>
      </div>
    </div>
  </div>
</template>
<script>
import IconLogo from "../icons/IconLogo";

export default {
  name: "TheNav",
  components: {
    IconLogo,
  },
  data() {
    return {
      items: [
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
    };
  },
};
</script>
<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: 20;
  padding: 43px 20px;
  background-color: $navigation-bg-color;
  box-shadow: 0px 30px 43px 0 rgba(11, 0, 0, 0.3);
  &__wrapper {
    @include flex(space-between, center);
  }
  &__logo-icon {
    margin-right: 12px;
  }
  &__logo {
    @include text($H260, 400, $text-color);
    &:hover {
      color: $yellow-color;
    }
  }
  &__list {
    @include flex(flex-start, flex-start);
    margin-bottom: 0;
    margin-right: 267px;
  }
  &__item {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__link {
    @include text($H40, 400, $text-color);
    &:hover {
      color: $yellow-color;
    }
  }
  &__icon-wrapper {
    display: flex;
  }
  &__icon {
    margin-right: 40px;
    color: $text-color;
    font-size: $H200;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: $yellow-color;
    }
  }
  &__login {
    @include text($H40, 400, $yellow-color);
    margin-right: 25px;
    &:last-child {
      margin-right: 0;
      position: relative;
      &::before {
        content: "";
        background-color: $border-line-color;
        position: absolute;
        width: 1px;
        height: 24px;
        top: 0;
        bottom: 0;
        left: -13px;
        right: 0;
      }
    }
    &:hover {
      color: darken($yellow-color, 30);
    }
  }
}
</style>
