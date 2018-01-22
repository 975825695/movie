<template>
  <div class="record">
    <header-top></header-top>
    <div class="title">
      <p>播放记录</p>
    </div>
    <div class="list" v-for="(item,index) in list" :key="index" v-if="hasRecord">
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
    <div class="error" v-if="!hasRecord">
      <p>您暂时还没有观看过影片哦！</p>
    </div>
  </div>
</template>

<script>
import headerTop from './components-index/headerNav.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      hasRecord:false,
      list:[]
    }
  },
  computed:{
    ...mapState(['recordIdList','saveRecordId'])
  },
  created () {
    this.getData()
  },
  methods:{
    getData:function(){
      if (this.recordIdList.length===0) {
        console.log(1)
        this.hasRecord = false
      } else {
        this.hasRecord = true
        this.list = this.recordIdList
      }
    }
  },
  components:{
    headerTop
  }
}
</script>

<style lang="scss" scoped>
  .record{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      width: 820px;
      margin: 0 auto;
      border-bottom: #000 1px solid;
      margin-top: 20px;
      p{
        font-size: 24px;
      }
    }
    .list{
      margin: 0 auto;
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
        background-image: url('./img/4042.jpg');
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
