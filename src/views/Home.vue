<template>
  <div class="home">
    <first-section />
    <second-section />
    <third-section />
  </div>
</template>

<script>
import FirstSection from "../components/sections/homeSections/FirstSection.vue";
import SecondSection from "../components/sections/homeSections/SecondSection.vue";
import ThirdSection from "../components/sections/homeSections/ThirdSection.vue";

export default {
  name: "Home",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
  },
};
</script>

SecondSection
