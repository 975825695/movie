<template>
  <div class="index-content">
    <p class="title">{{title}}
      <span v-if="chart">
        <span :class="{active:clickYear===0}" @click="changeYear(0)">总排行</span>
        <span :class="{active:clickYear===1}" @click="changeYear(1)">2017</span>
        <span :class="{active:clickYear===2}" @click="changeYear(2)">2016</span>
        <span :class="{active:clickYear===3}" @click="changeYear(3)">2015</span>
      </span>
    </p>
    <div class="content-list">
      <router-link :to="{path:`/detail/${item.id}`}" class="list" v-for="(item,index) in list" :key="index">

        <img :src="item.images.small" alt="">
        <p>
          <span>{{item.title}}</span>
          <span>{{item.rating.average}}</span>
        </p>
        <p>
          <span v-for="(avator,index) in item.casts" :key="index">{{avator.name}}</span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      list:[],
      chart:false,
      clickYear:0
    }
  },
  props:{
    title:String
  },
  created () {
    let name = ''
    if (this.title === '即将上映'){
      name = 'coming_soon'
    } else if (this.title === '正在热映'){
      name = 'in_theater'
    } else if (this.title === '排行榜'){
      name = 'top20'
     this.chart = true
    }
    this.getData(name)
  },
  methods:{
    ...mapActions(['getDetailList']),
    getData:function(name){
      axios.post(`/vv/movie/${name}`,{})
        .then((response) => {
          this.list = response.data[0].subjects.splice(0,5)
      })
    },
    changeYear:function(year){
      this.clickYear = year
    }
  },
  computed: {
    ...mapState(['indexContentTitle'])
  },
}
</script>

<style lang="scss" scoped>
  .index-content{
    width: 1024px;
    .title{
      font-size: 25px;
      color: #609fbf;
      margin-left: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      .active{
        color: red;
        text-decoration: underline;
      }
      span{
        cursor: pointer;
        // margin-left: 20px;
        &:nth-of-type(1){
          margin-left: 30px;
        }
        color:#000;
        margin-left: 20px;
        font-size: 20px;
      }
    }
    .content-list{
      display: flex;
      justify-content: center;
      .list{
        width: 200px;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          display: inline-block;
          width: 180px;
          height: 200px;
          background-image: url('../img/4042.jpg');
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        p:nth-of-type(1){
          width: 180px;
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          color: #000;
          span:nth-of-type(1){
             text-align: left;
             text-overflow: ellipsis;
             overflow: hidden;
             white-space: nowrap;
          }
          span:nth-of-type(2){
             text-align: right;
             color: red;
          }
          // text-align: center;
        }
        p:nth-of-type(2){
          width: 180px;
          font-size: 16px;
          color: #bbb;
          text-align: center;
          text-overflow: ellipsis;
             overflow: hidden;
             white-space: nowrap;
        }
      }
    }
  }

</style>
