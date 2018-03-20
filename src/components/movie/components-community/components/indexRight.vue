<template>
  <section>
    <div class="recommend">
      <div class="title">
        {{title}}
      </div>
      <div class="recomList">
        <p @click="ToDetail(item._id)" v-for="(item,index) in list" :key="index">{{item.document.title}}</p>
      </div>
    </div>
    <!-- <div id="map" class="map">

    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: {},
      title:''
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    // this.initMap();
  },
  methods: {
    getData: function() {
      let user = sessionStorage.getItem("user");
      user = JSON.parse(user);
      let movieName = user.movieName;
      if (movieName.length === 0) {
        this.title = '暂无推荐信息'
      } else {
        // let list = Object.keys(movieName).sort(
        //   (a, b) => movieName[b] - movieName[a]
        // );
        this.title = '猜您感兴趣'
        let list = movieName.sort((b,a)=>a.count - b.count)
        // let list = Object.values(movieName).sort((a,b)=>a-b)
        // let like = "";
        // if (list[0] === "love") {
        //   like = "爱情";
        // } else if (list[0] === "fight") {
        //   like = "战争";
        // } else if (list[0] === "comic") {
        //   like = "喜剧";
        // }
        let params = {
          movieName: list[0].name
        };
        axios.post("/local/login/queryMovieName", params).then(response => {
          this.list = response.data;
        });
        }
    },
    ToDetail: function(id) {
      window.location.href = `#/community/detail/${id}`;
    },
    // initMap: function() {
    //   var map = new BMap.Map("map");
    //   // 创建地图实例
    //   var point = new BMap.Point(116.404, 39.915);
    //   // 创建点坐标
    //   map.centerAndZoom(point, 10);
    //   var geolocation = new BMap.Geolocation();
    //   geolocation.getCurrentPosition(function(r){
    //     if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //       var mk = new BMap.Marker(r.point);
    //       map.addOverlay(mk);
    //       map.panTo(r.point);
    //     }
    //     else {
    //       alert('failed'+this.getStatus());
    //     }
    //   },{enableHighAccuracy: true})
    // }
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  .recommend {
    width: 100%;
    .title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
    }
    .recomList {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        width: 150px;
        border-radius: 2px;
        cursor: pointer;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        color: #000;
        text-align: center;
        margin-top: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        border: 1px solid #eee;
      }
    }
  }
  .map {
    margin-top: 50px;
    width: 100%;
    height: 200px;
    border: 1px solid #ccc;
  }
}
</style>
