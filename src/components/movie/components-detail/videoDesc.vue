<template>
  <nav class="video-desc">
    <p>
        <span>{{list.title}}</span>
        <span>{{list.year}}</span>
        <span>{{average}}</span>
      </p>
    <p>{{list.summary}}</p>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      list:[],
      average:''
    }
  },
  computed: {
    ...mapState(['detailList'])
  },
  // mounted () {
  //   console.log(this.detailList)
  // },
  watch:{
    detailList:function (cur,old) {
      this.list = cur
      this.average = cur.rating.average
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:750px){
  .video-desc{
    width: 100%;
    height: 100px;
    background-color: #627085;
    p{
      text-align: center;
    }
    p:nth-of-type(1){
      font-size: 30px;
      span:nth-of-type(1){
        color: #fff;
      }
      span:nth-of-type(2){
        color: #ccc;
      }
      span:nth-of-type(3){
        color: #C6A721;
      }
    }
    p:nth-of-type(2){
      font-size: 20px;
      color:#ccc;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
@media screen and (max-width:750px){
  .video-desc{
    width: 100%;
    background-color: #627085;
    p{
      text-align: center;
    }
    p:nth-of-type(1){
      font-size: 22px;
      span:nth-of-type(1){
        color: #fff;
      }
      span:nth-of-type(2){
        color: #ccc;
      }
      span:nth-of-type(3){
        color: #C6A721;
      }
    }
    p:nth-of-type(2){
      font-size: 20px;
      color:#ccc;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
