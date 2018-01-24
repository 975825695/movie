<template>
  <div class="personal">
    <header>
      <div class="userWel">
        <router-link to="/">回到首页</router-link>
        <p>欢迎您|{{name}}</p>
      </div>
    </header>
    <contents></contents>
  </div>
</template>

<script>
import contents from './components-personal/content.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      name:''
    }
  },
  computed:{
  },
  created () {
    this.getData()
  },
  methods:{
    ...mapActions(['getUserInfo']),
    getData:function(){
      let account = sessionStorage.getItem("account")
      let params = {
        account : account
      }
      axios.post('/local/login/queryAccount',params)
        .then((response) => {
          this.getUserInfo(response.data[0])
          this.name = response.data[0].name
      })
    }
  },
  components:{
    contents
  }
}
</script>

<style lang="scss" scoped>
  .personal{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    header{
      width: 100%;
      height: 50px;
      background-color: rgb(51, 51, 51);
      display: flex;
      align-items: center;
      justify-content: center;
      .userWel{
        width: 1024px;
        display: flex;
        justify-content: space-between;
        a{
          display: inline-block;
          color: #fff;
        }
        p{
          color: #fff;
          text-align: right;
        }
      }
    }
  }
</style>
