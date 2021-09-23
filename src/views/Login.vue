<template>
  <div class="login">
    <van-cell-group>
      <van-field v-model="value" label="账号" placeholder="请输入账号" />
      <van-field v-model="value" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <van-button type="info" @click="onSubmit">登录</van-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
.login {
  margin-top: 15rem;
}

button {
  margin-top: 2rem;
  width: 50%;
}
</style>
