<template>
  <div>
    <h2>Games</h2>
    <div class="home">
      <div class="games">
        <form class="games__form" @submit.prevent="handleSubmit">
          <a-input
            v-model="query"
            placeholder="Search Games..."
            class="games__input"
          />
          <a-button
            @click="handleSubmit"
            :loading="loading"
            type="primary"
            class="games__btn"
            htmlType="submit"
          >
            Primary
          </a-button>
        </form>
        <div class="games__row">
          <div
            class="games__col"
            v-for="game in games"
            :key="game.id"
            :flex="1"
          >
            <a-card
              hoverable
              @click="
                $router.push({ name: 'GameDetails', params: { id: game.id } })
              "
            >
              <img
                v-if="game.background_image"
                slot="cover"
                alt="example"
                :src="game.background_image"
              />
              <icon-placeholder v-else class="games__icon" />
              <a-card-meta :title="game.name">
                <template slot="description">
                  {{ game.released }}
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </div>
        <a-pagination
          v-if="Number(count) > 20"
          @change="handlePaginationChange"
          v-model="page"
          :total="Number(count)"
        />
      </div>
    </div>
  </div>
</template>
<script>
// import { httpService } from "../http/httpService";
import { mapActions, mapState } from "vuex";
import IconPlaceholder from "../components/icons/IconPlaceholder";

export default {
  name: "Games",
  components: {
    IconPlaceholder,
  },
  data() {
    return {
      // games: [],
      query: "",
      page: 1,
      // loading: false,
    };
  },
  computed: {
    ...mapState("games", ["loading", "games", "count"]),
  },
  methods: {
    ...mapActions("games", ["getGamesByQuery"]),
    handleSubmit() {
      // this.$router.push("/games/gamesInput");
      // this.loading = true;
      // this.page = 1;
      this.getGamesByQuery({ query: this.query, page: this.page });
      // setTimeout(() => {
      //   this.loading = false;
      //   this.$message.success("Loaded Successfuly");
      // }, 2000);
    },
    async handlePaginationChange() {
      await this.getGamesByQuery({ query: this.query, page: this.page });
    },
  },
  // async created() {
  //   const gameList = await httpService.getGames();
  //   console.log(gameList);
  //   this.games = gameList.results;
  //   console.log(this.games);
  //   this.getGamesByQuery("metro");
  // },
};
</script>
<style lang="scss">
.home {
  padding: 20px;
}
.games {
  &__form {
    @include flex(stretch, stretch);
    margin-bottom: 32px;
  }
  &__input {
    flex: 1;
    margin-right: 30px;
  }
  &__row {
    @include flex(stretch, stretch);
    flex-wrap: wrap;
    margin: 0 -10px;
  }
  &__col {
    padding: 10px;
    flex: 1 1 calc(100% / 4);
    max-width: calc(100% / 4);
    & > div {
      height: 100%;
    }
  }
  &__icon {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
  }
}
</style>

// @click=" // $router.push({ // name: 'GamesInput', // params: { gamesInput:
query }, // }) // "
