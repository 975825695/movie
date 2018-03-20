<template>
  <div class="detail">
    <header-nav></header-nav>
    <detail-video :videolist="videoList"></detail-video>
    <video-desc></video-desc>
    <people-list :peopleList="list"></people-list>
    <comment :videolist="videoList"></comment>
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
      list : {},
      videoList: {}
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
          const idList = [{id:27073291,imgSrc:'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=卧底巨星壁纸&step_word=&hs=0&pn=9&spn=0&di=88285968771&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2980129596%2C3636806933&os=1539423267%2C758650686&simid=0%2C0&adpicid=0&lpn=0&ln=1953&fr=&fmq=1521191263153_R&fm=detail&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=15&oriquery=&objurl=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fd8ed5be4700257e9e20392f7c15676bdd76549db.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bktstktst_z%26e3Bv54AzdH3Fet1j5AzdH3Fwe808l09caAzdH3F&gsm=0&rpstart=0&rpnum=0'},
          {id:22265634,imgSrc:'../../../../static/img/videoImg/xingqiudazhan.jpg'},{id:26984538,imgSrc:'../../../../static/img/videoImg/wodi.jpg'}]
          if (parseInt(id) === idList[0].id) {
            // response.data.imgSrc = idList[0].imgSrc
            this.videoList = {'src':idList[0].imgSrc}
          } else if(parseInt(id) === idList[1].id) {
            // response.data.imgSrc = idList[1].imgSrc
            this.videoList = {'src':idList[1].imgSrc}
          }else if (parseInt(id) === idList[2].id) {
            // response.data.imgSrc = idList[2].imgSrc
            this.videoList = {'src':idList[2].imgSrc}
          }
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
