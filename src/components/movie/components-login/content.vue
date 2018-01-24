<template>
  <section>
    <div class="form">
      <div class="title">
        <p @click="beActive(true)" :class="{active:activeBool}">请先登录</p>
        <p @click="beActive(false)" :class="{active:!activeBool}">注册账号</p>
      </div>
      <div class="input">
        <input type="text" placeholder="请输入账号" maxlength="5" v-model="account">
        <input type="password" placeholder="密码" v-model="password">
        <input type="button" value="登录" v-if="activeBool" @click="login()">
        <input type="button" value="注册" v-if="!activeBool" @click="register()">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      queryList:[],
      dataBool:true,
      activeBool:true,
      account:'',
      password:''
    }
  },
  created () {
  },
  methods:{
    beActive:function(bool){
      this.activeBool = bool;
    },
    register:function(){
      let params = {
        account : this.account,
        password : this.password
      }
      axios.post('/local/login/createAccount',params)
        .then((response) => {
          if (response.data.retCode === 1) {
            alert('请再次登录，谢谢')
            this.activeBool = true
          }
      })
    },
    login:function(){
      let params = {
        account : this.account,
        password : this.password
      }
      axios.post('/local/login/getAccount',params)
        .then((response) => {
          if (response.data.retCode === 1) {
            sessionStorage.setItem("name", response.data.name);
            sessionStorage.setItem("vip", response.data.vip);
            sessionStorage.setItem("account", response.data.account);
            window.location.href = '/'
          } else if (response.data.retCode === 2) {
            alert('密码错误')
          }
      })
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
section{
  width: 1200px;
  height: 600px;
  background-color: #eee;
  background-image: url('http://image13.m1905.cn/uploadfile/2017/1221/thumb_1_1000_322_20171221101456705154.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  .form{
    top: 100px;
    right: 100px;
    width: 400px;
    height: 400px;
    position: absolute;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      margin-top: 20px;
      width:300px;
      display: flex;
      height: 50px;
      border-bottom: 1px solid #000;
      p{
        font-size: 25px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
      }
      p:nth-of-type(1){
        text-align: left;
      }
      p:nth-of-type(2){
        text-align: right;
      }

    }
    .input{
      width: 300px;
      input{
        width: 300px;
        margin-top: 50px;
        height: 40px;
        text-align: center;
      }
      input:nth-of-type(3){
        background-color: #418fe4;
        height: 50px;
        border-radius: 10px;
        border: none;
        font-size: 20px;
      }
    }
  }
}

.active{
  border-bottom: 2px solid #418fe4;
  color:#418fe4;
}
</style>

