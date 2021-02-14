<template>
  <a-button class="cart-button" type="primary">
    {{ `In cart ` + `$` + randomNumber() }}
  </a-button>
</template>
<script>
export default {
  name: "CartButton",
  methods: {
    randomNumber() {
      return Math.floor(10.99 + Math.random() * 99.99);
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
  cursor: pointer;
}
</style>
