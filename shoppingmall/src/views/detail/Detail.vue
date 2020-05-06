<template>
  <div id="detail">
    <detail-nav-bar class="navBar" @itemChange="scrollsTo" :cur-index-prop="curIndex"/>
    <scroll class="content" ref="scroll" :probe-type="3" @getYPosition="getYPosition">
      <detail-swiper :detailSwiperItems="topImages" ref="swiper"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop" ref="shopInfo"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :paramInfo="paramInfo" ref="paramInfo"/>
      <detail-comment-info :commentInfo="commentInfo" ref="comments"/>
      <goods-list :goods="goodsList" ref="recommends"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from "./childComps/DetailSwiper"
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShopInfo from "./childComps/DetailShopInfo"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
  import DetailParamInfo from "./childComps/DetailParamInfo"
  import DetailCommentInfo from "./childComps/DetailCommentInfo"

  import GoodsList from "components/content/goods/GoodsList"
  import Scroll from "components/common/scroll/Scroll"

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail"

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        goodsList: [],
        curIndex: 0
      }
    },
    created() {
      //获取iid
      this.iid = this.$route.query.iid
      //根据iid查询商品信息
      getDetail(this.iid).then(res => {
        const data = res.result
        console.log(data)
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0]
        }
      })
      //查询推荐信息
      getRecommend().then(res => {
        //console.log(res.data)
        this.goodsList = res.data.list
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      },
      scrollsTo(index) {
        //console.log('当前点击了:',index)
        switch (index) {
          case 0:
            this.$refs.scroll.scrollTo(0, this.indexY0)
            break
          case 1:
            this.$refs.scroll.scrollTo(0, this.indexY1)
            break
          case 2:
            this.$refs.scroll.scrollTo(0, this.indexY2)
            break
          case 3:
            this.$refs.scroll.scrollTo(0, this.indexY3)
            break
          default:
            this.$refs.scroll.scrollTo(0, 0)
        }
      },
      getYPosition(position) {
        if (-position.y >= -this.indexY0 && -position.y < -this.indexY1) {
          this.curIndex = 0
        } else if (-position.y >= -this.indexY1 && -position.y < -this.indexY2) {
          this.curIndex = 1
        } else if (-position.y >= -this.indexY2 && -position.y < -this.indexY3) {
          this.curIndex = 2
        } else if (-position.y >= -this.indexY3) {
          this.curIndex = 3
        }
      }
    },
    computed: {
      indexY0() {
        return -this.$refs.swiper.$el.offsetTop
      },
      indexY1() {
        return -this.$refs.paramInfo.$el.offsetTop
      },
      indexY2() {
        return -this.$refs.comments.$el.offsetTop
      },
      indexY3() {
        return -this.$refs.recommends.$el.offsetTop
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #f2f5f8;
  }

  .content {
    height: calc(100% - 44px);
  }

  .navBar {
    position: relative;
    z-index: 9;
    background-color: #f2f5f8;
  }
</style>
