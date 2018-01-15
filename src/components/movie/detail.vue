<template>
  <div class="detail">
    <header-nav></header-nav>
    <detail-video></detail-video>
    <video-desc></video-desc>
    <people-list></people-list>
    <footer-com></footer-com>
  </div>
</template>
<script>
import headerNav from './components-index/headerNav.vue'
import detailVideo from './components-detail/detailVideo.vue'
import videoDesc from './components-detail/videoDesc.vue'
import peopleList from './components-detail/peopleList.vue'
import footerCom from './components-index/footerCom.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
    this.getData()
  },
  methods:{
    ...mapActions(['getDetailList']),
    getData: function(){
      let id = this.$route.params.id
      axios.get(`/v2/movie/subject/${id}`)
        .then((response) => {
          this.getDetailList(response.data)
      })
    }
  },
  components:{
    headerNav,
    detailVideo,
    videoDesc,
    peopleList,
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
