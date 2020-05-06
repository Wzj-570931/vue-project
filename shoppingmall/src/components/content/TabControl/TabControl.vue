<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in items" @click="itemClick(index,item.name)" :class="{active:index==curIndex}">
      <span>{{item.dsc}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        curIndex:0
      }
    },
    props: {
      items: {
        type: Array,
        default() {
          return [
            {name: 'pop', dsc: '流行'},
            {name: 'new', dsc: '新款'},
            {name: 'sell', dsc: '精选'}
          ]
        }
      }
    },
    methods: {
      itemClick(index,itemName) {
        this.curIndex=index
        this.$emit('itemChange',itemName)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .tab-control-item.active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
