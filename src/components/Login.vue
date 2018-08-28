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

            <!-- btn-block 充满整行 -->
            <button class="btn btn-block btn-success" type="submit">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      axios.get("/users.json").then(res => {
        // console.log("response", res.data);

        // 拿到整个对象
        const data = res.data; // data是一个对象，里面有两条数据
        const users = []; // users是一个数组
        for (let key in data) {
          // 遍历data，就可以拿到key
          const user = data[key];
          // console.log("user", user);
          users.push(user);
        }
        // 实现过滤
        // es6语法中中filter使用迭代器函数
        let result = users.filter(user => {
          return user.email === this.email && user.password === this.password;
        });

        // console.log("result", result);
        // 判断result不为空且result的长度是否大于0
        if (result != null && result.length > 0) {
          this.$router.push({ name: "homeLink" });
        } else {
          alert("账户或密码错误!");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
