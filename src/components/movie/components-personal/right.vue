<template>
  <div class="right">
    <div class="recom">
      <p>为您推荐</p>
      <div class="alist">
        <router-link :to="{path:'/vipBuy'}">权限影片</router-link>
        <router-link :to="{path:'/'}">正在热映</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      queryList:[]
    }
  },
  created () {
  },
  methods:{
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
  .right{
    width: 100%;
    background-color: #e4e7ec;
    .recom{
      width: 100%;
      height: 200px;
      p{
        margin-top: 20px;
        text-align: center;
        font-size: 20px;
        color: #000;
      }
      .alist{
        display: flex;
        flex-direction: column;
        align-items: center;
        a{
          display: inline-block;
          text-align: center;
          width: 100px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          cursor: pointer;
          height: 30px;
          line-height: 30px;
          margin-top: 20px;
        }
        a:nth-of-type(1){
          background-color:#5794d3;
          color: #fff;
        }
        a:nth-of-type(2){
          background-color:#a088d4;
          color: #fff;
        }
      }
    }
  }
</style>
