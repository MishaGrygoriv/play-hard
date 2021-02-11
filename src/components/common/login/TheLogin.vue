<template>
  <div>
    <a-button type="primary" @click="showModal">
      Open Modal
    </a-button>
    <a-modal id="modal" v-model="visible" title="Basic Modal" @ok="handleOk">
      <a-form-model
        layout="inline"
        :model="formInline"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            Log in
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "TheLogin",
  data() {
    return {
      visible: false,
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleSubmit() {
      this.$router.push("/");
      //   if (
      //     this.formInline.user === "admin" &&
      //     this.formInline.password === "12345"
      //   ) {
      //     this.$router.push("/");
      //   }
      console.log(this.formInline);
    },
  },
};
</script>
