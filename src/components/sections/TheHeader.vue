<template>
  <div class="header">
    <div class="header__wrapper container">
      <div class="header__logo-wrapper">
        <icon-logo class="header__logo-icon" />
        <a href="/" class="header__logo">Play hard</a>
      </div>
      <ul class="header__list">
        <li class="header__item" v-for="route in routes" :key="route.name">
          <router-link
            active-class="_active"
            exact
            class="side-bar__link"
            :to="route.path"
            >{{ route.name }}</router-link
          >
        </li>
      </ul>
      <div class="header__icon-wrapper">
        <a href="#" class="header__icon">
          <a-icon type="heart" />
        </a>
        <modal-shopping-list />
      </div>
      <div class="header__login-wrapper">
        <modal-login />
        <modal-register />
      </div>
    </div>
  </div>
</template>
<script>
import ModalLogin from "../common/login/ModalLogin.vue";
import ModalRegister from "../common/login/ModalRegister.vue";
import ModalShoppingList from "../common/ModalShoppingList.vue";
import IconLogo from "../icons/IconLogo";

export default {
  name: "TheHeader",
  components: {
    IconLogo,
    ModalLogin,
    ModalRegister,
    ModalShoppingList,
  },
  data() {
    return {
      routes: [
        {
          name: "Games",
          path: "/games",
        },
        {
          name: "Forum",
          path: "/news",
        },
        {
          name: "Support",
          path: "/support",
        },
        {
          name: "About",
          path: "/about",
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
  &__login-wrapper {
    @include flex(stretch, stretch);
  }
}
</style>
