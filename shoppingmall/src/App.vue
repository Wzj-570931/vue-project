<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
  import TabBarMain from 'components/content/TabBarMain/TabBarMain'

  export default {
    name: 'App',
    components: {
      TabBarMain
    }
  }
</script>


<style>
  @import "assets/css/base.css";
</style>
