<template>
  <div>
    <!--mb-5 : margin-border:5 离下面有5格-->
    <div class="row mb-5">
      <div class="col-4">
        <!--导航-->
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
            <!-- 竖向导航 -->
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>

          <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
            <!-- 竖向导航 -->
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>

          <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
            <!-- 竖向导航 -->
            <a class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>

          <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
            <!-- 竖向导航 -->
            <a class="list-group-item list-group-item-action">快递信息</a>
          </router-link>

        </div>
      </div>
      <div class="col-8">
        <!--导航所对应的内容-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

</style>
