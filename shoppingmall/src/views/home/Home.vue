<template>
  <nav-bar class="home-nav">
    <template #center>主页</template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/NavBar/NavBar";
  import {getMultiData, getProductData} from "../../network/home";

  export default {
    name: "Home",
    components: {NavBar},
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created() {
      this._getMultiData()
    },
    methods: {
      _getMultiData() {
        getMultiData().then(res => {
          this.banners = res.data.banner.list
          console.log(this.banners)
          this.recommends = res.data.recommend.list
          console.log(this.recommends)
        })
      }
    }
  }
  /*new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('data')
    },1000)
  }).then(data=>{
    console.log(data);
  })*/
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
