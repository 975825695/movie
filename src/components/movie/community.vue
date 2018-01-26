<template>
  <div class="community">
    <header-top></header-top>
  </div>
</template>

<script>
import headerTop from './components-community/header.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    headerTop,
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
