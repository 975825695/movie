<template>
  <div class="community">
    <header-top></header-top>
    <router-view></router-view>
  </div>
</template>

<script>
import headerTop from './components-community/header.vue'
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
    headerTop
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

