<template>
  <a href="#" class="favourite-button"
    ><a-icon type="heart" /> <span>Add to wishlist</span></a
  >
</template>
<script>
export default {
  name: "FavouriteButton",
};
</script>
<style lang="scss">
.favourite-button {
  @include flex(center, center);
  @include text($H40, 400, $yellow-color);
  svg {
    font-size: 19px;
    margin-right: 12px;
  }
}
</style>
