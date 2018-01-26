<template>
  <div class="content">
    <div class="left">
        <p @click="chanegView(1)" :class="{isOn:isOn===1}">首页</p>
        <p @click="chanegView(2)" :class="{isOn:isOn===2}">通行证管理</p>
        <p @click="chanegView(3)" :class="{isOn:isOn===3}">修改头像</p>
    </div>
    <!-- <router-view name="mid" class="mid" /> -->
    <mid class="mid" :isON="isOn"></mid>
    <right class="right"></right>
  </div>
</template>

<script>
import right from './right.vue'
import mid from './mid.vue'
export default {
 data () {
    return {
      queryList:[],
      isOn:1
    }
  },
  created () {
  },
  methods:{
    chanegView:function(id){
      this.isOn = id
    }
  },
  components:{
    right,
    mid
  }
}
</script>

<style lang="scss" scoped>
  .content{
    margin-top: 20px;
    width: 1024px;
    display: flex;
    justify-content: space-between;
    .left{
    width: 200px;
    height: 500px;
    display: flex;
    background-color: #627085;
    flex-direction: column;
    p{
      height: 40px;
      display: inline-block;
      text-align: center;
      color: #fff;
      line-height: 40px;
      font-size: 18px;
      font-family: "微软雅黑";
      cursor: pointer;
    }
  }

    .mid{
      height: 500px;
    }
    .right{
      width:200px;
      height: 500px;
    }
  }
  .isOn{
    background-color: #fff;
    color:#ff9a00 !important;
  }
</style>
