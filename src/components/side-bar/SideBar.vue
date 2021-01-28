<template>
  <div class="side-bar container">
    <!-- <div class="side-bar__hidden"></div> -->
    <ul class="side-bar__list-icon">
      <li class="side-bar__item-icon">
        <a-button
          class="side-bar__btn"
          type="primary"
          icon="search"
          @click="handleSubmit"
        />
      </li>
      <li class="side-bar__item-icon" v-for="icon in icons" :key="icon.type">
        <a-icon :type="icon.type" />
      </li>
    </ul>
    <ul class="side-bar__list-link">
      <li class="side-bar__item">
        <a-input
          v-model="query"
          placeholder="Search Games..."
          class="side-bar__input"
        />
      </li>
      <li class="side-bar__item" v-for="route in routes" :key="route.name">
        <router-link
          active-class="_active"
          exact
          class="side-bar__link"
          :to="route.path"
          >{{ route.name }}</router-link
        >
      </li>
      <li class="side-bar__item">
        <a href="#" class="side-bar__link">Login</a>
      </li>
      <li class="side-bar__item">
        <a href="#" class="side-bar__link">Create Account</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

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
      ],
      icons: [
        {
          type: "home",
        },
        {
          type: "reddit",
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
    ...mapState("games", ["loading", "games"]),
  },
  methods: {
    ...mapActions("games", ["getGamesByQuery"]),
    async handleSubmit() {
      this.$router.push("/games/gamesInput");
      //     // this.loading = true;
      await this.getGamesByQuery(this.query);
      //     // setTimeout(() => {
      //     //   this.loading = false;
      //     //   this.$message.success("Loaded Successfuly");
      //     // }, 2000);
    },
  },
};
</script>
<style lang="scss">
.side-bar {
  padding-top: 125px;
  position: fixed;
  z-index: 20;
  // overflow: hidden;
  // &__hidden {
  //   min-width: 165px;
  //   width: 100%;
  //   height: 58%;
  //   background: $main-bg-color;
  //   position: absolute;
  //   left: -165px;
  //   z-index: 20;
  // }
  &__list-icon {
    padding: 20px 15px;
    width: 50px;
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
    padding: 16px;
    width: 200px;
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
  // // margin-left: 150px;
  // width: 100%;
  // position: fixed;
  // z-index: 19;
  // // max-width: 20px;
  // background: $nav-bg-color;
  // transition: all 0.5s ease;

  // &:hover {
  //   // max-width: 400px;
  // }
  // &__item-icon {
  //   color: white;
  //   @include flex(start, start);
  // }
  // &__empty-block {
  //   min-width: 400px;
  //   width: 100%;
  // }
  // &__link {
  //   display: block;
  //   max-width: 200px;
  //   width: 100%;
  // }
}
// .side-bar__list-link {
//   transform: translateX(-170px);
//   background-color: grey;
// }
// .side-bar__list-icon:hover + .side-bar__list-link {
//   transform: translateX(0px);
// }
</style>
