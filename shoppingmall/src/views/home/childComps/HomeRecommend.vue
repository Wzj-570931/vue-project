<template>
  <div class="recommends">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image"/>
        <span style="display: block">{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommends {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
  }

  .recommends img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
