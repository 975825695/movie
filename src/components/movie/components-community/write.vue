<template>
  <div class="write">
    <div class="title">
      <select v-model="selected">
        <option :value="list.text" v-for="(list,index) in select" :key="index">{{list.text}}</option>
      </select>
      <input type="text" placeholder="请输入文章标题" v-model="title">
    </div>
    <div ref="editor" class="editor">
      <p></p>
    </div>
    <div class="classify">
      <div class="npc">
         <p>分类：</p>
      </div>
      <div class="list">
        <div class="list_item">
          <label for="">喜剧</label>
          <input type="checkbox" v-model="comic">
        </div>
        <div class="list_item">
          <label for="">爱情</label>
          <input type="checkbox" v-model="love">
        </div>
        <div class="list_item">
          <label for="">战争</label>
          <input type="checkbox" v-model="fight">
        </div>
      </div>
    </div>
    <div class="sub">
      <p @click="write()">发表文章</p>
    </div>
  </div>
</template>

<script>
import editor from 'wangeditor'
export default {
  data () {
    return {
      selected:'原创',
      select:[{text:'原创'},{text:'转载'},{text:'翻译'}],
      ediTor:{},
      title:'',
      sel:'',
      comic:false,
      love:false,
      fight:false
    }
  },
  created () {
    this.setEditor()
  },
  methods: {
    setEditor:function(){
      this.$nextTick(function () {
        let ed = new editor(this.$refs.editor)
        ed.create()
        this.ediTor = ed
      })
    },
    write:function(){
      if(this.title === ''){
        alert('请输入文章标题')
      }else if (this.comic === false&&this.love === false&&this.fight === false){
        alert('请至少选择一种分类标签')
      }else if(!this.ediTor.txt.text()){
        alert('请输入文章内容')
      }else{
        let tag = []
        if(this.comic){
          tag.push('喜剧')
        }
        if(this.love){
          tag.push('爱情')
        }
        if(this.fight){
          tag.push('战争')
        }
        let account = sessionStorage.getItem('account')
        let html = {
          title:this.title,
          selectedName:this.selected,
          tags:tag
        }
        let params = {
          account:account,
          html:html
        }
        axios.post('/local/login/insertDocument',params)
        .then((response) => {
          console.log(response)
          if(response.data.n!==0){
            window.location.href = '#/community'
          }
        })
      }
    }
  },
  watch: {
    ediTor(cur,old){
      this.ediTor = cur
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
.write{
  margin-top: 20px;
  width: 900px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    margin-top: 20px;
    display: flex;
    width: 800px;
    height: 40px;
    select{
      width: 120px;
      padding: 0 20px;
      background-color: #eee;
      border: none;
      height: 40px;
      line-height: 40px;
      font-size: 22px;
      option{
        text-align: center;
        font-size: 22px;
      }
    }
    input{
      width: 630px;
      height: 40px;
      line-height: 40px;
      background-color: #eee;
      border: none;
      margin-left: 50px;
      font-size: 20px;
      &::placeholder{
        padding: 10px;
        font-size: 20px;
      }
    }
  }
  .editor{
    margin-top: 20px;
    width: 800px;
  }
  .classify{
    margin-top: 20px;
    width: 800px;
    display: flex;
    .npc{
      width: 100px;
      font-size: 18px;
      height: 30px;
      line-height: 30px;
    }
    .list{
      width: 700px;
      display: flex;
      .list_item{
        width: 100px;
        display: flex;
        align-items: center;
        label{
          font-size: 18px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
  .sub{
    margin-top: 20px;
    margin-bottom: 20px;
    width: 800px;
    display: flex;
    justify-content: flex-end;
    p{
      font-size: 22px;
      background-color: #eee;
      color: rgb(221, 129, 129);
      width: 100px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
    }
  }
}
</style>

