<template>
  <div class="query">
    <!-- <header-top></header-top> -->
    <header-nav></header-nav>
    <detail></detail>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerTop from './components-index/header.vue'
import headerNav from './components-index/headerNav.vue'
import detail from './components-query/detail.vue'
import footerCom from './components-index/footerCom.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    headerTop,
    headerNav,
    detail,
    footerCom
  }
}
</script>

<style lang="scss" scoped>
  .query{
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
