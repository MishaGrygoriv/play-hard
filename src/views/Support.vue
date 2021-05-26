<template>
  <div class="support">
    <div class="page-art">
      <div
        class="page-art__colored"
        :style="{
          zIndex: `1`,
          height: `500px`,
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url(https://i.insider.com/5947f122e592ed51008b52b1?width=1200&format=jpeg)`,
        }"
      ></div>
    </div>
    <div class="support__accordion-wrapper">
      <a-collapse class="support__accordion" v-model="activeKey">
        <a-collapse-panel
          class="support__title"
          key="1"
          header="How can we help you?"
        >
          <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="Questions" :disabled="false">
          <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="Support">
          <p>{{ text }}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>
<script>
export default {
  name: "Support",
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ["1"],
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
};
</script>
<style lang="scss">
.support {
  padding: 150px 0 190px;
  &__accordion-wrapper {
    @include flex(center, center);
    width: 600px;
  }
  &__accordion {
    max-width: 600px;
    width: 100%;
    z-index: 2;
    background-color: $side-bar-bg-color;
  }
}
.page-art {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 92.5%;
  background-color: #151515;
  &__colored {
    max-height: 100%;
    background-size: cover;
    width: 100%;
    height: 100%;
    background: no-repeat top;
    background-size: cover;
  }
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  @include text($H220, 400, $light-color);
}
</style>
