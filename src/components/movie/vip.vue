<template>
  <div class="login">
    <header-top></header-top>
  </div>
</template>

<script>
import headerTop from './components-index/headerNav.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    headerTop
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
