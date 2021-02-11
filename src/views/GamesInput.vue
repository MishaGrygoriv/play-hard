<template>
  <div class="games container">
    <h2>GamesInput</h2>
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
            <span class="games__rating">
              {{ game.rating }}
            </span>
            <a-rate class="games__rating-stars" :default-value="game.rating" />
          </div>
          <a-button class="games__btn" type="primary">
            in cart $16,99
          </a-button>
          <a href="#" class="games__favourite-btn"
            ><a-icon type="heart" /> <span>Add to wishlist</span></a
          >
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
import IconPlaceholder from "../components/icons/IconPlaceholder";

export default {
  name: "GamesInput",
  components: {
    IconPlaceholder,
  },
  data() {
    return {
      query: "",
      pageSize: 20,
    };
  },
  computed: {
    ...mapState("games", ["loading", "games", "count", "page"]),
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
  mounted() {
    this.query = this.$route.query.search || "";
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
  &__rating {
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
    @include flex(center, center);
    @include text($H80, 600, $dark-color);
    background-color: $yellow-color;
    height: 47px;
    padding: 0 25px;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    margin-bottom: 23px;
  }
  &__favourite-btn {
    @include flex(center, center);
    @include text($H40, 400, $yellow-color);
    svg {
      font-size: 19px;
      margin-right: 12px;
    }
  }
  // &__form {
  //   @include flex(stretch, stretch);
  //   margin-bottom: 32px;
  // }
  // &__input {
  //   flex: 1;
  //   margin-right: 30px;
  // }
  // &__row {
  //   @include flex(stretch, stretch, column);
  //   flex-wrap: wrap;
  //   margin: 0 -10px;
  // }
  // &__col {
  //   max-height: 215px;
  // }
  // &__col {
  //   padding: 10px;
  //   flex: 1 1 calc(100% / 4);
  //   max-width: calc(100% / 4);
  //   & > div {
  //     height: 100%;
  //   }
  // }
}
</style>
