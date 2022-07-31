<template>
  <div>
    <!--头部组件标签-->
    <v-header></v-header>
    <!--包含 3 个路由 v-link-->
    <div class="tab">
      <div class="tab-item">
        <a v-link="{ path: '/goods' }">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{ path: '/ratings' }">评价</a>
      </div>
      <div class="tab-item">
        <a v-link="{ path: '/seller' }">商家</a>
      </div>
    </div>
    <!--各路由 template 页面容器-->
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/header/header";
export default {
  // 配置组件
  components: {
    "v-header": header,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tab
  .tab-item
    display inline-block
    .v-link-active
      color: #ff0000
</style>
