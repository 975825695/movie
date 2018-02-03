<template>
  <div class="mid">
    <p class="title">{{title}}</p>
    <div class="myPass" v-if="isOn===1">
      <div class="detail">
        <div class="img">
          <img :src="photoUrl" alt="">
        </div>
        <div class="pass">
          <p>通行证：{{userInfo.account}}</p>
          <p>用户名：{{userInfo.name}}</p>
        </div>
      </div>
    </div>
    <div class="manPass" v-if="isOn===2">
      <div class="info">
        <p>用户名：{{userInfo.name}}</p>
      </div>
      <div class="update">
        <p>修改密码</p>
        <input type="text" placeholder="新用户名1-6位" v-model="name" maxlength="6" >
        <input type="text" placeholder="原密码" v-model="oldPwd" maxlength="6">
        <input type="text" placeholder="新密码1-6位" v-model="newPwd" maxlength="6">
        <input type="text" placeholder="再次输入" v-model="rePwd" maxlength="6" @blur="ccap()">
        <span>{{message}}</span>
      </div>
      <div class="confirm">
        <p @click="updateAccount()">提交修改</p>
      </div>
    </div>
    <div class="upLoad" v-if="isOn===3">
        <img :src="photoUrl" alt="">
        <input type="file" name="photo" @change="upLoadFile">
        <p @click="upLoadImg()">上传</p>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      title:'我的通行证',
      queryList:[],
      isOn:1,
      userList:{},
      name:'',
      oldPwd:'',
      newPwd:'',
      rePwd:'',
      message:'',
      photo:'',
      photoUrl:'',
      saveBase64:'',
      userInfo:{}
    }
  },
  props:{
    isON:Number
  },
  created () {
    this.init()
  },
  // beforeUpdate () {
  //   // this.photoUrl = '../../'+this.userInfo.photo
  //   this.photoUrl = this.saveBase64
  // },
  watch:{
    isON(cur,old){
      // console.log(cur,old)
      this.isOn = cur
      if (cur === 1) {
        this.title = '我的通行证'
      } else if (cur === 2) {
        this.title = '管理通行证'
      } else if (cur ===3) {
        this.title = '上传头像'
      }
    }
  },
  methods:{
    init:function(){
      let account = sessionStorage.getItem('account')
        let params = {
          account : account
        }
        axios.post('/local/login/queryAccount',params)
        .then((response) => {
        const user = JSON.stringify(response.data[0])
        sessionStorage.setItem("user",user)
        this.userInfo = response.data[0]
        this.photoUrl = '../../'+response.data[0].photo
        if (response.data[0].photo){
           sessionStorage.setItem('photo',response.data[0].photo)
        }
      })
    },
    updateAccount:function(){
      let params = {
        account : this.userInfo.account,
        name:this.name,
        password:this.newPwd
      }
      if (this.oldPwd === this.userInfo.password) {
        if (this.newPwd === this.rePwd) {
          axios.post('/local/login/updateUser',params)
          .then((response) => {
            alert('修改成功！')
            window.location.reload()
            sessionStorage.setItem('name',this.name)
          })
        }
      }
    },
    ccap:function(){
      if (this.newPwd !== this.rePwd) {
        this.message = '两次输入不一致!'
      } else {
        this.message = ''
      }
    },
    // 这个地方转了base64要注意
    upLoadFile:function(e){
      const file = e.target.files || e.dataTransfer.files
      console.log(file)
      if (!file.length) return
      const reader = new FileReader()
      reader.readAsDataURL(file[0])
      let _this = this
      reader.onload= function(e){
        _this.photoUrl = this.result,
        _this.saveBase64 = this.result
      }
      this.photo = file[0]
    },
    upLoadImg:function(){
      let form = new FormData()
      form.append('photo',this.photo)
      form.append('account',this.userInfo.account)
      axios.post('/local/login/upImg',form,{headers:{'Content-Type':'multipart/form-data'}})
        .then((response) => {
          alert('上传成功！')
          window.location.reload()
      })
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
  .mid{
    background-color: #fff;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      // padding-left: 100px;
      text-align: center;
        font-size: 22px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }
    .myPass{
      margin-top: 20px;
      width: 500px;
      .detail{
        width: 500px;
        display: flex;
        background-color: #eee;
        .img{
          width: 150px;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            display: inline-block;
            background-color: #ccc;
            width: 100px;
            height: 100px;
          }
        }
        .pass{
          width: 350px;
          height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p{
            margin-bottom: 20px;
            padding-left: 20px;
            font-size: 16px;
          }
        }
      }
    }
    .manPass{
      width: 100%;
      .info{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p{
          width: 400px;
          font-size: 22px;
        }
      }
      .update{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p{
          margin-top: 20px;
          font-size: 22px;
          text-align: center;
        }
        input{
          width: 300px;
          font-size: 22px;
          text-align: center;
          margin-top: 20px;
        }
        span{
          display: inline-block;
          text-align: center;
          font-size: 22px;
          margin-top: 10px;
          color:red;
        }
      }
      .confirm{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p{
          font-size: 22px;
          text-align: center;
          width: 150px;
          margin-top: 20px;
          color: #000;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
          background-color: #ccc;
        }
      }
    }
    .upLoad{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
        img{
          margin-top: 20px;
          display: inline-block;
          width: 200px;
          height: 200px;
          background-color: #ccc;
        }
        input{
          text-align: center;
          width: 200px;
          font-size: 20px;
          margin-top: 20px;
        }
        p{
          font-size: 22px;
          text-align: center;
          background-color: #ccc;
          width: 100px;
          margin-top: 20px;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
        }
    }
  }
</style>
