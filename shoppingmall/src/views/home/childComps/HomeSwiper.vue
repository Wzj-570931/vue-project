<template>
  <div class="block">
   <!-- <el-carousel height="200px">
      <el-carousel-item v-for="item in banners">
        <a :href="item.link"><img style="width: 100%;height: 100%;" :src="item.image" @load="setImageLoad"/></a>
      </el-carousel-item>
    </el-carousel>-->

      <mt-swipe class="sippers" @change="imageChange">
        <mt-swipe-item v-for="item in banners">
          <a :href="item.link"><img style="width: 100%;height: 100%;" :src="item.image" @load="setImageLoad"/></a>
          <!--<img :src="item" style="width: 100%;height: 100%"/>-->
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      setImageLoad() {
        if (!this.isLoad) {
          this.$emit('homeSwiperImageLoad')
          this.isLoad = true
        }

      },
      imageChange(){
        // console.log('imagechange')
      }
    }
  }
</script>

<style scoped>
.sippers{
  height: 200px;
}
</style>
