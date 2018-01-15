<template>
  <div class="index-content">
    <p class="title">{{title}}</p>
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
      list:[]
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
    } else if (this.title === '排行总榜'){
      name = 'top20'
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
