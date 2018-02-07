<template>
  <header>
    <p @click="goToHome()">在线影院</p>
    <!-- <p>登录</p> -->
  </header>
</template>

<script>

export default {
  data () {
    return {
      queryList:[],
      dataBool:true
    }
  },
  created () {
  },
  methods:{
    goToHome:function(){
      window.location.href = "/"
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: 100px;
    background-color: #eee;
    display: flex;
    align-items: center;
    p{
      font-size: 30px;
      height: 30px;
      line-height: 30px;
      color: #000;
      cursor: pointer;
    }
    p:nth-of-type(1){
      width: 200px;
      margin-left: 100px;
      border-right: 2px solid #ccc;
      margin-right: 20px;
    }
  }
</style>

