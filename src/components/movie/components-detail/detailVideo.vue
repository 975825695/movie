<template>
  <div class="video">
    <div class="content">
      <video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto" width="640" height="264"
      poster="http://vjs.zencdn.net/v/oceans.png" data-setup="{}">
        <source src="http://vjs.zencdn.net/v/oceans.mp4" type='video/mp4'>
        <source src="MY_VIDEO.webm" type='video/webm'>
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
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

</style>
