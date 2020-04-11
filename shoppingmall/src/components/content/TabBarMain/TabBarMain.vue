<template>
  <tab-bar>
    <tab-bar-item path="/home" showColor="black">
      <template v-slot:item-icon><img src="~assets/img/tabbar/home.svg"></template>
      <template v-slot:item-icon-active><img src="~assets/img/tabbar/home_active.svg"></template>
      <template v-slot:item-text>首页</template>
    </tab-bar-item>
    <tab-bar-item path="/category" show-color="green">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg">
      <template #item-text>分类</template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg">
      <template #item-text>设置</template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg">
      <template #item-text>购物车</template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/TabBar/TabBar";
  import TabBarItem from "components/common/TabBar/TabBarItem";
  export default {
    name: "TabBarMain",
    components: {TabBarItem, TabBar}
  }
</script>

<style scoped>

</style>
