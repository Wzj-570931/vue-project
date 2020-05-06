<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        bScroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default() {
          return 0
        }
      },
      click: {
        type: Boolean,
        default() {
          return true;
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return true;
        }
      }
    },
    mounted() {
      this.bScroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        click: this.click,
        pullUpLoad: this.pullUpLoad,
        mouseWheel: true,//开启鼠标滚轮
        disableMouse: false,//启用鼠标拖动
        disableTouch: false//启用手指触摸
      })

      if (this.probeType === 2 || this.probeType === 3) {
        // console.log(this.bScroll.scrollerHeight);
        this.bScroll.on('scroll', (position) => {
          this.$emit('getYPosition', position)
        })
      }
      if(this.pullUpLoad){
        this.bScroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 200) {
        this.bScroll && this.bScroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.bScroll && this.bScroll.finishPullUp()
      },
      refresh() {
        this.bScroll && this.bScroll.refresh()
      },
      getY(){
        return this.bScroll ? this.bScroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
