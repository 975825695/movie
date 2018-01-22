<template>
  <div class="header">
    <div class="header-logo">
      <p>在线影院</p>
      <p @click="toVip()">VIP影片</p>
    </div>
    <div class="header-input">
      <input type="text" placeholder="请输入相关影片进行搜素" v-model="query">
      <router-link :to="{path:`/query/${query}`}">搜索</router-link>
    </div>
    <div class="header-nav">
      <router-link :to="{path:'record'}">我的社区</router-link>
      <router-link :to="{path:'record'}">播放记录</router-link>
      <router-link to='/login' v-show="!loginBool">登录/注册</router-link>
      <div v-show="loginBool" class="users">
         <p v-show="loginBool" class="hover">欢迎：{{name}}</p>
         <div class="user-func">
           <p>个人中心</p>
           <p @click="logout">注销</p>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      query:'',
      loginBool:false,
      name:''
    }
  },
  created () {
    const name = sessionStorage.getItem("name");
    const vip = sessionStorage.getItem("vip");
    if (name) {
      this.loginBool = true
      this.name = name
    } else {
      this.loginBool = false
    }
  },
  methods:{
    logout:function(){
       sessionStorage.removeItem('name');
       window.location.href='/'
    },
    toVip:async function(){
      const loginvalid =  this.loginValid()
      if (loginvalid) {
        const name = sessionStorage.getItem("name");
        let params = {
          account : name
        }
        axios.post('/local/login/getVip',params)
          .then((response) => {
            const vip = response.data.vip
            if (vip === 0){
              window.location.href = '#/vipBuy'
            } else {
              window.location.href = '#/vip'
            }
        })
      } else {
        alert('请先登录')
        window.location.href = '#/login'
      }
    },
    loginValid:function () {
       const name = sessionStorage.getItem("name");
       if (name) {
         return true
       } else {
         return false
       }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    width:1040px;
    display: flex;
    justify-content: space-between;
    height: 80px;
    margin-top: 20px;
    .header-logo{
      display: flex;
      height: 80px;
      text-align: center;
      line-height: 80px;
      font-size: 20px;
      padding-right: 100px;
      p{
        cursor: pointer;
      }
      p:nth-of-type(1){
        padding-left: 30px;
      }
      p:nth-of-type(2){
        padding-left: 30px;
      }
    }
    .header-input{
      display: flex;
      align-items: center;
      input{
        height: 36px;
        width: 300px;
        border: 2px solid #ccc;
      }
      a{
        background-color: #d00060;
        font-size: 15px;
        line-height: 36px;
        color: #fff;
        height: 36px;
        width: 36px;
        text-align: center;
        border: 2px solid #d00060;
      }
    }
    .header-nav{
      display: flex;
      padding-left: 50px;
      p{
        height: 80px;
        cursor: pointer;
        line-height: 80px;
        font-size: 15px;
        padding-right: 10px;
      }
      a{
        height: 80px;
        line-height: 80px;
        font-size: 15px;
        padding-right: 10px;
        color: #000;
      }
      .users{
        display: flex;
        flex-direction: column;
        position: relative;
        &:hover .user-func{
          display: block;
        }
        .user-func{
          display: none;
          position: absolute;
          top: 50px;
          p{
          height: 40px;
          background-color: #eee;
          border-bottom: 1px solid #fff;
          cursor: pointer;
          color: #000;
          line-height: 40px;
          font-size: 15px;
          text-align: center;
          padding-right: 10px;padding-right: none;
        }
        }
      }
    }
  }
</style>
