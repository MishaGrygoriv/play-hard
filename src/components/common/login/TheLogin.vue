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
      <h2 class="the-login__title">Email</h2>
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
        <h2 class="the-login__title">Password</h2>
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
        <div class="the-login__checkbox-wrapper">
          <a-checkbox
            class="the-login__checkbox"
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
          <a class="login-form-forgot the-login__forgot" href="#">
            Forgot password
          </a>
        </div>
        <div class="the-login__btn-wrapper">
          <a-button
            class="the-login__btn"
            type="primary"
            html-type="submit"
            :disabled="formInline.email === '' || formInline.password === ''"
          >
            Log in
          </a-button>
          <a-button class="the-login__btn" v-if="isUserAuth" @click="signOut"
            >Log Out</a-button
          >
        </div>
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
  padding: 50px 100px 20px;
  background-color: $side-bar-bg-color;
  @include flex(center, center, column);
  &__form {
    @include flex(stretch, stretch, column);
  }
  &__welcome {
    margin-bottom: 25px;
    @include text($H210, 400, $yellow-color);
  }
  &__title {
    @include text($H200, 400, $text-color);
  }
  &__btn-wrapper {
    @include flex(center, center);
  }
  &__btn {
    background-color: transparent;
    outline: none;
    border: 1px solid $yellow-color;
    max-width: 100px;
    width: 100%;
    &:hover,
    &:focus {
      background-color: $yellow-color;
      border: 1px solid $side-bar-bg-color;
      color: $dark-color;
    }
    &:first-child {
      margin-right: 20px;
    }
  }
  &__checkbox-wrapper {
    @include flex(start, start);
    margin-bottom: 20px;
  }
  &__forgot {
    @include text($H50, 400, $yellow-color);
    &:hover {
      color: rgba($yellow-color, 0.5);
    }
  }
  &__checkbox {
    @include text($H30, 400, $text-color);
    margin-right: 20px;
  }
}
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  background-color: $side-bar-bg-color;
  outline: none;
}
.ant-btn-primary {
  background-color: $side-bar-bg-color;
  color: $yellow-color;
  outline: none;
  border: 1px solid transparent;
  transition: all 0.5s ease;
  &:hover {
    background-color: $side-bar-bg-color;
    outline: none;
    border: 1px solid $yellow-color;
  }
}
</style>
