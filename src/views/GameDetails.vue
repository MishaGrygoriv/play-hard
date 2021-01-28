<template>
  <div class="game-details">
    <div class="game-details__col-left">
      <div class="game-details__img-wrapper">
        <img
          class="game-details__img"
          :src="gameDetails.background_image"
          alt="img"
        />
      </div>
    </div>
    <div class="game-details__col-right">
      <ul class="game-details__info">
        <li class="game-details__item">
          <h2 class="game-details__title">{{ gameDetails.name }}</h2>
        </li>
        <li class="game-details__item">
          Genre:
          <span v-for="(name, idx) in genre" :key="idx">{{ name.name }}</span>
        </li>
        <li class="game-details__item">
          Released: <span>{{ gameDetails.released }}</span>
        </li>
        <li class="game-details__item">
          Website:
          <a :href="gameDetails.website" target="_blank">{{
            gameDetails.website
          }}</a>
        </li>
        <li class="game-details__item">
          <a-progress
            stroke-linecap="square"
            :percent="Number(gameDetails.metacritic)"
            type="circle"
          />
        </li>
      </ul>
      <p class="game-details__descriptions">
        {{ gameDetails.description_raw }}
      </p>
    </div>
  </div>
</template>
<script>
import { httpService } from "../http/httpService";
import { mapActions, mapState } from "vuex";
export default {
  name: "GameDetails",
  data() {
    return {
      id: null,
      genre: "",
    };
  },
  computed: {
    ...mapState("games", ["gameDetails", "loading"]),
    // genreNames() {
    //   return this.gameDetails.genres.map(({ name }) => name).join(" ");
    // },
  },
  methods: {
    ...mapActions("games", ["getGameDetails"]),
  },
  async created() {
    const { $route, getGameDetails } = this;
    const { id } = $route.params;
    getGameDetails(id);
    const categoryGames = await httpService.getGameDetails(
      this.$route.params.id
    );
    this.genre = categoryGames.genres;
  },
};
</script>
<style lang="scss">
.game-details {
  @include flex(space-between, space-between);
  padding: 70px 0;
  &__col-left {
    flex: 1;
    margin-right: 50px;
  }
  &__col-right {
    flex: 1;
  }
  &__img-wrapper {
    border-radius: 10px;
    margin-right: 10px;
    border: 1px solid #c3c3c3;
    overflow: hidden;
    position: relative;
    padding-bottom: 50%;
  }
  &__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__item {
    @include text($H60, 400, $yellow-color);
    padding: 6px 0;
    span {
      color: #ff7875;
      font-weight: 600;
    }
  }
  &__title {
    @include text($H300, 400, $light-color);
    text-transform: uppercase;
  }
  &__descriptions {
    @include text($H40, 400, $text-color);
  }
}
</style>
