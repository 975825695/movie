<template>
  <nav>
    <div class="nav-ul">
      <ul>
        <router-link to="/">首页</router-link>
        <div>
          <p>猜您想看:</p>
          <p v-for="(item,index) in list " :key="index">{{item}}</p>
        </div>
        <router-link to="/community/" @click.native="valiLogin()">影评社区</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list : ['飞呀飞','飞龙在天']
    }
  },
  methods:{
    valiLogin:function(){
      let account = sessionStorage.getItem('account')
      if(!account) {
        alert('请先登录')
        window.location.href = '#/login'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  nav{
    width: 100%;
    height: 50px;
    background-color:#627085;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-ul{
      width: 1040px;
      display: flex;
      justify-content: space-between;
      // height: 60px;
    }
    ul{
      display: flex;
      justify-content: space-between;
      // height: 60px;
      div{
        width: 300px;
        line-height: 50px;
        color: #fff;
        display: flex;
        p{
          width: 100px;
        }
      }
      a{
        color: #fff;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        text-align: center;
        &:hover{
          background-color: rgb(51, 51, 51);
        }
      }
    }
    ul{
      a{
        width: 100px;
        font-size: 16px;
      }
    }
  }
</style>
