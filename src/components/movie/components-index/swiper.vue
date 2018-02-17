<template>
  <!-- <div class="swiper-container"> -->
    <!-- <div class="swiper-wrapper">
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
    </div> -->
    <!-- Add Scrollbar -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- Add Arrows -->
    <!-- <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  <!-- </div> -->
  <div class="swiper">
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0217/thumb_1_1380_460_20180217011730587861.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0215/thumb_1_1380_460_20180215012401989970.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0216/thumb_1_1380_460_20180216124016654806.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0215/thumb_1_1380_460_20180215011710363203.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0214/thumb_1_1380_460_20180214091415864788.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image11.m1905.cn/uploadfile/2018/0213/thumb_1_1380_460_20180213105618226587.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image13.m1905.cn/uploadfile/2018/0211/thumb_1_1380_460_20180211035153594982.jpg)"></div>
      </div>
      <!-- Add Arrows -->
      <!-- <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div> -->
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0217/thumb_1_1380_460_20180217011730587861.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0215/thumb_1_1380_460_20180215012401989970.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0216/thumb_1_1380_460_20180216124016654806.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0215/thumb_1_1380_460_20180215011710363203.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image14.m1905.cn/uploadfile/2018/0214/thumb_1_1380_460_20180214091415864788.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image11.m1905.cn/uploadfile/2018/0213/thumb_1_1380_460_20180213105618226587.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(http://image13.m1905.cn/uploadfile/2018/0211/thumb_1_1380_460_20180211035153594982.jpg)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../../../bower_components/swiper/dist/js/swiper.min.js'
export default {
  // mounted () {
  //    var swiper = new Swiper('.swiper-container', {
  //     pagination: {
  //       el: '.swiper-pagination',
  //       type: 'fraction',
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });
  // }
  mounted(){
    var galleryTop = new Swiper('.gallery-top', {
      speed:2500,
      autoplay: {
        // delay: 2000,
        disableOnInteraction: true,
        // waitForTransition: false,
      },
      spaceBetween: 7,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      speed:2500,
      autoplay: {
        // delay: 2000,
        disableOnInteraction: true,
        // waitForTransition: false,
      },
      spaceBetween: 7,
      slidesPerView: 4,
      touchRatio: 0.2,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

  }
}
</script>

<style lang="scss" scoped>
@import url('../../../../bower_components/swiper/dist/css/swiper.min.css');
@media screen and (min-width: 750px) {
  .swiper{
    margin-top: 10px;
    width: 1024px;
    .swiper-container {
      width: 1024px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 300px;
      width: 100%;
    }
    .gallery-thumbs {
      height: 100px;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
    // .swiper-container {
    //   width: 1024px;
    //   height: 400px;
    //   border: 2px solid #000;
    //   margin-top: 20px;
    // }
    // .swiper-slide {
    //   width: 100%;
    //   text-align: center;
    //   font-size: 18px;
    //   background: #fff;
    //   /* Center slide text vertically */
    //   display: -webkit-box;
    //   display: -ms-flexbox;
    //   display: -webkit-flex;
    //   display: flex;
    //   -webkit-box-pack: center;
    //   -ms-flex-pack: center;
    //   -webkit-justify-content: center;
    //   justify-content: center;
    //   -webkit-box-align: center;
    //   -ms-flex-align: center;
    //   -webkit-align-items: center;
    //   align-items: center;
    //   img{
    //     width: 100%;
    //     height: 100%;
    //   }
    // }
}
@media screen and (max-width: 750px) {
    .swiper{
    margin-top: 10px;
    width: 100%;
    .swiper-container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 200px;
      width: 100%;
    }
    .gallery-thumbs {
      height: 70px;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
    // .swiper-container {
    //   width: 100%;
    //   height: 200px;
    //   border: 2px solid #000;
    //   margin-top: 20px;
    // }
    // .swiper-slide {
    //   width: 100%;
    //   text-align: center;
    //   font-size: 18px;
    //   background: #fff;
    //   /* Center slide text vertically */
    //   display: -webkit-box;
    //   display: -ms-flexbox;
    //   display: -webkit-flex;
    //   display: flex;
    //   -webkit-box-pack: center;
    //   -ms-flex-pack: center;
    //   -webkit-justify-content: center;
    //   justify-content: center;
    //   -webkit-box-align: center;
    //   -ms-flex-align: center;
    //   -webkit-align-items: center;
    //   align-items: center;
    //   img{
    //     width: 100%;
    //     height: 100%;
    //   }
    // }
}
</style>
