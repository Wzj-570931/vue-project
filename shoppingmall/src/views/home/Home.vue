<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>主页</template>
    </nav-bar>
    <tab-control
      class="tab-ctl"
      :items="tabItems"
      @itemChange="changeItem"
      ref="tabControl2"
      v-show="!isItemTabShow"></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :click="true"
      @getYPosition="getYPosition"
      :pull-up-load="true"
      @pullingUp="pullingUp"
    ><!--@pullingUp="pullingUp"-->
      <home-swiper :banners="banners" @homeSwiperImageLoad="homeSwiperImageLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        class="tab-ctl"
        :items="tabItems"
        @itemChange="changeItem"
        ref="tabControl1"
        v-show="isItemTabShow"></tab-control>
      <goods-list :goods="curItem.list"></goods-list>
    </scroll>
    <back-top @click.native="scrollTop" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/NavBar/NavBar"
  import TabControl from "components/content/TabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/content/backTop/BackTop"

  import HomeSwiper from "./childComps/HomeSwiper"
  import HomeRecommend from "./childComps/HomeRecommend"
  import HomeFeature from "./childComps/HomeFeature"


  import {getMultiData, getProductData} from "network/home"
  import {debounce} from "common/util"

  export default {
    name: "Home",
    components: {BackTop, HomeRecommend, NavBar, HomeSwiper, HomeFeature, TabControl, GoodsList, Scroll},
    data() {
      return {
        banners: [],
        recommends: [],
        tabItems: [
          {name: 'pop', dsc: '流行'},
          {name: 'new', dsc: '新款'},
          {name: 'sell', dsc: '精选'}
        ],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        curItem: {},
        isBackTopShow: false,
        tabOffsetTop: 0,
        isItemTabShow: true,
        deactivatedScrolY: 0
      }
    },
    created() {
      this._getMultiData()
      this._getProductData('pop')
      this._getProductData('new')
      this._getProductData('sell')
      this.curItem = {key: 'pop', list: this.goods['pop'].list}
    },
    mounted() {
      let refresh = debounce(this.$refs.scroll.refresh, 200)
      //监听图片加载事件
      this.$bus.$on('imgLoad', () => {
        refresh()
      })
    },
    destroyed() {
      //console.log('Home destroyed')
    },
    activated() {
      //console.log(this.deactivatedScrolY);
      this.$refs.scroll.scrollTo(0, this.deactivatedScrolY)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.deactivatedScrolY = this.$refs.scroll.getY()
    },
    methods: {
      //网络请求相关
      _getMultiData() {
        getMultiData().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      _getProductData(type) {
        const page = this.goods[type].page + 1
        getProductData(type, page).then(res => {
          const newList = res.data.list
          this.goods[type].list.push(...newList)
          this.goods[type].page = page
          this.$refs.scroll.finishPullUp()
        })
      },
      //事件相关
      changeItem(name) {
        this.curItem = {key: name, list: this.goods[name].list}
        //通过不当前两个TabControl实例中的curIndex状态
        for (let index in this.tabItems) {
          if (this.tabItems[index].name === name) {
            this.$refs.tabControl1.curIndex = index
            this.$refs.tabControl2.curIndex = index
          }
        }
      },
      scrollTop() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      getYPosition(position) {
        this.isBackTopShow = -position.y > 1000
        this.isItemTabShow = (-position.y > this.tabOffsetTop) ? false : true
      },
      pullingUp() {
        this._getProductData(this.curItem.key)
        //this.$refs.scroll.refresh()
      },
      homeSwiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
      }
    },
    watch: {
      tabOffsetTop(newVal) {
      }
    }
  };
  /*new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('data')
    },1000)
  }).then(data=>{
    console.log(data);
  })*/
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-ctl {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }

  /*.content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }*/
</style>
