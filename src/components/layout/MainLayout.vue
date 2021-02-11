<template>
  <div class="main-layout">
    <the-header class="the-header" />
    <div class="content-wrapper">
      <div class="content-wrapper__side-bar-wrapper">
        <side-bar class="side-bar" />
      </div>
      <div class="main-content container">
        <slot />
      </div>
    </div>
    <the-footer />
  </div>
</template>
<script>
import TheFooter from "../sections/TheFooter.vue";
import TheHeader from "../sections/TheHeader";
import SideBar from "../side-bar/SideBar.vue";

export default {
  name: "MainLayout",
  components: {
    SideBar,
    TheHeader,
    TheFooter,
  },
};
</script>
<style lang="scss">
.content-wrapper {
  @include flex();
  position: relative;
  // &__side-bar-wrapper {
  //   position: fixed;
  //   z-index: 20;
  // }
}
.main-content {
  padding: 125px 20px;
}
</style>
