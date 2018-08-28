<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goToMenu() {
      // 跳转到上一次浏览的页面
      // this是vue对象
      // this.$router.go(-1)

      // 指定跳转的地址
      // this.$router.replace('/menu')

      // 跳转到指定路由的名字下
      // this.$router.replace({name:'menuLink'})

      // 通过push(压栈)进行跳转 —— 最常用
      // this.$router.push('/menu')
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>

<style scoped>
#home {
  background: url("../../src/assets/pizza.jpg");
  /* 整个屏幕可看到的高度上 vh */
  height: 85vh;
  padding: 10%;
}
h1,h2{
  margin: 7%;
}
.background {
  background: #eee;
  opacity: 0.8;
  /* 70viewpoint width */
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
