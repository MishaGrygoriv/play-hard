<template>
  <div class="games container">
    <div class="games__col-wrapper" v-for="game in games" :key="game.id">
      <div
        class="games__first-col"
        @click="$router.push({ name: 'GameDetails', params: { id: game.id } })"
      >
        <div class="games__img-wrapper" v-if="game.background_image">
          <img
            class="games__img"
            slot="cover"
            alt="example"
            :src="game.background_image"
            @click="scrollToTop"
          />
        </div>
        <icon-placeholder v-else class="games__icon" />
      </div>
      <div class="games__second-col">
        <div class="games__left-col">
          <h2
            class="games__left-col-title"
            @click="
              scrollToTop();
              $router.push({ name: 'GameDetails', params: { id: game.id } });
            "
          >
            {{ game.name }}
          </h2>
          <span class="games__left-col-subtitle">{{ game.released }}</span>
          <h3 class="games__left-col-descr-title">Description</h3>
          <p class="games__left-col-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolores quis cum, quo reprehenderit commodi maiores corrupti labore
            officiis quos. ipsum dolor sit amet consectetur adipisicing elit ...
            <span
              class="games__link"
              @click="
                scrollToTop();
                $router.push({ name: 'GameDetails', params: { id: game.id } });
              "
            >
              Learn More</span
            >
          </p>
        </div>
        <div class="games__right-col">
          <div class="games__rating-wrapper">
            <span class="games__rating-value">
              {{ game.rating }}
            </span>
            <a-rate class="games__rating-stars" :default-value="game.rating" />
          </div>
          <cart-button class="games__btn" />
          <favourite-button />
        </div>
      </div>
    </div>
    <!-- <div class="games__row">
      <div class="games__col" v-for="game in games" :key="game.id" :flex="1">
        <a-card
          hoverable
          @click="
            $router.push({ name: 'GameDetails', params: { id: game.id } })
          "
        >
          <img
            class="games__img"
            v-if="game.background_image"
            slot="cover"
            alt="example"
            :src="game.background_image"
            @click="scrollToTop"
          />
          <icon-placeholder v-else class="games__icon" />
          <a-card-meta :title="game.name">
            <template slot="description">
              {{ game.released }}
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div> -->
    <a-pagination
      class="games__pagination"
      v-if="Number(count) > 20"
      :pageSize="pageSize"
      @change="handlePaginationChange"
      :current="page"
      :total="Number(count)"
    />
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import CartButton from "../components/common/CartButton.vue";
import FavouriteButton from "../components/common/FavouriteButton.vue";
import IconPlaceholder from "../components/icons/IconPlaceholder";

export default {
  name: "GamesInput",
  components: {
    IconPlaceholder,
    CartButton,
    FavouriteButton,
  },
  data() {
    return {
      pageSize: 20,
    };
  },
  computed: {
    ...mapState("games", ["loading", "games", "count", "page", "query"]),
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    ...mapActions("games", ["getGamesByQuery"]),
    ...mapMutations("games", ["changePage"]),
    handlePaginationChange(e) {
      this.changePage(e);
      this.getGamesByQuery({ query: this.query, page: this.page });
      document.body.scrollIntoView();
    },
  },
};
</script>
<style lang="scss">
.games {
  &__col-wrapper {
    background-color: $side-bar-bg-color;
    @include flex;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__first-col {
    min-width: 300px;
    min-height: 219px;
    cursor: pointer;
  }
  &__img-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 73%;
    height: 100%;
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
  &__icon {
    width: 100%;
    height: 219px;
  }
  &__second-col {
    @include flex(flex-start, start, row);
    padding: 32px 24px 32px 48px;
  }
  &__left-col {
    margin-right: 127px;
  }
  &__left-col-title {
    @include text($H200, 600, $game-title-color);
    cursor: pointer;
  }
  &__left-col-subtitle {
    @include text($H20, 400, $game-subtitle-color);
    display: block;
    margin-bottom: 30px;
  }
  &__left-col-descr-title {
    @include text($H40, 600, $light-color);
  }
  &__left-col-description {
    @include text($H20, 400, $text-color);
    max-width: 470px;
    width: 100%;
  }
  &__link {
    @include text($H20, 600, $light-color);
    cursor: pointer;
  }
  &__right-col {
    max-width: 211px;
    width: 100%;
  }
  &__rating-wrapper {
    @include flex(flex-end, end, row);
    margin-bottom: 48px;
  }
  &__rating-value {
    @include text($H200, 600, $yellow-color);
    display: block;
    margin-right: 12px;
  }
  &__rating-stars {
    svg {
      width: 12px;
    }
  }
  &__btn {
    width: 100%;
    margin-bottom: 23px;
  }
  &__pagination {
    @include flex(center, center);
  }
}
</style>
