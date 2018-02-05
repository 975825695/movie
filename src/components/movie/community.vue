<template>
  <div class="community">
    <header-top></header-top>
    <router-view></router-view>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerTop from './components-community/header.vue'
import footerCom from './components-index/footerCom.vue'
import { mapState,mapActions } from "vuex";
export default {
  data () {
    return {
    }
  },
  computed:{
    ...mapState(['userLike'])
  },
  created () {
    this.watchF5()
  },
  methods: {
    ...mapActions(['delUserLike']),
    watchF5:function(){
       window.onbeforeunload = ()=>{
       let params ={
         account:sessionStorage.getItem('account'),
         love:this.userLike.love,
         fight:this.userLike.fight,
         comic:this.userLike.comic
       }
       axios.post('/local/login/saveUserLikes',params)
        .then((response)=>{
          this.delUserLike()
       })
     }
    }
  },
  components:{
    headerTop,
    footerCom
  }
}
</script>

<style lang="scss" scoped>
.community{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

