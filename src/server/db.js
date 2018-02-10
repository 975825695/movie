// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/vue-node',(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log('success')
  }
});
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String,
    vip: Number,
    name: String,
    photo: String,
    userLike: Object
});
const Coming_soonSchema = mongoose.Schema({
});
const In_theaterSchema = mongoose.Schema({
});
const Top20Schema = mongoose.Schema({
});
const Documentchema = mongoose.Schema({
  account: String,
  name : String,
  time : String,
  document: Object,
  comment: Array
});

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema),
    Coming_soon : mongoose.model('coming_soon',Coming_soonSchema),
    In_theater : mongoose.model('in_theater',In_theaterSchema),
    Top20 : mongoose.model('top20',Top20Schema),
    Document : mongoose.model('document',Documentchema),
}

module.exports = Models;
