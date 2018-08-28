<template>
  <h1>Admin</h1>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      name: "Henry"
    };
  },
  // 组件内守卫：进入路由之前
  // beforeRouteEnter(to, from, next) {
    // ...
    // 在路由刷新之前就已经跳转了，所以访问不到this.name
    // alert("Hello " + this.name);
    // next();
    // ⚠️ 用next去学回调的方式，异步执行，当这个方法执行完成时，data早已经渲染完成，所以可以使用name
    // next(vm => {
    //   alert("Hello " + vm.name);
    // });
  // },

  // 组件内守卫：离开路由之前
  // beforeRouteLeave(to, from, next) {
  //   if (confirm("确定离开吗?") == true) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // }
};
</script>

<style scoped>
</style>
