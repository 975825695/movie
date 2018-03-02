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
      this.$router.push({path:'/'})
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:750px){
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
}
@media screen and (max-width:750px){
   header{
    width: 100%;
    height: 80px;
    background-color: #eee;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    p{
      font-size: 26px;
      height: 30px;
      line-height: 30px;
      color: #000;
      cursor: pointer;
    }
    p:nth-of-type(1){
      width: 130px;
      margin-left: 20px;
      // border-right: 2px solid #ccc;
      margin-right: 20px;
    }
  }
}

</style>

