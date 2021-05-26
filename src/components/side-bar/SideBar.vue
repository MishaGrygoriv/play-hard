<template>
  <div class="side-bar container">
    <ul class="side-bar__list-icon">
      <li class="side-bar__item-icon" v-for="icon in icons" :key="icon.type">
        <a-icon class="side-bar__link-icon" :type="icon.type" />
      </li>
    </ul>
    <ul class="side-bar__list-link">
      <li class="side-bar__item">
        <a-input
          @keyup.enter="
            atPress();
            scrollToTop();
          "
          v-model="query"
          type="search"
          name="search"
          id="search"
          placeholder="search"
          class="side-bar__input"
        />
      </li>
      <li
        class="side-bar__item"
        v-for="route in routes"
        :key="route.name"
        @click="scrollToTop()"
      >
        <router-link
          active-class="_active"
          exact
          class="side-bar__link"
          :to="route.path"
          >{{ route.name }}</router-link
        >
      </li>
      <!-- <li class="side-bar__item">
        <a href="#" class="side-bar__link">Login</a>
      </li> -->
      <!-- <li class="side-bar__item">
        <a href="#" class="side-bar__link">Create Account</a>
      </li> -->
    </ul>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "SideBar",
  data() {
    return {
      query: "",
      routes: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Games",
          path: "/games",
        },
        {
          name: "Video",
          path: "/video",
        },
        {
          name: "Screenshots",
          path: "/screenshots",
        },
        {
          name: "News",
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
        {
          name: "Login",
          path: "/login",
        },
        {
          name: "Create Account",
          path: "/register",
        },
      ],
      icons: [
        {
          type: "search",
        },
        {
          type: "home",
        },
        {
          type: "smile",
        },
        {
          type: "play-square",
        },
        {
          type: "desktop",
        },
        {
          type: "global",
        },
        {
          type: "customer-service",
        },
        {
          type: "info-circle",
        },
        {
          type: "key",
        },
        {
          type: "user",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      loading: ({ games }) => games.loading,
      games: ({ games }) => games,
      page: ({ games }) => games.page,
    }),
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    ...mapActions("games", ["getGamesByQuery"]),
    ...mapMutations("games", ["changePage", "setInitialPage"]),
    handleSubmit() {
      if (this.$route?.query?.search !== this.query) {
        this.$router?.push({
          path: "/games/gamesInput",
          query: { search: this.query },
        });
      }
      this.setInitialPage();
      this.getGamesByQuery({ query: this.query, page: this.page });
      // async handleSubmit() {
      // if (this.$route.path === "/" || this.$route.path === this.routes.name) {
      //   this.$router.push("/games/gamesInput");
      //   this.getGamesByQuery({ query: this.query });
      // } else {
      //   await this.getGamesByQuery({ query: this.query });
      // }
    },
    atPress() {
      this.handleSubmit();
    },
  },
};
</script>
<style lang="scss">
.side-bar {
  padding-top: 125px;
  position: fixed;
  z-index: 20;
  &__list-icon {
    padding: 45px 15px;
    width: 50px;
    min-height: 100vh;
    @include flex(flex-start, start, column);
    color: $text-color;
    background-color: $side-bar-bg-color;
    z-index: 5;
    position: relative;
    transition: transform 0.3s ease;
  }
  &__list-link {
    transform: translateX(-200px);
    position: absolute;
    top: 125px;
    padding: 39px;
    width: 200px;
    min-height: 100vh;
    transition: transform 0.5s ease;
    z-index: 4;
    background-color: $side-bar-bg-color;
  }
  &__list-link:hover {
    transform: translateX(40px);
  }
  &__list-icon:hover + &__list-link {
    transform: translateX(40px);
  }
  &__item-icon,
  &__item {
    margin-bottom: 25px;
    &:first-child {
      margin-bottom: 45px;
    }
    &:nth-child(2n + 6) {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__link-icon {
    svg {
      fill: $text-color;
    }
  }
  &__item {
    &:first-child {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 122px;
        height: 1px;
        background-color: $input-border-color;
        bottom: -2px;
      }
    }
  }
  &__btn {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    &:active {
      background-color: $yellow-color;
      border-color: $yellow-color;
    }
    &:hover,
    &:focus {
      background-color: transparent;
      border: none;
      outline: none;
    }
    i {
      color: $text-color;
    }
  }
  &__link {
    @include text($H40, 400, $text-color);
    &:hover {
      color: $yellow-color;
    }
    &._active {
      color: $yellow-color;
    }
  }
  &__input {
    background: inherit;
    outline: none;
    border: none;
    border-radius: 0;
    color: $text-color;
    &:focus {
      box-shadow: none;
    }
  }
}
.side-bar__item:hover .side-bar__link-icon svg {
  fill: red;
}
</style>
