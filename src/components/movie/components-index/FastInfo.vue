<template>
  <nav>
    <ul>
      <li>《无问西东》逆袭破4亿 阿米尔汗电影内地再告捷</li>
      <li>《唐探2》新海报 王宝强刘昊然对着烤鸡分析案情</li>
      <li>《捉妖记2》巨型胡巴空降香港 梁朝伟闹市送福</li>
      <li>《无问西东》破4亿 曝“爱你所爱”张震独白片段</li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@keyframes autoScroll {
  0%{
    transform: translate3d(0,0,0);
  }
  20%{
    transform: translate3d(0,0,0);
  }
  25%{
    transform: translate3d(0,-50px,0);
  }
  45%{
    transform: translate3d(0,-50px,0);
  }
  50%{
    transform: translate3d(0,-100px,0);
  }
  70%{
    transform: translate3d(0,-100px,0);
  }
  75%{
    transform: translate3d(0,-150px,0);
  }
  100%{
    transform: translate3d(0,-150px,0);
  }
}
@media screen and (min-width:750px){
 nav{
   background-color: #fff;
    margin-top: 20px;
    width: 1024px;
    height: 50px;
    border: 1px solid #ccc;
    overflow: hidden;
    ul{
      width: 800px;
      margin-left: 100px;
      height: 50px;
      animation: autoScroll 20s infinite normal ;
      &:hover{
        animation-play-state: paused;
      }
      li{
        line-height: 50px;
        font-size: 24px;
        color: #bbb;
        list-style-type: square;
      }
    }
  }
}
@media screen and (max-width:750px){
 nav{
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    overflow: hidden;
    ul{
      width: 100%;
      height: 50px;
      animation: autoScroll 20s infinite normal ;
      &:hover{
        animation-play-state: paused;
      }
      li{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        line-height: 50px;
        font-size: 24px;
        color: #bbb;
        list-style-type: square;
      }
    }
  }
}
</style>
