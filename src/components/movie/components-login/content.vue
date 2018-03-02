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
        <div id="mpanel1" class="ccap">
        </div>
        <input type="button" id="check-btn" value="登录" v-if="activeBool" @click="login()">
        <input type="button" value="注册" v-if="!activeBool" @click="register()">
      </div>
    </div>
  </section>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data () {
    return {
      queryList:[],
      dataBool:true,
      activeBool:true,
      account:'',
      password:'',
      ccapShow:false
    }
  },
  mounted () {
    this.ccapInit()
  },
  methods:{
    beActive:function(bool){
      this.activeBool = bool;
    },
    ccapInit:function(){
      var _this = this
      $('#mpanel1').slideVerify({
    //滑动验证码type=1，拼图验证码type=2
        type : 2,
        mode : 'pop',
        vOffset : 5,
        vSpace : 5,
        explain : '向右滑动完成验证',
        imgUrl : '../../../../static/images/',
        imgName : ['2.jpg', '4042.jpg'],
        imgSize : {
          width: '100%',
          height: '200px',
        },
        blockSize : {
          width: '40px',
          height: '40px',
        },
        barSize : {
          width: '100%',
          height : '40px',
        },
        ready : function() {
        },
        success : function() {
          _this.ccapShow = true
        },
        error : function() {
          alert('验证码不匹配！');
        }
      })
    },
    register:function(){
      if (!this.account||!this.password) {
        // Toast('用户名或密码不能为空')
        Toast({
          duration: '3000',
          message: '用户名或密码不能为空'
        });
      } else if (!this.ccapShow) {
        Toast({
          duration: '3000',
          message: '请先滑动验证验证码'
        });
      } else {
        let params = {
        account : this.account,
        password : this.password
      }
      axios.post('/local/login/createAccount',params)
        .then((response) => {
          console.log(response)
          if (response.data.retCode === 1) {
            Toast({
              duration: '3000',
              message: '请再次登录，谢谢'
            });
            this.activeBool = true
          } else if (response.data.retCode === 2) {
            Toast({
              duration: '3000',
              message: '此用户已存在，请重新输入谢谢'
            });
          }
      })
      }
    },
    login:function(){
       if (!this.account||!this.password) {
        Toast({
          duration: '3000',
          message: '用户名或密码不能为空'
        });
      } else if (!this.ccapShow) {
        Toast({
          duration: '3000',
          message: '请先滑动验证验证码'
        });
      } else {
        let params = {
        account : this.account,
        password : this.password
      }
      var _this = this
      axios.post('/local/login/getAccount',params)
        .then((response) => {
          console.log(response.data)
          if (response.data.retCode === 1) {
            const user = JSON.stringify(response.data.list)
            sessionStorage.setItem("user",user)
            sessionStorage.setItem("name", response.data.list.name);
            sessionStorage.setItem("vip", response.data.list.vip);
            sessionStorage.setItem("account", response.data.list.account);
            sessionStorage.setItem("photo", response.data.list.photo);
            // window.location.href = '/'
            _this.$router.push({path:'/'})
          } else if (response.data.retCode === 2) {
            Toast({
              duration: '3000',
              message: '密码错误'
            });
          } else if (response.data.retCode === 3) {
            Toast({
              duration: '3000',
              message: '用户名不存在'
            });
          }
      })
      }
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:750px){
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
        .ccap{
          width: 300px;
          border: 1px solid #ccc;
          height: 40px;
          margin-top: 30px;
          z-index: 99;
        }
        input{
          width: 300px;
          margin-top: 30px;
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
}
@media screen and (max-width:750px){
  section{
    width: 100%;
    height: 600px;
    background-color: #eee;
    position: relative;
    .form{
      top: 50px;
      width: calc(100% - 3px);
      height: 420px;
      position: absolute;
      background-color: #fff;
      border: 1px solid #000;
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
        .ccap{
          width: 300px;
          border: 1px solid #ccc;
          height: 40px;
          margin-top: 30px;
          z-index: 99;
        }
        input{
          width: 300px;
          margin-top: 30px;
          height: 50px;
          text-align: center;
          // bottom: 1px solid #ccc;
          border:1px solid #000;
          font-size: 22px;
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
}

.active{
  border-bottom: 2px solid #418fe4;
  color:#418fe4;
}
</style>

