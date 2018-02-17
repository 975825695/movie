<template>
  <div class="detail">
    <div class="list" v-for="(item,index) in queryList" :key="index" v-if="dataBool">
      <div class="left">
        <img :src="item.images.medium" alt="">
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
    <div class="error" v-if="!dataBool">
      <p>未查询到你所要的影片或者您的输入有误</p>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      queryList:[],
      dataBool:true
    }
  },
  created () {
    this.getQuery()
  },
  methods:{
    getQuery:function(){
      let name = this.$route.params.name
      if (!name) {
        this.dataBool = false
      } else {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        axios.get(`/v2/movie/search?q=${name}`)
          .then((response) => {
          Indicator.close();
          if (response.data.subjects.length === 0) {
            this.dataBool = false
          } else {
            this.queryList = response.data.subjects
          }
        })
      }
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
      img{
        border: 1px solid #000;
        display: inline-block;
        width: 300px;
        height: 300px;
        background-image: url('../img/4042.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
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
