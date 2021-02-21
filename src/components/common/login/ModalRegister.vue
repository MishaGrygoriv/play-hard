<template>
  <div class="modal-register">
    <a-button class="modal-register__btn" type="primary" @click="showModal"
      >Registration</a-button
    >
    <a-modal with="600" v-model="visible" title="Play-Hard" @ok="handleOk">
      <the-register />
    </a-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheRegister from "./TheRegister.vue";

export default {
  name: "ModalRegister",
  components: { TheRegister },
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
.modal-register {
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
