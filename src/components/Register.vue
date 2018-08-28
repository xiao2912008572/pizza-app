<template>
  <!-- mt-3 离下面有点距离 -->
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <!-- mx-auto d-block :居中 -->
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>

            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>

            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input type="password" class="form-control" v-model="confirmPassword">
            </div>

            <!-- btn-block 充满整行 -->
            <button class="btn btn-block btn-success" type="submit">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入axios
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      // 如果两次输入的密码相等
      if (this.password === this.confirmPassword) {
        // 声明一个json数据
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        };

        // 只用写后面的路径，全局的URL + 这里写的地址
        axios
          .post("/users.json", formData)
          .then(res => this.$router.push({ name: "loginLink" }));
      } else {
        alert("两次密码不一致！");
      }
    }
  }
};
</script>

<style scoped>
</style>
