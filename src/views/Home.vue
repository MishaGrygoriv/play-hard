<template>
  <div class="home">
    <ul class="countryMealsList__list">
      <!-- <li
        class="countryMealsList__list-item"
        v-for="game in games"
        :key="game.id"
      >
         <a-card>
          <img slot="cover" alt="example" :src="meals.strMealThumb" />
        </a-card> 
         <span class="countryMealsList__list-item-title">{{
          meals.strMeal
        }}</span>
      </li> -->
    </ul>
  </div>
</template>

<script> 
import { httpService } from "../http/httpService";

export default {
  name: "Home",
  data() {
    return {
      games: {},
    };
  },

  async created() {
    const gameList = await httpService.getGames();
     console.log(gameList);
    this.games = gameList;
    console.log(this.games); 
  }
};
</script>

<style lang="scss">
.btn {
  @include flex(center, center);
}
</style>
