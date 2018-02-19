<template>
  <div class="detail">
    <header-nav></header-nav>
    <detail-video></detail-video>
    <video-desc></video-desc>
    <people-list :peopleList="list"></people-list>
    <comment></comment>
    <footer-com></footer-com>
  </div>
</template>
<script>
import headerNav from './components-index/headerNav.vue'
import detailVideo from './components-detail/detailVideo.vue'
import videoDesc from './components-detail/videoDesc.vue'
import peopleList from './components-detail/peopleList.vue'
import comment from './components-detail/comment.vue'
import footerCom from './components-index/footerCom.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      list : {}
    }
  },
  created () {
    this.getData()
  },
  methods:{
    ...mapActions(['getDetailList']),
    getData: function(){
      let id = this.$route.params.id
      var title
      axios.get(`/v2/movie/subject/${id}`)
        .then((response) => {
          this.list = response.data
          this.getDetailList(response.data)
          title = response.data.title
      }).then(()=>{
        let params = {
          title:title
        }
        axios.post('/local/login/createClick',params)
        .then((response) => {
          // console.log(response.data)
        })
      })
    }
  },
  components:{
    headerNav,
    detailVideo,
    videoDesc,
    peopleList,
    comment,
    footerCom
  }
}
</script>

<style lang="scss" scoped>
 .detail{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    header-nav{
      width: 100%;
    }
  }
</style>
