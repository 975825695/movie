const models = require('./db');
const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const moment = require('moment');


/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/local/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password,
        vip:0,
        name:'新用户',
        document:[],
        userLike:{love:0,fight:0,comic:0}
    });
    // 保存数据newAccount数据进mongoDB
    models.Login.find({account:req.body.account},(err,data) => {
        if (err) {
            res.send(err);
        } else {
          let temp = data.length
          if (temp !== 0) {
            const list = {retCode:2}
            res.send(list)
          } else {
            newAccount.save((err,data) => {
              if (err) {
                  res.send(err);
              } else {
                const list = {retCode:1}
                  res.send(list);
              }
           });
          }
        }
    });

});
// 登录
router.post('/local/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    let newAccount = {
      account : req.body.account
    };
    models.Login.find(newAccount,(err,data) => {
        if (err) {
            res.send(err);
        } else {
          if(data[0].password===req.body.password){
            const list = {retCode:1,list:data[0]}
            res.send(list);
          }else{
            const list = {retCode:2}
            res.send(list);
          }
        }
    });
});
//查询账号信息
router.post('/local/login/queryAccount',(req,res) => {
  let newAccount = {
    account : req.body.account
  };
  models.Login.find(newAccount,(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data)
      }
  });
});
// 修改账号信息
router.post('/local/login/updateUser',(req,res) => {
  let newAccount = {
      name : req.body.name,
      password : req.body.password
  };
  models.Login.update({account:req.body.account},{$set:newAccount},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
});
// 上传头像
router.post('/local/login/upImg',(req,res) => {
  // let newAccount = {
  //     photo:res.body.photo
  // };
  let upLoadDir = '../../static/upImg/'
  let form = new formidable.IncomingForm()
  form.uploadDir = upLoadDir
  // form.uploadDir = uploadDir
  form.parse(req,function(err,fields,files){
    let file = files.photo
    let oldpath = path.normalize(file.path)
    let newFileName = 'movie'+file.name
    let newpath = upLoadDir+newFileName
    fs.rename(oldpath,newpath,function(err){
      if(err){
        res.end(err)
      } else {
        let newAccount = {
          photo : newpath
        }
        models.Login.update({account:fields.account},{$set:newAccount},(err,data) => {
          if (err) {
              res.send(err);
          } else {
              res.send(data);
          }
        });
      }
    })
  })
});
// 查询是否有VIP权限
router.post('/local/login/getVIP',(req,res) => {
  // 通过模型去查找数据库
  let newAccount = {
    account : req.body.account
  };
  models.Login.findOne(newAccount,(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data)
      }
  });
});
// vip购买
router.post('/local/login/updateAccount',(req,res) => {
  let newAccount = {
      vip : req.body.vip
  };
  models.Login.update({account:req.body.account},{$set:newAccount},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
});
// 写文章 存储到每个人的信息中
router.post('/local/login/insertDocOne',(req,res) => {
  let document = req.body.html
  models.Login.update({account:req.body.account},{$push:{document:document}},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
});
// 写文章存到所有文章列表
router.post('/local/login/saveDocuments',(req,res) => {
  let document = req.body.html
  let DocumentList = new models.Document({
    account: req.body.account,
    name : req.body.name,
    time : req.body.time,
    document:document
  });
  DocumentList.save((err,data) => {
    if (err) {
        res.send(err);
    } else {
        res.send(data);
    }
  });
});
//查询所有文章
router.post('/local/login/queryDocuments',(req,res) => {
  models.Document.find((err,data) => {
      if (err) {
          res.send(err);
      } else {
          data.sort((a,b)=>a.time<b.time)
          data.map(a=>a.time = moment(a.time).fromNow());
          res.send(data)
      }
  });
});
//查询单一用户的所有文章
router.post('/local/login/queryMyDocuments',(req,res) => {
  models.Document.find({account:req.body.account},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          data.sort((a,b)=>a.time<b.time)
          data.map(a=>a.time = moment(a.time).fromNow());
          res.send(data)
      }
  });
});
// 删除
router.post('/local/login/delDocument',(req,res) => {
  models.Document.remove({_id:req.body._id},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data)
      }
  });
});
//从首页查询单一文章详细
router.post('/local/login/queryDetailDoc',(req,res) => {
  let account = {
    _id : req.body.id
  }
  models.Document.findOne(account,(err,data) => {
      if (err) {
          res.send(err);
      } else {
        if (data.comment.length !== 0) {
          data.comment.sort((a,b)=>a.time<b.time)
          data.comment.map(a=>a.time = moment(a.time).fromNow());
        }
          res.send(data)
      }
  });
});
// 存储单一文章的评论内容
router.post('/local/login/saveComment',(req,res) => {
  let comment = {
    account:req.body.account,
    name:req.body.name,
    time:req.body.time,
    comment:req.body.comment,
    photo:req.body.photoUrl
  }
  models.Document.update({_id:req.body.id},{$push:{comment:comment}},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
});
// 首页搜索功能，根据标题关键字查询
router.post('/local/login/searchDocument',(req,res) => {
  var reg = req.body.searchText
  models.Document.find({$where:`this.document.title.indexOf('${reg}') != -1`},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          data.sort((a,b)=>a.time<b.time)
          data.map(a=>a.time = moment(a.time).fromNow());
          res.send(data)
      }
  });
});
// 兴趣推荐存储
router.post('/local/login/saveUserLikes',(req,res) => {

  models.Login.findOne({account:req.body.account},(err,data) => {
    let userLike = {
      love:req.body.love+data.userLike.love,
      fight:req.body.fight+data.userLike.fight,
      comic:req.body.comic+data.userLike.comic
    }
    models.Login.update({account:req.body.account},{$set:{userLike}},(err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
  });
});
// 根据兴趣推荐查询相关文章
router.post('/local/login/queryUserLike',(req,res) => {
  let userLike = req.body.userLike
  models.Document.find({$where:`this.document.tags.indexOf('${userLike}') != -1`},(err,data) => {
    if (err) {
        res.send(err);
    } else {
        res.send(data)
    }
  });
});



router.post('/local/login/delAccount',(req,res) => {
  // 保存数据newAccount数据进mongoDB
  console.log(req.body.accountOld)
  models.Login.remove({account:req.body.account},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
          console.log(data)
      }
  });
});




// 查询电影数据
router.post('/vv/movie/coming_soon',(req,res) => {
  // 通过模型去查找数据库
  let newAccount = {};
  models.Coming_soon.find(newAccount,(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
});
router.post('/vv/movie/in_theater',(req,res) => {
  // 通过模型去查找数据库
  let newAccount = {};
  models.In_theater.find(newAccount,(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
});
router.post('/vv/movie/top20',(req,res) => {
  // 通过模型去查找数据库
  let newAccount = {};
  models.Top20.find(newAccount,(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
});

module.exports = router;
