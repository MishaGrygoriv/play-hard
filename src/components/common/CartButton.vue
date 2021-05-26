<template>
  <a-button class="cart-button" type="primary" @click="handleClick()">
    {{ `In cart ` + `$` + randomNumber() }}
  </a-button>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "CartButton",
  methods: {
    randomNumber() {
      return Math.floor(10.99 + Math.random() * 99.99).toFixed(2);
    },
    ...mapActions("gameStore", ["addItemToCart"]),
    handleClick(card) {
      this.addItemToCart(card);
      console.log(card);
    },
  },
};
</script>
<style lang="scss">
.cart-button {
  @include flex(center, center);
  @include text($H80, 700, $dark-color);
  background-color: $yellow-color;
  height: 47px;
  padding: 0 25px;
  border: none;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover,
  &:focus {
    background-color: $side-bar-bg-color;
    border: 2px solid $yellow-color;
  }
}
</style>
