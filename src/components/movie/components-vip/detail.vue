<template>
  <div class="detail">
    <div class="list" v-for="(item,index) in queryList" :key="index">
      <div class="left">
        <img :src="item.images.medium" alt="">
        <span>VIP专享影片</span>
      </div>
      <div class="right">
        <div class="p">
          <p>{{item.title}} <span>({{item.year}})</span></p>
          <p>主演：<span v-for="(cast,index) in item.casts" :key="index">{{cast.name}},</span></p>
          <p>简介：这是一个充满神奇的故事,进来看你就发现无穷无尽</p>
          <p>Star数：{{item.rating.stars}}</p>
          <router-link :to="{path:`/detail/${item.id}`}">点击观看</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      queryList:[]
    }
  },
  created () {
    this.getVipData()
  },
  methods:{
    getVipData:function(){
      axios.post('/vv/movie/top20',{})
        .then((response) => {
          this.queryList = response.data[1].subjects
      })
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
  .detail{
    margin-top: 20px;
    width: 1024px;
    border: 1px solid #ccc;
    .list{
      width: 1024px;
      height: 400px;
      display: flex;
      .left{
      width: 500px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img{
        border: 1px solid #000;
        display: inline-block;
        width: 300px;
        height: 300px;
        background-image: url('../img/4042.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      span{
        position: absolute;
        left: 230px;
        bottom: 50px;
        font-size: 30px;
        color:pink;
        font-family: "微软雅黑";
      }
      }
    .right{
      width: 500px;
      height: 400px;
      display: flex;
      justify-content: center;
      // align-items: center;
      .p{
        width: 450px;
        p:nth-of-type(1){
        margin-top: 100px;
        font-size: 30px;
      }
      p{
        margin-top: 30px;
      }
      a{
        display: block;
        margin-top: 30px;
        color: red;
        text-align: right;
      }
      }
    }
    }
    .error{
      width: 1024px;
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p{
        font-size: 30px;
        color: #ccc;
        text-align: center;
      }
    }
  }
</style>
