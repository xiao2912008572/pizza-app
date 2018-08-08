<!--根组件-->
<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    components: {
      // 驼峰形式的写法不需要打双引号，等价于'app-header'
      // 等价于这个写法： "app-header":Header
      appHeader: Header,

    }
  }
</script>

<style>
</style>
