const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();
router.post('/',async (ctx,next)=>{
    var ObjectId = require('mongodb').ObjectID;
    let  {_id,psw}=ctx.request.body;
     let res = await db.find('userinfo',{_id:ObjectId(_id),psw});
       if(res.length>=1){
           ctx.body=1;
       }else{
            ctx.body=0;
       }
        })
router.get('/',async (ctx,next)=>{
    var ObjectId = require('mongodb').ObjectID;
    let  {_id,psw}=ctx.query;
    let newData={$set:{psw}}
    console.log(_id,psw);  
    //  let res = await db.update('userinfo',{_id:ObjectId(_id)},newData);
    let res = await db.update('userinfo',{_id:ObjectId(_id)},newData);
        })
module.exports = router;