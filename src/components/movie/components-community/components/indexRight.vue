<template>
  <section>
    <div class="recommend">
      <div class="title">
        您可能感兴趣
      </div>
      <div class="recomList">
        <p>雪山飞狐为什么这么丑</p>
        <p>浪里个浪为什么这么好看</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      user:{}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData:function(){
      const user = sessionStorage.getItem("user")
      this.user = JSON.parse(user)
      console.log(this.user)
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

