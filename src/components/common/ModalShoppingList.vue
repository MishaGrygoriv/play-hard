<template>
  <div class="modal-shopping-list">
    <a-badge :count="cart.length" :offset="[-30, -10]">
      <button class="modal-shopping-list__btn header__icon" @click="showModal">
        <a-icon type="shopping" />
      </button>
    </a-badge>
    <a-modal with="600" v-model="visible" title="Shopping List" @ok="handleOk">
      <template slot="footer">
        <a-button @click="$store.dispatch('gameStore/clearCartState')">
          Remove
        </a-button>
        <a-button
          key="submit"
          type="primary"
          @click="
            $store.dispatch('gameStore/clearCartState');
            handleOk();
          "
        >
          Buy Now
        </a-button>
      </template>
      <shopping-list />
    </a-modal>
  </div>
</template>

<script>
import ShoppingList from "./ShoppingList.vue";
import { mapState } from "vuex";

export default {
  name: "ModalShoppingList",
  components: { ShoppingList },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
    },
  },
  computed: {
    ...mapState("gameStore", ["cart"]),
  },
};
</script>

<style lang="scss">
.modal-shopping-list {
  @include flex(center, center);
  &__btn {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
