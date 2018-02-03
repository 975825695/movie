<template>
  <section>
    <div class="classify" v-show="!myDocBool">
      <!-- <p>热门 |</p> -->
      <div class="common">
        <p :class="{active:isActive}" @click="newToCom('new')">最新 |</p>
        <p :class="{active:!isActive}" @click="newToCom('com')">评论</p>
      </div>
      <div class="classes">
        <span>按类型:</span>
        <select v-model="selValue">
        <option :value="list.text" v-for="(list,index) in selList" :key="index">{{list.text}}</option>
        </select>
      </div>
    </div>
    <div class="classify" v-show="myDocBool">
      <div class="common">
        <p>我的 |</p>
        <p>文章</p>
      </div>
      <div class="classes">
        <span>按类型:</span>
        <select v-model="selValue">
        <option :value="list.text" v-for="(list,index) in selList" :key="index">{{list.text}}</option>
        </select>
        <p class="manage" @click="manageShow()" v-show="myDocBool">管理</p>
      </div>
    </div>
    <div class="contentList" v-for="(list,index) in List" :key="index" @click="ToDetail(list._id)">
      <div class="userInfo">
        <p>{{list.name}}</p>
        <p>{{list.time}}</p>
        <p><span>{{list.document.tags}}</span></p>
      </div>
      <div class="title">
        {{list.document.title}}
      </div>
      <div class="icons">
        <p>评论数：{{list.comment.length}}</p>
      </div>
      <div class="del" v-if="manage">
        <p @click.stop="delDocument(list._id)">删除</p>
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
          zan:'3',
          comment:'4',
          myDocBool:false
        }
        ],
      List:[],
      isActive:true,
      manage:false,
      selValue:'全部', // select的值
      selList:[{text:'全部'},{text:'喜剧'},{text:'战争'},{text:'爱情'}],
      tempList:[] // 临时存储，为了实现按类型分类
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData:function(){
      let query = this.$route.query.name
      // console.log(query)
      if (!query) {
        this.myDocBool = false
        let params = {}
        axios.post('/local/login/queryDocuments',params)
        .then((response) => {
        this.tempList = response.data
        this.List = response.data
        })
       } else if (query === 'my') {

        this.myDocBool = true
        let account = sessionStorage.getItem('account')
        let params = {
          account:account
        }
        axios.post('/local/login/queryMyDocuments',params)
        .then((response) => {
          this.tempList = response.data
          this.List = response.data
        })
      } else {
        this.myDocBool = false
        let params = {
          searchText: query
        }
        axios.post('/local/login/searchDocument',params)
          .then((response)=>{
          this.tempList = response.data
          this.List = response.data
        })
      }
    },
    ToDetail:function(id){
      window.location.href = `#/community/detail/${id}`
    },
    newToCom:function(func){
      let name =func
      if (name === 'new') {
        this.isActive = true
        this.List.sort((a,b)=>a.time<b.time)
      } else if (name === 'com') {
        this.isActive = false
        this.List.sort((a,b)=>a.comment.length<b.comment.length)
      }
    },
    delDocument:function(id){
      let params = {
        _id : id
      }
      axios.post('/local/login/delDocument',params)
          .then((response)=>{
            if (response.data.n === 1) {
              alert('删除成功')
              window.location.reload()
            }
      })
    },
    manageShow:function(){
      this.manage = !this.manage
    }
  },
  watch:{
    '$route':'getData',
    // list:function(cur,old){
    //   this.list = cur
    // },
    selValue:function(cur,old){
      if (cur === '喜剧') {
        this.List = this.tempList.filter(i=>i.document.tags==='喜剧')
      } else if (cur === '战争') {
        this.List = this.tempList.filter(i=>i.document.tags==='战争')
      } else if (cur === '爱情') {
        this.List = this.tempList.filter(i=>i.document.tags==='爱情')
      } else if(cur === '全部'){
        this.List = this.tempList
      }
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
      justify-content: space-between;
      border-bottom: 2px solid #eee;
      .common{
        display: flex;
        width: 200px;
        .active{
          color: red;
        }
        p{
          cursor: pointer;
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
      .classes{
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        .manage{
          padding-left: 20px;
          cursor: pointer;
          width: 50px;
          &:hover{
            color: red;
          }
        }
        span{
          display: inline-block;
          width: 70px;
        }
        select{
          width: 60px;
          height: 30px;
          text-align: center;
          font-size: 16px;
          option{
            font-size: 16px;
            text-align: center;
          }
        }
      }
    }
    .contentList{
      position: relative;
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
      .del{
        font-size: 20px;
        position: absolute;
        width: 100px;
        height: 100%;
        background-color: rgba($color: #eee, $alpha: 0.4);
        top: 0;
        right: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          z-index: 999;
          width: 80px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          text-align: center;
          &:hover{
            background-color: #ccc;
          }
        }
      }
    }
}
</style>

