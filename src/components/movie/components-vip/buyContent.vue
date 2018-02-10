<template>
  <section>
    <div class="card">
      <div class="list" v-for="(item,index) in countList" :key="index">
        <div class="desc">
            <p><span>{{item.price}}</span>元/{{item.num}}月</p>
            <p>赠送观影券<span>{{item.num}}</span>张</p>
        </div>
        <button @click="buyVip()">立即开通</button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      countList:[{price:15,num:1},{price:25,num:2},{price:35,num:3},{price:45,num:4},{price:55,num:5}]
    }
  },
  created () {
  },
  methods: {
    buyVip:function () {
      const cf = confirm("确认购买吗")
      if (cf) {
        const account = sessionStorage.getItem("account");
        let params = {
            account : account,
            vip : 1
        }
        axios.post('/local/login/updateAccount',params)
        .then((response) => {
          // 响应成功回调
          if (response.data.n ===1 ) {
               window.location.href = '#/vip'
          }
        })
      } else {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  width: 100%;
  height: 300px;
  background-color: #eee;
  background-image: url('../img/vip.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .card{
    top: 200px;
    position: absolute;
    background-color: #eee;
    width: 1240px;
    height: 300px;
    display: flex;
    .list{
      background-color: #fff;
      margin-left: 20px;
      width: 220px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .desc{
        margin-top: 20px;
        width:180px;
        height: 180px;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        p{
          text-align: center;
        }
        p:nth-of-type(1){
          font-size: 30px;
          span{
            color: red;
          }
        }
        p:nth-of-type(2){
          margin-top: 20px;
          color:#bbb;
          font-size: 22px;
          span{
            color:black;
          }
        }
      }
      button{
        background-color: #e14a43;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
        width: 150px;
        height: 40px;
      }
    }
  }
}
</style>

