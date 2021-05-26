<template>
  <ul class="shopping-list">
    <li
      class="shopping-list__item"
      v-for="(item, idx) in cart"
      :key="item + idx"
    >
      <img
        class="shopping-list__img"
        :src="gameDetails.background_image"
        alt="img"
      />
      <h4 class="shopping-list__title">{{ gameDetails.name }}</h4>
      <span class="shopping-list__price">{{ `40.99$` }}</span>
      <span class="shopping-list__qty">{{ item.qty }} (item)</span>
    </li>
  </ul>
</template>

//
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ShoppingList",
  computed: {
    ...mapState("gameStore", ["cart"]),
    ...mapState("games", ["gameDetails", "loading"]),
  },
  methods: {
    ...mapActions("games", ["getGameDetails"]),
  },
  created() {
    this.getGameDetails();
  },
};
</script>

//
<style lang="scss">
.shopping-list {
  background-color: $side-bar-bg-color;
  padding: 20px;
  &__item {
    @include flex(flex-start, center);
    margin-bottom: 10px;
    padding: 10px;
    background-color: rgba($light-color, 0.1);
    border-radius: 1%;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__img {
    max-width: 100px;
    width: 100%;
    max-height: 100px;
    height: 100%;
    margin-right: 30px;
    border-radius: 10%;
  }
  &__title {
    @include text($H200, 400, $light-color);
    margin-right: 40px;
    margin-bottom: 0;
  }
  &__price {
    margin-right: 40px;
    @include text($H50, 400, $text-color);
  }
  &__qty {
    @include text($H80, 600, $yellow-color);
  }
}
</style>
