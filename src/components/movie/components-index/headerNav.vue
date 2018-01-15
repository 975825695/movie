<template>
  <nav>
    <div class="nav-ul">
      <ul>
        <router-link to="/">首页</router-link>
        <router-link to="/">大片</router-link>
        <router-link to="/">港片</router-link>
        <router-link to="/">欧美</router-link>
        <router-link to="/">独家</router-link>
        <router-link to="/">内地</router-link>
        <router-link to="/">CCTV6</router-link>
      </ul>
      <ul>
        <router-link to="/">主题片场</router-link>
        <router-link to="/">艺术电影</router-link>
        <router-link to="/">网络电影</router-link>
        <router-link to="/">排行榜</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app'
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
      align-content: center;
      justify-content: center;
      // height: 60px;
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
    ul:nth-of-type(1){
      a{
        width: 100px;
        font-size: 16px;
      }
    }
    ul:nth-of-type(2){
      a{
        width: 70px;
        font-size: 14px;
        font-size: #ccc;
      }
    }
  }
</style>
