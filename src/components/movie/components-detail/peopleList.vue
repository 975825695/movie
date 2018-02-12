<template>
  <div class="peopleList">
    <nav class="people-title">
      <p>主创作品</p>
      <p v-for="(item,index) in casts" :key="index" @click="getCast(item.name)">{{item.name}}</p>
    </nav>
    <div class="people-works">
      <div class="work-list" v-for="(item,index) in castList" :key="index" >
        <img :src="item.images.small" alt="">
        <p>{{item.title}}</p>
        <p><span v-for="(list,index) in item.genres" :key="index">{{list}}</span></p>
      </div>
    </div>
    <div id="loader" v-show="loadCtr">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      list: {},
      casts:{},
      castList: {},
      loadCtr:true
    }
  },
  props:{
    peopleList:Object
  },
  created () {
    this.list=this.detailList
  },
  mounted () {
    this.Loader()
  },
  methods:{
    getCast:async function(name){
      this.LoaderCtr('show')
      axios.get(`/v2/movie/search?q=${name}`)
        .then((response) => {
          this.LoaderCtr('hidden')
          if (window.screen.width<750) {
            this.castList = response.data.subjects.splice(0,3)
          } else {
            this.castList = response.data.subjects.splice(0,5)
          }
      })
    },
    Loader:async function(ctr){
      var loaders =
      {
        width: 100,
        height: 100,
        stepsPerFrame: 4,
        trailLength: 1,
        pointDistance: .01,
        fps: 20,
        fillColor: '#FF7B24',
        setup: function() {
          this._.lineWidth = 10;
        },
        step: function(point, i, f) {
          var progress = point.progress,
            degAngle = 360 * progress,
            angle = Math.PI/180 * degAngle,
            angleB = Math.PI/180 * (degAngle - 180),
            size = i*5;
          this._.fillRect(
            Math.cos(angle) * 25 + (50-size/2),
            Math.sin(angle) * 15 + (50-size/2),
            size,
            size
          );
          this._.fillStyle = '#63D3FF';
          this._.fillRect(
            Math.cos(angleB) * 15 + (50-size/2),
            Math.sin(angleB) * 25 + (50-size/2),
            size,
            size
          );
          if (point.progress == 1) {
            this._.globalAlpha = f < .5 ? 1-f : f;
            this._.fillStyle = '#EEE';
            this._.beginPath();
            this._.arc(50, 50, 5, 0, 360, 0);
            this._.closePath();
            this._.fill();
          }
        },
        path: [
          ['line', 40, 10, 60, 90]
        ]
      }
      var d, a, container = document.querySelector('#loader');

        d =await document.createElement('div');
        d.className = 'l';
        a = new Sonic(loaders);
        d.appendChild(a.canvas);
        container.appendChild(d);
          a.play();
    },
    LoaderCtr:function(ctr){
      if(ctr === 'show') {
        // this.loadCtr = true
        document.querySelector("#loader").style.display="block"
      } else {
        // this.loadCtr = false
        document.querySelector("#loader").style.display="none"
      }
    }
  },
  computed: {
    ...mapState(['detailList'])
  },
  watch : {
    peopleList (cur,old) {
      this.list = cur
      let name = this.list.casts[0].name
      this.casts = this.list.casts.splice(0,3)
      this.getCast(name)
      this.LoaderCtr('hidden')
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:750px){
  .peopleList{
    margin-top: 20px;
    width: 1024px;
    // height: 400px;
    position: relative;
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
}
@media screen and (max-width:750px){
  .peopleList{
    margin-top: 10px;
    width: 100%;
    // height: 400px;
    position: relative;
    .people-title{
      width: 100%;
      display: flex;
      p{
        border-top: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
        text-align: center;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        &:hover{
          border-bottom: 3px solid blue;
        }
        &:nth-of-type(1){
          display: none;
        }
      }
    }
    .people-works{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 10px;
      .work-list{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width: 120px;
          background-image: url('../img/4042.jpg');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          height:180px;
        }
        p{
          text-align: center;
        }
        p:nth-of-type(1){
          width: 120px;
          font-size: 16px;
          text-align: center;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow: hidden;
        }
        p:nth-of-type(2){
          font-size: 16px;
          color: #aaa;
          text-align: center;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}

#loader{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 420px;
  top: 100px;
  // border: 1px solid #ccc;
}
</style>
