<template>
  <footer>
    <p>
      版权所有:Jorce
    </p>
    <p>
      联系方式:975825695@qq.com
    </p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@media screen and (min-width:750px){
  footer{
      width: 1024px;
      border-top: 2px solid #ccc;
      margin-top: 10px;
      p{
        text-align: center;
        color: #ccc;
        font-size: 14px;
      }
    }
  }
@media screen and (max-width:750px){
  footer{
      width: 100%;
      border-top: 2px solid #ccc;
      margin-top: 10px;
      p{
        text-align: center;
        color: #ccc;
        font-size: 14px;
      }
    }
}

</style>
