<template>
  <section>
    <div class="classify">
      <p>热门 |</p>
      <p>最新 |</p>
      <p>评论</p>
    </div>
    <div class="contentList" v-for="(list,index) in contentList" :key="index">
      <div class="userInfo">
        <p>{{list.username}}</p>
        <p>{{list.datetime}}</p>
        <p>{{list.keyword}}</p>
      </div>
      <div class="title">
        {{list.title}}
      </div>
      <div class="icons">
        <p>点赞数：{{list.zan}}</p>
        <p>评论数：{{list.comment}}</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      contentList:[
        {
          username:'雪山飞狐',
          datetime:'一天前',
          keyword:'Node.js',
          title:'关于程序员的一点感想',
          zan:'2',
          comment:'4'
        },
        {
          username:'令狐冲',
          datetime:'三天前',
          keyword:'Node.js',
          title:'关于程序员的一点感想',
          zan:'2',
          comment:'4'
        },
        {
          username:'蒋王爷',
          datetime:'二天前',
          keyword:'Node.js',
          title:'关于程序员的一点感想',
          zan:'2',
          comment:'4'
        }
        ]
    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
section{
    width: 100%;
    .classify{
      width: 100%;
      height: 40px;
      display: flex;
      border-bottom: 2px solid #eee;
      p{
        font-size: 16px;
        color: #aaa;
        height: 40px;
        line-height: 40px;
        width: 50px;
      }
      p:nth-of-type(1){
        margin-left: 20px;
      }
    }
    .contentList{
      &:hover{
        background-color: rgba($color: #eee, $alpha: 0.2);
        cursor: pointer;
      }
      border-bottom: 2px solid #eee;
      width: 100%;
      .userInfo{
        padding-top: 15px;
        width: 300px;
        display: flex;
        p{
          color: #ccc;
          font-size: 14px;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow: hidden;
        }
        p:nth-of-type(1){
          margin-left: 20px;
        }
      }
      .title{
        width: 100%;
        height: 50px;
        font-size: 22px;
        line-height: 50px;
        margin-left: 20px;
      }
      .icons{
        display: flex;
        width: 250px;
        p{
          padding-left: 20px;
          color:#ccc;
        }
        margin-bottom: 20px;
      }
    }
}
</style>

