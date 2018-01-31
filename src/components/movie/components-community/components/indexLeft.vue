<template>
  <section>
    <div class="classify">
      <p>热门 |</p>
      <p>最新 |</p>
      <p>评论</p>
    </div>
    <div class="contentList" v-for="(list,index) in List" :key="index" @click="ToDetail(list._id)">
      <div class="userInfo">
        <p>{{list.name}}</p>
        <p>{{list.time}}</p>
        <p><span v-for="(item,index) in list.document.tags" :key="index">{{item}}</span></p>
      </div>
      <div class="title">
        {{list.document.title}}
      </div>
      <div class="icons">
        <p>点赞数：1</p>
        <p>评论数：2</p>
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
        }
        ],
      List:[]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData:function(){
      let params = {}
       axios.post('/local/login/queryDocuments',params)
        .then((response) => {
          this.List = response.data
       })
    },
    ToDetail:function(id){
      window.location.href = `#/community/detail/${id}`
    }
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
        width: 400px;
        display: flex;
        p{
          color: #ccc;
          font-size: 14px;
          width: 150px;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow: hidden;
        }
        p:nth-of-type(1){
          margin-left: 20px;
        }
        p:nth-of-type(3){
          span{
            padding-left: 20px;
          }
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

