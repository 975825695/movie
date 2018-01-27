<template>
  <div class="main">
    <index-left class="index_left"></index-left>
    <index-right class="index_right"></index-right>
  </div>
</template>

<script>
import headerTop from './header.vue'
import indexLeft from './components/indexLeft.vue'
import indexRight from './components/indexRight.vue'
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
    indexLeft,
    indexRight
  }
}
</script>

<style lang="scss" scoped>
.main{
  margin-top: 20px;
  width: 900px;
  display: flex;
  justify-content: space-between;
  .index_left{
    width: 680px;
    background-color: #fff;
  }
  .index_right{
    width: 200px;
    background-color: #fff;
  }
}
</style>

