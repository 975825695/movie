<template>
  <section>
    <div class="recommend">
      <div class="title">
        为您推荐
      </div>
      <div class="recomList">
        <p>喜剧</p>
        <p>战争</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {

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
        font-size: 24px;
      }
      .recomList{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
          width: 80px;
          border-radius: 2px;
          cursor: pointer;
          height: 25px;
          font-size: 16px;
          line-height: 25px;
          color: #fff;
          text-align: center;
          background-color: red;
          margin-top: 10px;
        }
      }
    }
}
</style>

