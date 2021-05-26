<template>
  <div class="the-register">
    <a-form-model
      class="the-register__form"
      layout="inline"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item>
        <h2 class="the-register__title">Email</h2>
        <a-input type="email" v-model="formInline.email" placeholder="Email">
          <a-icon
            slot="prefix"
            type="email"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <h2 class="the-register__title">Password</h2>
        <a-input
          v-model="formInline.password"
          type="password"
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <h2 class="the-register__title">Repeat Password</h2>
        <a-input
          v-model="formInline.passwordRepeat"
          type="password"
          placeholder="Repeat your password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="
            formInline.email === '' ||
              formInline.password === '' ||
              formInline.passwordRepeat === ''
          "
        >
          Register
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "TheRegister",
  data() {
    return {
      formInline: {
        email: "",
        password: "",
        passwordRepeat: "",
      },
    };
  },
  methods: {
    ...mapActions(["signUpAction"]),
    handleSubmit() {
      if (this.formInline.password != this.formInline.passwordRepeat) {
        alert("invaild repeat password");
      } else {
        this.signUpAction({
          email: this.formInline.email,
          password: this.formInline.password,
        });
        alert("Success", "Now you can login in system");
      }
    },
  },
};
</script>

<style lang="scss">
.the-register {
  padding: 50px 0 20px;
  background-color: $side-bar-bg-color;
  @include flex(center, center);
  &__form {
    @include flex(center, center, column);
    max-width: 300px;
    width: 100%;
  }
  &__title {
    @include text($H200, 400, $text-color);
  }
}
.ant-form-item-control {
  margin-bottom: 20px;
}
.ant-form-inline .ant-form-item {
  margin-right: 0;
}
.ant-input-affix-wrapper .ant-input:not(:first-child) {
  width: 300px;
}
</style>
