<template>
  <div id="detailSwiper">
    <mt-swipe>
      <mt-swipe-item v-for="item in detailSwiperItems">
        <img :src="item" style="width: 100%;height: 100%"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "DetailSwiper",
    props: {
      detailSwiperItems: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .mint-swipe {
    height: 400px;
  }
</style>
