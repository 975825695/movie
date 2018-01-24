<template>
  <div class="mid">
    <p class="title">{{title}}</p>
    <div class="myPass" v-if="isOn===1">
      <div class="detail">
        <div class="img">
          <img src="" alt="">
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
        <input type="text" placeholder="新用户名" v-model="name" maxlength="6">
        <input type="text" placeholder="原密码" v-model="oldPwd" maxlength="6">
        <input type="text" placeholder="新密码" v-model="newPwd" maxlength="6">
        <input type="text" placeholder="再次输入" v-model="rePwd" maxlength="6">
      </div>
      <div class="confirm">
        <p @click="updateAccount()">提交修改</p>
      </div>
    </div>
    <div class="" v-if="isOn===3">
      3
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
      rePwd:''
    }
  },
  props:{
    isON:Number
  },
  computed:{
    ...mapState(['userInfo']),
  },
  created () {
  },
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
      this.userList = this.userInfo
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
          font-size: 22px;
          text-align: center;
        }
        input{
          width: 300px;
          font-size: 22px;
          text-align: center;
          margin-top: 30px;
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
          margin-top: 30px;
          color: #000;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
          background-color: #ccc;
        }
      }
    }
  }
</style>
