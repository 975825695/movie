<template>
  <section>
    <div class="userInfo">
      <img :src="photoUrl" alt="">
      <p>{{dataList.name}}</p>
      <p>{{dataList.time}}</p>
      <p><span v-for="(list,index) in tagList" :key="index">{{list}}</span></p>
    </div>
    <p class="title">
      {{docu.title}}
    </p>
    <div class="content" v-html="docu.content">
    </div>
    <div class="comment">
      <div class="com_list" v-for="(list,index) in commentList" :key="index">
        <div class="com_user">
          <img :src="list.photo" alt="">
          <p>用户名：{{list.account}}</p>
          <p>{{list.time}}</p>
        </div>
        <div class="com_content">
          {{list.comment}}
        </div>
      </div>
    </div>
    <div class="write_comment">
      <textarea placeholder="快发表评论吧！" v-model="comment">

      </textarea>
      <div class="write_sub">
        <p @click="subComment()">提交</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      dataList:[],
      tagList:[],
      docu:{},
      photoUrl:'',
      account:'',
      userInfo:'',
      comment:'',
      commentList:[]
    }
  },
  created () {
    this.getData()
     let photo = sessionStorage.getItem('photo')
     console.log(photo)
  },
  methods: {
    getData:function(){
      const id = this.$route.params.id
      let params = {
        id : id
      }
      axios.post('/local/login/queryDetailDoc',params)
        .then((response) => {
          this.dataList = response.data
          this.tagList = response.data.document.tags
          this.docu = response.data.document
          this.account = response.data.account
          this.commentList = response.data.comment
      }).then(()=>{
        let params = {
          account :this.account
        }
        axios.post('/local/login/queryAccount',params)
        .then((response)=>{
          this.userInfo = response.data[0]
          this.photoUrl = '../../../'+this.userInfo.photo
        })
      })
    },
    subComment:function(){
      if(!this.comment) return
      const id = this.$route.params.id
      let time = new Date()
      let account = sessionStorage.getItem('account')
      let name = sessionStorage.getItem('name')
      let photo = sessionStorage.getItem('photo')
      photo = '../../../'+photo
      let params ={
        id:id,
        comment: this.comment,
        time:time,
        account:account,
        name:name,
        photoUrl:photo
      }
      axios.post('/local/login/saveComment',params)
        .then((response)=>{
          alert('评论成功')
          window.location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .userInfo{
      width: 100%;
      display: flex;
      img{
        margin-left: 25px;
        margin-top: 25px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-block;
      }
      p{
        height: 100px;
        font-size: 16px;
        line-height: 100px;
        text-align: center;
        span{
          padding-left: 10px;
        }
      }
      p:nth-of-type(1){
        width: 100px;
      }
      p:nth-of-type(2){
        width: 200px;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
      }
      p:nth-of-type(3){
        width: 100px;
      }
    }
    .title{
      font-size: 35px;
      height: 40px;
      line-height: 40px;
      margin-left: 25px;
    }
    .content{
      width: 100%;
      margin-top: 20px;
      margin-left: 30px;
      height: 300px;
    }
    .comment{
      border-top: 1px solid #ccc;
      width: 100%;
      .com_list{
        width: 90%;
        margin-left: 20px;
        margin-top: 15px;
        border-bottom: 1px solid #ccc;
        .com_user{
        width: 100%;
        display: flex;
        img{
          display: inline-block;
          width: 50px;
          height: 50px;
          background-color: #ccc;
          border-radius: 50%;
        }
        p:nth-of-type(1){
          margin-left: 50px;
          width: 200px;
          height: 50px;
          line-height: 50px;
          font-weight: bold;
        }
        p:nth-of-type(2){
          height: 50px;
          line-height: 50px;
          width: 150px;
          font-size: 16px;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow: hidden;
        }
      }
      .com_content{
        font-size: 18px;
        padding-left: 100px;
        margin-bottom: 20px;
      }
      }
    }
    .write_comment{
      margin-top: 20px;
      border-radius: 10px;
      background-color: #eee;
      margin-bottom: 20px;
      height: 180px;
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      textarea{
        &::placeholder{
          font-size: 20px;
          padding: 20px;
        }
        width: 400px;
        border-radius: 2px;
        height: 100px;
      }
      .write_sub{
        margin-top: 10px;
        width: 400px;
        display: flex;
        justify-content: flex-end;
        p{
          width: 50px;
          height: 30px;
          line-height: 30px;
          background-color: #007fff;
          border-radius: 2px;
          text-align: center;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
}
</style>

