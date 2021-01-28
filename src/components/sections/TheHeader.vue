<template>
  <div class="header">
    <div class="header__wrapper container">
      <a href="#" class="header__logo">Play hard</a>
      <ul class="header__list">
        <li class="header__item">
          <a href="#" class="header__link">Community</a>
        </li>
        <li class="header__item">
          <a href="#" class="header__link">Forum</a>
        </li>
        <li class="header__item">
          <a href="#" class="header__link">Support</a>
        </li>
        <li class="header__item">
          <a href="#" class="header__link">About</a>
        </li>
      </ul>
      <div class="header__icon-wrapper">
        <a-icon
          class="header__icon"
          type="heart"
          :style="{ fontSize: '20px', color: '#9d9d9d' }"
        />
        <a-icon
          class="header__icon"
          type="shopping"
          :style="{ fontSize: '20px', color: '#9d9d9d' }"
        />
      </div>
      <div class="header__login-wrapper">
        <a href="#" class="header__login">Login</a>
        <a href="#" class="header__login">Registration</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheNav",
};
</script>
<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: 20;
  padding: 43px 0;
  background-color: $navigation-bg-color;
  box-shadow: 0px 30px 43px 0 rgba(11, 0, 0, 0.3);
  &__wrapper {
    @include flex(space-between, center);
  }
  &__logo {
    @include text($H260, 400, $text-color);
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
  }
  &__icon-wrapper {
    display: flex;
  }
  &__icon {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
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
  }
}
</style>
