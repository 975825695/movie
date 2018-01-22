<template>
  <div class="vip">
    <header-top></header-top>
    <detail></detail>
  </div>
</template>

<script>
import headerTop from './components-index/headerNav.vue'
import detail from './components-vip/detail.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    headerTop,
    detail
  }
}
</script>

<style lang="scss" scoped>
  .vip{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
