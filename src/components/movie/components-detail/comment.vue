<template>
  <div class="comment">
    <header>
      评论专区
    </header>
    <p>热门评论</p>
    <section v-for="(list,index) in commentList" :key="index">
      <div class="img">
        <img :src="list.img" alt="">
      </div>
      <div class="main">
        <div class="title">
          <p>{{list.name}}</p>
          <p>{{list.vip}}</p>
        </div>
        <div class="main_com">
          <p>{{list.comment}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      commentList:[{'name':'雪山飞狐先生',vip:'VIP1','comment':'这真的是一部不折不扣的好电影啊！','img':'../../../../static/img/404.jpg'},{'name':'浪迹天涯女士',vip:'VIP0','comment':'真是烂透了！','img':'../../../../static/img/4042.jpg'},{'name':'七零八乱侄子',vip:'VIP2','comment':'这啥啊！','img':'../../../../static/img/404.jpg'}]
    }
  }
}
</script>

<style lang="scss" scoped>
.comment{
  background-color: #efefef;
  width: 800px;
  header{
    font-size: 30px;
    border-bottom: 2px solid #ccc;
  }
  p:nth-of-type(1){
    font-size: 20px;
    margin-left: 40px;
    height: 40px;
    line-height: 40px;
  }
  section{
    width: 800px;
    display: flex;
    height: 150px;
    .img{
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 100px;
        height: 100px;
        background-color: #ccc;
        display: inline-block;
      }
    }
    .main{
      width:650px;
      .title{
        display: flex;
        height: 40px;
        justify-content: space-between;
        p{
          line-height: 40px;
        }
      }
      .main_com{
        border-top: 1px solid #ccc;
      }
    }
  }
}
</style>
