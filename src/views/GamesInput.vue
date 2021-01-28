<template>
  <div>
    <iframe
      allowfullscreen
      src="https://www.youtube.com/embed/ehjJ614QfeM"
      frameborder="0"
    ></iframe>
    <h2>GamesInput</h2>
    <div class="games__row">
      <div class="games__col" v-for="game in games" :key="game.id" :flex="1">
        <a-card hoverable>
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
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
// import IconPlaceholder from "../components/icons/IconPlaceholder";

export default {
  name: "GamesInput",
  components: {
    // IconPlaceholder,
  },
  data() {
    return {
      query: "",
    };
  },
  computed: {
    ...mapState("games", ["loading", "games"]),
  },
  methods: {
    ...mapActions("games", ["getGamesByQuery"]),
    async handleSubmit() {
      // this.loading = true;
      await this.getGamesByQuery(this.query);
      // setTimeout(() => {
      //   this.loading = false;
      //   this.$message.success("Loaded Successfuly");
      // }, 2000);
    },
  },
};
</script>
<style lang="scss">
iframe {
  width: 40%;
  height: auto;
}
</style>
