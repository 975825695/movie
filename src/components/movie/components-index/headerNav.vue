<template>
  <nav>
    <div class="nav-ul">
      <ul>
        <router-link to="/">首页</router-link>
        <div>
          <p>猜您想看:</p>
          <p v-for="(item,index) in list " :key="index">{{item.title}}</p>
        </div>
        <router-link to="/community/" @click.native="valiLogin()">影评社区</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list : ['飞呀飞','飞龙在天']
    }
  },
  created () {
    this.getInterest()
  },
  watch:{
    list:function(cur,old){
      this.list = cur
    }
  },
  methods:{
    getInterest:function(){
      var that = this
      const account = sessionStorage.getItem('account')
      if (account) {
        let params = {
          account : account
        }
        let arr = []
        let interestRec = ''
        // axios.post('/local/login/queryInterest',params)
        //   .then((response) => {
        //     // console.log(response.data)
        //     interestRec = response.data.sort((a,b)=>b.count-a.count).splice(0,1)
        // })
        axios.post('/local/login/queryInterest2',params)
          .then((response) => {
            interestRec = response.data
            // interestRec = response.data.sort((a,b)=>b.count-a.count).splice(0,1)
        })
        .then(()=>{
          let name = interestRec[0].genres[0]
          axios.get(`/v2/movie/search?q=${name}`)
          .then((response) => {
            let datalist = response.data.subjects.splice(0,1)
              arr.push({title:datalist[0].title})
            // console.log(arr)
          }).then(()=>{
            let name = interestRec[1].genres[0]
            axios.get(`/v2/movie/search?q=${name}`)
            .then((response) => {
            let datalist = response.data.subjects.splice(0,1)

              arr.push({title:datalist[0].title})
            // console.log(arr)
            })
          }).then(()=>{
            //  this.list = new Set([...arr])
             this.list = [...new Set(arr)]
            //  console.log(this.list)
          })
        }
        )
      }
    },
    valiLogin:function(){
      let account = sessionStorage.getItem('account')
      if(!account) {
        alert('请先登录')
        window.location.href = '#/login'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  nav{
    width: 100%;
    height: 50px;
    background-color:#627085;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-ul{
      width: 1040px;
      display: flex;
      justify-content: space-between;
      // height: 60px;
    }
    ul{
      display: flex;
      justify-content: space-between;
      // height: 60px;
      div{
        width: 300px;
        line-height: 50px;
        color: #fff;
        display: flex;
        p{
          width: 100px;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow: hidden;
          cursor: pointer;
        }
      }
      a{
        color: #fff;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        text-align: center;
        &:hover{
          background-color: rgb(51, 51, 51);
        }
      }
    }
    ul{
      a{
        width: 100px;
        font-size: 16px;
      }
    }
  }
</style>
