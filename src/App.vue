<template>
  <div class="app">
    <!-- <a-spin :spinning="true" :delay="1000" size="large">
      <icon-logo slot="indicator" class="app__spinner" /> -->
    <main-layout>
      <router-view />
    </main-layout>
    <!-- </a-spin> -->
  </div>
</template>
<script>
// import IconLogo from "./components/icons/IconLogo.vue";
import MainLayout from "./components/layout/MainLayout";

export default {
  name: "App",
  components: {
    MainLayout,
    // IconLogo,
  },
  data() {
    return {
      spinning: true,
    };
  },
  created() {
    this.loading = false;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>
<style lang="scss">
.app {
  &__spinner {
    width: 50px;
    height: 50px;
    animation: spin 1s infinite;
    background: rgba($text-color, 0.5);
    border-radius: 50%;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
