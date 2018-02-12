<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="http://image11.m1905.cn/uploadfile/2017/1208/thumb_1_1000_322_20171208111555400523.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image14.m1905.cn/uploadfile/2017/1222/thumb_1_1000_322_20171222043043471686.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image13.m1905.cn/uploadfile/2018/0106/thumb_1_1000_322_20180106082356975649.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image13.m1905.cn/uploadfile/2018/0104/thumb_1_1000_322_20180104090926510639.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image11.m1905.cn/uploadfile/2017/1228/thumb_1_1000_322_20171228090202450496.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image11.m1905.cn/uploadfile/2017/1230/thumb_1_1000_322_20171230082635417621.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image14.m1905.cn/uploadfile/2017/1222/thumb_1_1000_322_20171222043043471686.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image14.m1905.cn/uploadfile/2017/1215/thumb_1_1000_322_20171215112337975220.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image13.m1905.cn/uploadfile/2017/1221/thumb_1_1000_322_20171221101456705154.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image14.m1905.cn/uploadfile/2017/1221/thumb_1_1000_322_20171221112525389261.jpg" alt=""></div>
      <div class="swiper-slide"><img src="http://image14.m1905.cn/uploadfile/2017/1207/thumb_1_1000_322_20171207015824507991.jpg" alt=""></div>
    </div>
    <!-- Add Scrollbar -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from '../../../../bower_components/swiper/dist/js/swiper.min.js'
export default {
  mounted () {
     var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../../bower_components/swiper/dist/css/swiper.min.css');
@media screen and (min-width: 750px) {
    .swiper-container {
      width: 1024px;
      height: 400px;
      border: 2px solid #000;
      margin-top: 20px;
    }
    .swiper-slide {
      width: 100%;
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img{
        width: 100%;
        height: 100%;
      }
    }
}
@media screen and (max-width: 750px) {
    .swiper-container {
      width: 100%;
      height: 200px;
      border: 2px solid #000;
      margin-top: 20px;
    }
    .swiper-slide {
      width: 100%;
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img{
        width: 100%;
        height: 100%;
      }
    }
}
</style>
