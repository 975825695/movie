<template>
  <div class="community">
    <header-top></header-top>
    <router-view></router-view>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerTop from './components-community/header.vue'
import footerCom from './components-index/footerCom.vue'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  components:{
    headerTop,
    footerCom
  }
}
</script>

<style lang="scss" scoped>
.community{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

