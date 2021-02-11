<template>
  <div class="third-section">
    <div class="third-section__container">
      <div class="third-section__sixth"></div>
      <div class="third-section__seventh"></div>
      <div class="third-section__eighth"></div>
      <div class="third-section__ninth"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ThirdSection",
};
</script>
<style lang="scss">
.third-section {
  display: flex;
  &__sixth {
    background-color: orange;
    width: 200px;
    height: 200px;
  }
  &__seventh {
    background-color: white;
    width: 200px;
    height: 200px;
  }
  &__eighth {
    background-color: pink;
    width: 200px;
    height: 200px;
  }
  &__ninth {
    background-color: purple;
    width: 200px;
    height: 200px;
  }
}
</style>
