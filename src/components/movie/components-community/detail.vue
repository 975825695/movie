<template>
  <div class="main">
    <detail-left class="index_left"></detail-left>
    <index-right class="index_right"></index-right>
  </div>
</template>

<script>
import detailLeft from './components/detailLeft.vue'
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
    detailLeft,
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

