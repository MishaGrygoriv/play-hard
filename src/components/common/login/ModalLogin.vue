<template>
  <div class="modal-login">
    <a-button class="modal-login__btn" type="primary" @click="showModal"
      >Login</a-button
    >
    <a-modal with="600" v-model="visible" title="Play-Hard" @ok="handleOk">
      <the-login />
    </a-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheLogin from "./TheLogin.vue";

export default {
  name: "ModalLogin",
  components: { TheLogin },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    ...mapGetters(["isUserAuth"]),
  },
  methods: {
    ...mapActions(["signOutAction"]),
    signOut() {
      this.signOutAction();
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>

<style lang="scss">
.modal-login {
  position: relative;
  &::before {
    content: "";
    background-color: $border-line-color;
    position: absolute;
    width: 1px;
    height: 24px;
    top: 5px;
    bottom: 0;
    left: 66px;
    right: 0;
  }
  &__btn {
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    @include text($H40, 400, $yellow-color);
    &:hover {
      color: darken($yellow-color, 30);
    }
    &:hover,
    &:active,
    &:focus {
      color: darken($yellow-color, 30);
      background: none;
      border: none;
      outline: none;
      box-shadow: none;
      border-radius: 0;
    }
  }
}
</style>
