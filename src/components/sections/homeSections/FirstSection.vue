<template>
  <div class="first-section">
    <the-carousel />
    <slick-carousel />
  </div>
</template>
<script>
import SlickCarousel from "../../common/SlickCarousel.vue";
import TheCarousel from "../../common/TheCarousel.vue";

export default {
  name: "FirstSection",
  components: { TheCarousel, SlickCarousel },
};
</script>
