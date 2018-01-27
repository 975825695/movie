<template>
  <header>
    <div class="head">
      <div class="title">
        <router-link :to="{path:'/community'}">影评社区</router-link>
        <router-link :to="{path:'/'}">影院首页</router-link>
      </div>
      <div class="head_input">
         <input type="text" placeholder="搜索文章">
         <p>搜索</p>
      </div>
      <router-link :to="{path:'/community/write'}">写文章</router-link>
      <div class="userWel">
        欢迎你 | {{username}}
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data () {
    return {
      username:''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData:function(){
      let username = sessionStorage.getItem('name');
      this.username = username
    }
  }
}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .head{
      width: 1024px;
      height: 80px;
      display: flex;
      .title{
        display: flex;
        font-size: 26px;
        font-family: "楷体";
        height: 80px;
        line-height: 80px;
        width: 250px;
        padding-left: 50px;
        a:nth-of-type(1){
          display: inline-block;
          width: 150px;
          font-size: 28px;
          color: #aaa;
        }
        a:nth-of-type(2){
          display: inline-block;
          width: 100px;
          color:#007fff;
          font-size: 22px;
        }
      }
      .head_input{
        display: flex;
        width: 450px;
        height: 80px;
        align-items: center;
        justify-content: center;
        input{
          width: 200px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border: none;
          background-color:rgba($color: #eee, $alpha: 0.6);
          &::placeholder{
            color:#ccc;
          }
        }
        p{
          width: 40px;
          height: 40px;
          font-size: 18px;
          cursor: pointer;
          line-height: 40px;
          color: #aaa;
          background-color:rgba($color: #eee, $alpha: 0.6);
        }
      }
      a{
        display: inline-block;
        width: 60px;
        font-size: 18px;
        height: 80px;
        line-height: 80px;
        color: #007fff;
      }
      .userWel{
        width: 200px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #007fff;
      }
    }
}
</style>

