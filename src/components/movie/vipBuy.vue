<template>
  <div class="vipBuy">
    <header-top></header-top>
    <buy-content></buy-content>
    <p>心动不如行动，快快行动吧</p>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerTop from './components-index/headerNav.vue'
import buyContent from './components-vip/buyContent.vue'
import footerCom from './components-index/footerCom.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    headerTop,
    buyContent,
    footerCom
  }
}
</script>

<style lang="scss" scoped>
  .vipBuy{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
      margin-top: 250px;
      margin-bottom: 50px;
      color: #e14a43;
      font-size: 35px;
      text-align: center;
    }
  }
</style>
