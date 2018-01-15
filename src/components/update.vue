<template>
<div>
  <input class="form-control" id="inputEmail3"  v-model="account">
  <input type="password" class="form-control" id="inputPassword3" v-model="password">
  <button type="submit" class="btn btn-default" @click="update">修改</button>
</div>

</template>

<script>
    // import axios from 'axios'
    export default {
    data() {
        return {
            account : '',
            password : '',
        }
    },
    created () {
      this.getData()
    },
    methods:{
      getData () {
         let params = {
            account:this.$route.params.name
         }
         axios.post('/local/login/getAccount',params)
          .then((response) => {
            this.account = response.data[0].account
            this.password = response.data[0].password
          })
      },
      update() {
        let params = {
            accountOld : this.$route.params.name,
            account : this.account,
            password : this.password
        }
        // 获取已有账号密码
        axios.post('/local/login/updateAccount',params)
          .then((response) => {
            // 响应成功回调
            if (response.data.n === 1) {
              window.location.href = '/'
            }
          })
        }
      }
    }
</script>
