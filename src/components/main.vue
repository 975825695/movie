<template>
<div>
 <input class="form-control" id="inputEmail3" v-model="account">
  <input type="password" class="form-control" id="inputPassword3" v-model="password">
  <p v-if="mes1">{{mes1}}</p>
  <p>{{mes2}}</p>
  <button type="submit" class="btn btn-default" @click="login()">添加</button>
  <ul>
      <li v-for="(item,index) in list">
        {{item.account}}
        <button type="submit" class="btn btn-default" @click="update(item.account)">修改</button>
        <button type="submit" class="btn btn-default" @click="del(item.account)">删除</button>
      </li>
  </ul>

</div>
</template>

<script>
    // import axios from 'axios'
    export default {
    data() {
        return {
            account : '',
            password : '',
            mes1:'',
            mes2:'',
            list:{}
        }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
         axios.post('/local/login/getAccount')
          .then((response) => {
            this.list = response.data
          })
      },
      login() {
        let params = {
            account : this.account,
            password : this.password
        }
        // 获取已有账号密码
        axios.post('/local/login/getAccount',params)
          .then((response) => {
            // 响应成功回调
            if(response.data.length!==0){
              this.mes1 = response.data[0].account
            }else{
              this.mes1 = '正常注册'
              axios.post('/local/login/createAccount',params)
              .then((response) => {
                console.log(234,response)
                this.mes2 = response.data
                this.getData()
              })
              .catch((reject) => {
                console.log(reject)
              })
            }
          })
        },
        update(name){
          window.location.href = `#/update/${name}`
        },
        del(name){
          let params = {
            account : name
          }
          axios.post('/local/login/delAccount',params)
          .then((response) => {
            this.getData()
          })
        }
      }
    }
</script>
