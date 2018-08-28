<!--根组件-->
<template>
  <div id="app">
    <div class="container">
      <!--导航-->
      <app-header></app-header>
    </div>
    <div class="container">
      <!--导航所展示的内容-->
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    // 驼峰形式的写法不需要打双引号，等价于'app-header'
    // 等价于这个写法： "app-header":Header
    appHeader: Header
  }
};
</script>

<style>
</style>
