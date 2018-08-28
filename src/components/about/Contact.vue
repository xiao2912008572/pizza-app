<template>
  <div class="card text-dark bg-light mb-5" style="margin-top:8px;">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">291008572@qq.com</p>

      <router-link :to="{name:'phoneNumber'}">电话</router-link>
      <router-link :to="{name:'personName'}">联系人</router-link>

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
  export default {
    name: "contact"
  }
</script>

<style scoped>

</style>
