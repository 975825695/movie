<template>
  <div class="video">
    <div class="content">
      <video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto" poster="http://vjs.zencdn.net/v/oceans.png" data-setup="{}">
        <source src="http://vjs.zencdn.net/v/oceans.mp4" type='video/mp4'>
        <source src="MY_VIDEO.webm" type='video/webm'>
      </video>
      <!-- <video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto"
      poster="http://img.movie.kanimg.kankan.com/submovie_img/104/104188/17110101_2_154x90.jpg" data-setup="{}">
        <source src="http://js.kankan.com/player/mp4/KKPlayer2.2.swf?v=5.5&popup=1" type='video/mp4'>
        <source src="MY_VIDEO.webm" type='video/webm'>
      </video> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      list : []
    }
  },
  props:{
    videolist:Object
  },
  computed: {
    ...mapState(['detailList'])
  },
  watch : {
    videolist (cur,old) {
      this.list = cur
      console.log(this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:750px){
  .video{
   border: 1px solid #ccc;
   width: 100%;
   height: 600px;
   display: flex;
   justify-content: center;
   background-color: black;
   .content{
     width: 1024px;
     background-color: #627085;
     height: 600px;
   }
   #my-video{
     width: 1024px;
     height: 600px;
   }
 }
}
@media screen and (max-width:750px){
  .video{
   border: 1px solid #ccc;
   width: 100%;
   height: 200px;
   display: flex;
   justify-content: center;
   background-color: black;
   .content{
     width: 100%;
     background-color: #627085;
     height: 200px;
   }
   #my-video{
     width: 100%;
     height: 200px;
   }
 }
}


</style>
