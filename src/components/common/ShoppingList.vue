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
      <span class="shopping-list__qty">{{ item.qty }} item(s)</span>
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
  &__item {
    @include flex(flex-start, center);
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__img {
    max-width: 50px;
    width: 100%;
    max-height: 100px;
    height: 100%;
    margin-right: 30px;
  }
  &__title {
    margin-right: 10px;
    margin-bottom: 0;
  }
  &__price {
    margin-right: 5px;
  }
  &__qty {
    color: red;
  }
}
</style>
