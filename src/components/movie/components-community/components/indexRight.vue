<template>
  <section>
    <div class="recommend">
      <div class="title">
        您可能感兴趣
      </div>
      <div class="recomList">
        <p @click="ToDetail(item._id)" v-for="(item,index) in list" :key="index">{{item.document.title}}</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      list:{}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData:function(){
      let user = sessionStorage.getItem("user")
      user = JSON.parse(user)
      let userLike = user.userLike
      let list = Object.keys(userLike).sort((a,b)=>userLike[b]-userLike[a])
      // let list2 = Object.values(userLike).sort((a,b)=>a-b)
      let like = ''
      if(list[0] === 'love') {
        like = '爱情'
      }else if (list[0] === 'fight') {
        like = '战争'
      }else if (list[0] === 'comic'){
        like = '喜剧'
      }
      let params = {
        userLike:like
      }
      axios.post('/local/login/queryUserLike',params)
        .then((response)=>{
          this.list = response.data
      })
    },
    ToDetail:function(id){
       window.location.href = `#/community/detail/${id}`
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  width: 100%;
    .recommend{
      width: 100%;
      .title{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
      }
      .recomList{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
          width: 150px;
          border-radius: 2px;
          cursor: pointer;
          height: 30px;
          font-size: 16px;
          line-height: 30px;
          color: #000;
          text-align: center;
          margin-top: 10px;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow: hidden;
          border: 1px solid #eee;
        }
      }
    }
}
</style>

