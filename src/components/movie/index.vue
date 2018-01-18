<template>
  <div class="movie">
    <header-top></header-top>
    <header-nav></header-nav>
    <swiper></swiper>
    <index-content :title="titleArr[0]"></index-content>
    <index-content :title="titleArr[1]"></index-content>
    <index-content :title="titleArr[2]"></index-content>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerTop from './components-index/header.vue'
import headerNav from './components-index/headerNav.vue'
import swiper from './components-index/swiper.vue'
import indexContent from './components-index/indexContent.vue'
import footerCom from './components-index/footerCom.vue'
export default {
  data () {
    return {
      titleArr:['即将上映','正在热映','排行榜']
    }
  },
  components:{
    headerTop,
    headerNav,
    swiper,
    indexContent,
    footerCom
  }
}
</script>

<style lang="scss" scoped>
  .movie{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    header-nav{
      width: 100%;
    }
  }
</style>
