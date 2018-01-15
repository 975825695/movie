<template>
  <div class="login">
    <header-top></header-top>
    <login-content></login-content>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerTop from './components-login/header.vue'
import loginContent from './components-login/content.vue'
import footerCom from './components-index/footerCom.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    headerTop,
    loginContent,
    footerCom
  }
}
</script>

<style lang="scss" scoped>
  .login{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
