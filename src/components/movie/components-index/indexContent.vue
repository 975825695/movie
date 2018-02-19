<template>
  <div class="index-content">
    <p class="title">{{title}}
      <span v-if="chart">
        <span :class="{active:clickYear===0}" @click="changeYear(0)">总排行</span>
        <span :class="{active:clickYear==='2010'}" @click="changeYear('2010')">2010</span>
        <span :class="{active:clickYear==='2008'}" @click="changeYear('2008')">2008</span>
        <span :class="{active:clickYear==='2002'}" @click="changeYear('2002')">2002</span>
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
      <div class="hotPart" v-if="this.title==='正在热映'">
        <div class="hotTitle">
          <p class="showTitle" @click="showEcharts()">点击排行</p>
        </div>
        <ul>
          <li v-for="(item,index) in hotPart" :key="index">{{item.title}}</li>
        </ul>
      </div>
    </div>
    <div class="echarts" v-if="this.title==='正在热映'" v-show="echartsBool">
        <div id="pic">

        </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      list:[],
      chart:false,
      clickYear:0,
      hotPart:[
        {title:'奇迹男孩'},
        {title:'第一夫人'},
        {title:'神秘巨星'},
        {title:'卧底巨星'},
        {title:'捉妖记2'}
      ],
      echartsBool:true
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
    } else if (this.title === '历史排行'){
      name = 'top20'
     this.chart = true
    }
    this.getData(name)
  },
  methods:{
    ...mapActions(['getDetailList']),
    showEcharts:function(){
      this.echartsBool = !this.echartsBool
    },
    echartsInit:function(){
      var list = this.hotPart
      var titleList = []
      var countList = []
      for (let key of Object.keys(list)) {
        titleList.push(list[key].title)
        countList.push(list[key].count)
      }
      const myChart = echarts.init(document.querySelector('#pic'))
      var option = {
            title: {
                text: '点击量排行一览'
            },
            tooltip: {},
            legend: {
                data:['111']
            },
            xAxis: {
                data: titleList
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: countList
            }]
        };
        myChart.setOption(option);
    },
    getData:function(name){
      axios.post(`/vv/movie/${name}`,{})
        .then((response) => {
          this.list = response.data[0].subjects.splice(0,5)
          if(this.title==='正在热映'){
            this.list = response.data[0].subjects.splice(0,3)
             axios.post('/local/login/findClick',{})
            .then((response) => {
                this.hotPart = response.data.sort((a,b)=>b.count-a.count).splice(0,5)
                this.echartsInit()
            })
          }
      })
    },
    changeYear:function(year){
      this.clickYear = year
      if (year === 0) {
        axios.post('/vv/movie/top20',{})
          .then((response) => {
            this.list = response.data[0].subjects.splice(0,5)
        })
      } else {
        axios.post('/vv/movie/top20',{})
        .then((response) => {
          const topList =  response.data[2].subjects
          let arr = []
          for (const key in topList) {
            if (topList[key].year === year) {
                arr.push(topList[key])
                // console.log(1)
            }
          }
          this.list = arr.splice(0,5)
          console.log(this.list)
      })
      }
    }
  },
  computed: {
    ...mapState(['indexContentTitle'])
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:750px){
  .index-content{
    width: 1024px;
    background-color: #Fff;
    margin-top: 20px;
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
      .hotPart{
        margin-top: -50px;
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .hotTitle{
          font-size: 24px;
          color: #609fbf;
          text-align: center;
          p{
            cursor: pointer;
          }
        }
        ul{
          margin-top: 10px;
          width: 250px;
          border: 2px solid #ccc;
          display: flex;
          flex-direction: column;
          align-items: center;
          li{
            margin-top: 15px;
            text-align: center;
            width: 150px;
            border-bottom: 1px solid #ccc;
            font-size: 22px;
            margin-left: 30px;
            list-style: decimal;
            &:nth-of-type(5){
              margin-bottom: 20px;
            }
          }
        }
      }
    }
    .echarts{
      width: 1024px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      div{
        width: 600px;
        height: 250px;
      }
    }
  }
}
@media screen and (max-width:750px){
.index-content{
    width: 100%;
    .title{
      font-size: 22px;
      color: #609fbf;
      margin-left: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      .active{
        color: red;
        text-decoration: underline;
      }
      span{
        cursor: pointer;
        // margin-left: 20px;
        &:nth-of-type(1){
          margin-left: 10px;
        }
        color:#000;
        margin-left: 15px;
        font-size: 20px;
      }
    }
    .content-list{
      display: flex;
      justify-content: center;
      .list{
        width: 200px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          display: inline-block;
          width: 70px;
          height: 100px;
          background-image: url('../img/4042.jpg');
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        p:nth-of-type(1){
          width: 70px;
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
             display: none;
          }
        }
        p:nth-of-type(2){
          width: 70px;
          font-size: 16px;
          color: #bbb;
          text-align: center;
          text-overflow: ellipsis;
             overflow: hidden;
             white-space: nowrap;
        }
      }
      .hotPart{
        margin-top: -35px;
        width: 165px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .hotTitle{
          font-size: 22px;
          color: #609fbf;
          text-align: center;
        }
        ul{
          margin-top: 5px;
          width: 160px;
          border: 2px solid #ccc;
          display: flex;
          flex-direction: column;
          align-items: center;
          li{
            margin-top: 5px;
            text-align: center;
            width: 100px;
            border-bottom: 1px solid #ccc;
            font-size: 16px;
            margin-left: 30px;
            list-style: decimal;
          }
        }
      }
    }
    .echarts{
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      div{
        width: 80%;
        height: 200px;
      }
    }
  }
}
</style>
