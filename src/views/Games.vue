<template>
  <div>
    <div class="games">
      <div class="page-art">
        <div
          class="page-art__colored"
          :style="{
            zIndex: `1`,
            height: `1200px`,
            backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url(https://www.itl.cat/pngfile/big/13-136950_video-game-wallpaper-hd-kingdom-come-deliverance-loading.jpg)`,
          }"
        ></div>
      </div>
      <div class="games__row">
        <div
          class="games__col"
          v-for="game in bestGamesOfTheYear"
          :key="game.id"
          :flex="1"
        >
          <a-card
            class="games__card"
            hoverable
            @click="
              $router.push({ name: 'GameDetails', params: { id: game.id } })
            "
          >
            <div class="games__img-wrapper">
              <img
                class="games__img"
                v-if="game.background_image"
                slot="cover"
                alt="example"
                :src="game.background_image"
                @click="scrollToTop"
              />
              <icon-placeholder v-else class="games__icon" />
            </div>
            <a-card-meta class="games__title" :title="game.name">
              <template class="games__released" slot="description">
                {{ game.released }}
              </template>
            </a-card-meta>
            <div class="games__rating-wrapper">
              <span class="games__rating" v-if="game.rating === 0">
                {{ 1.1 }}
              </span>
              <span class="games__rating" v-else-if="game.rating > 0">
                {{ game.rating }}
              </span>
              <a-rate
                v-if="game.rating === 0"
                class="games__rating-stars"
                :default-value="1"
              />
              <a-rate
                v-else-if="game.rating > 0"
                class="games__rating-stars"
                :default-value="game.rating"
              />
            </div>
          </a-card>
        </div>
      </div>
      <a-pagination
        class="games__pagination"
        v-if="Number(count) > 20"
        :pageSize="pageSize"
        @change="handlePaginationChange"
        :current="page"
        :total="Number(count)"
      />
    </div>
  </div>
</template>
<script>
import { httpService } from "../http/httpService";
import { mapActions, mapMutations, mapState } from "vuex";
import IconPlaceholder from "../components/icons/IconPlaceholder";

export default {
  name: "Games",
  components: {
    IconPlaceholder,
  },
  data() {
    return {
      pageSize: 20,
    };
  },
  computed: {
    ...mapState("games", ["bestGamesOfTheYear", "loading", "count", "page"]),
  },
  methods: {
    ...mapActions("games", ["fetchBestGamesOfTheYear"]),
    ...mapMutations("games", ["changePage"]),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handlePaginationChange(e) {
      this.changePage(e);
      this.fetchBestGamesOfTheYear(e);
      document.body.scrollIntoView();
      console.log("change", e);
    },
  },
  async created() {
    this.fetchBestGamesOfTheYear();
    const gameList = await httpService.getBestGamesOfTheYear();
    console.log(gameList);
  },
};
</script>
<style lang="scss">
.page-art {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 50.5%;
  background-color: #151515;
  &__colored {
    max-height: 100%;
    background-size: cover;
    width: 100%;
    height: 100%;
    background: no-repeat top;
    background-size: cover;
  }
}
.games {
  padding: 50px 0;
  &__row {
    @include flex(stretch, stretch);
    flex-wrap: wrap;
    margin: 0 -10px;
    margin-bottom: 100px;
  }
  &__col {
    padding: 13px;
    flex: 1 1 calc(100% / 4);
    max-width: calc(100% / 4);
    & > div {
      height: 100%;
    }
    transform: scale(1);
    transition: transform 0.5s ease;
    &:hover {
      border-radius: 2%;
      transform: scale(1.1);
      z-index: 10;
    }
  }
  &__card {
    text-align: center;
    background-color: $bg-color;
    border-color: transparent;
    border-radius: 2%;
    padding: 0 0 20px 0;
  }
  &__img-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 73%;
    height: 100%;
    margin-bottom: 10px;
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
  }
  &__title {
    margin-bottom: 20px;
    padding: 0 10px;
  }
  &__icon {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
  }
  &__pagination {
    @include flex(center, center);
  }
  &__rating-wrapper {
    @include flex(center, center);
  }
  &__rating {
    @include text($H80, 600, $text-color);
    display: block;
    margin-right: 12px;
  }
}
.ant-pagination-prev .ant-pagination-item-link,
.ant-pagination-next .ant-pagination-item-link {
  background-color: transparent;
  box-shadow: inset 0 0 10px $dark-color;
  transition: all 0.5s ease;
  color: $yellow-color;
  border: none;
  outline: none;
  &:hover,
  &:focus,
  &active {
    color: $yellow-color;
    box-shadow: inset 0 0 20px $dark-color;
  }
}
.ant-pagination-item {
  background-color: transparent;
  border-color: $dark-color;
  min-width: 23px;
  height: 23px;
  @include flex(center, center);
  &:hover,
  &:active {
    background-color: $input-border-color;
    border-color: $light-color;
  }
}
.ant-pagination-item-active {
  box-shadow: inset 0 0 10px $dark-color;
  background-color: $game-subtitle-color;
  border-color: $text-color;
  color: $border-line-color;
  transition: all 0.5s ease;
  &:hover,
  &:focus {
    background-color: $input-border-color;
    border-color: $text-color;
  }
}
.ant-pagination-item-active a {
  color: $yellow-color;
  transition: color 0.5s ease;
  &:hover,
  &:focus {
    color: $yellow-color;
  }
}
.ant-pagination-item-active:focus a {
  color: $yellow-color;
}
.ant-pagination-item-active:hover a {
  color: $yellow-color;
}
.ant-card-body {
  padding: 0;
}
.ant-card-meta-title {
  @include text($H200, 600, $light-color);
}
.ant-card-meta-description {
  @include text($H20, 600, $game-subtitle-color);
}
.ant-rate-star {
  top: -3px;
}
</style>

// @click=" // $router.push({ // name: 'GamesInput', // params: { gamesInput:
query }, // }) // "
