<template>
  <div id="detailNavBar">
    <nav-bar>
      <template #left>
        <div @click="back">
          <img src="~assets/img/common/back.svg" class="leftImg"/>
        </div>
      </template>
      <template #center>
        <div class="detailUl">
          <span
                  v-for="(item,index) in detailBarItems"
                  @click="itemClick(index)"
                  :class="{actived:curIndex===index}">
            {{item}}</span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/NavBar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        detailBarItems: ['商品', '参数', '评论', '推荐'],
      }
    },
    computed:{
      curIndex(){
        return this.curIndexProp
      }
    },
    props: {
      curIndexProp: {
        type: Number,
        default(){
          return 0
        }
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      itemClick(index) {
        this.curIndex = index
        console.log('当前的item index是:' + index)
        this.$emit('itemChange', index)
      }
    }
  }
</script>

<style scoped>
  .detailUl {
    display: flex;
  }

  .detailUl span {
    flex: 1;
  }

  .leftImg {
    margin-top: 10px;
    text-align: center;
  }

  .actived {
    color: red;
  }
</style>
