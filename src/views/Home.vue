<template>
  <div class="home">
    <first-section />
    <second-section />
  </div>
</template>

<script>
import FirstSection from "../components/sections/homeSections/FirstSection.vue";
import SecondSection from "../components/sections/homeSections/SecondSection.vue";

export default {
  name: "Home",
  components: {
    FirstSection,
    SecondSection,
  },
};
</script>

SecondSection
