<template>
  <div class="peopleList">
    <nav class="people-title">
      <p>主创作品</p>
      <p v-for="(item,index) in list.casts" :key="index" @click="getCast(item.name)">{{item.name}}</p>
    </nav>
    <div class="people-works">
      <div class="work-list" v-for="(item,index) in castList" :key="index" >
        <img :src="item.images.small" alt="">
        <p>{{item.title}}</p>
        <p>{{item.genres}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      list: {},
      castList: {}
    }
  },
  created () {
    setTimeout(() => {
      this.list=this.detailList
      console.log(this.list)
      let name = this.list.casts[0].name
      this.getCast(name)
    }, 1000);
  },
  methods:{
    getCast:function(name){
      console.log(name)
      axios.get(`/v2/movie/search?q=${name}`)
        .then((response) => {
          this.castList = response.data.subjects.splice(0,5)
      })
    }
  },
  computed: {
    ...mapState(['detailList'])
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
.peopleList{
  margin-top: 20px;
  width: 1024px;
  // height: 400px;
  .people-title{
    width: 100%;
    display: flex;
    p{
      border-top: 2px solid #ccc;
      border-bottom: 2px solid #ccc;
      text-align: center;
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      &:hover{
        border-bottom: 3px solid blue;
      }
    }
  }
  .people-works{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .work-list{
      width: 200px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 180px;
        background-image: url('../img/4042.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height:220px ;
      }
      p{
        text-align: center;
      }
      p:nth-of-type(1){
        font-size: 16px;
        text-align: center;
      }
      p:nth-of-type(2){
        font-size: 14px;
        color: #ccc;
        text-align: center;
      }
    }
  }
}
</style>
