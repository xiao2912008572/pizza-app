<template>
  <div>
    <h1>Home</h1>
    <button @click="goToMenu" class="btn btn-success">Let's order!</button>

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
        this.$router.push({name:'menuLink'})
      }
    }
  }
</script>

<style scoped>

</style>
