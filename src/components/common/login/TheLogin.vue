<template>
  <div class="the-login">
    <span v-if="isUserAuth" class="the-login__welcome"
      >Welcome: {{ getUser.email }}</span
    >
    <a-form-model
      class="the-login__form"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item>
        <a-input
          type="email"
          required
          v-model="formInline.email"
          placeholder="Email"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input-password
          v-model="formInline.password"
          type="password"
          placeholder="Password"
          required
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input-password>
      </a-form-model-item>
      <a-form-model-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          Remember me
        </a-checkbox>
        <a class="login-form-forgot" href="">
          Forgot password
        </a>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formInline.email === '' || formInline.password === ''"
        >
          Log in
        </a-button>
        <a-button v-if="isUserAuth" @click="signOut">Log Out</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheLogin",
  data() {
    return {
      formInline: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["signInAction", "signOutAction"]),
    signOut() {
      this.signOutAction();
    },
    handleSubmit() {
      this.signInAction({
        email: this.formInline.email,
        password: this.formInline.password,
      });
    },
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
};
</script>
<style lang="scss">
.the-login {
  padding: 100px 0;
  @include flex(center, center, column);
  &__form {
    @include flex(center, center, column);
  }
  &__welcome {
    margin-bottom: 25px;
    @include text(red, 400, $text-color);
  }
}
</style>
