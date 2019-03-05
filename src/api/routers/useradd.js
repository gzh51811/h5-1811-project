const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();
router.post('/',async (ctx,next)=>{
    let  {userID}=ctx.request.body;
     let res = await db.find('userinfo',{userID}); 
     console.log(res);
       if(res.length>=1){
           ctx.body=0;
       }else{
            ctx.body=1;
       }
        })
        router.get('/',async (ctx,next)=>{
            let   {userID,username,psw,sex,dob,tel,site,type}  =ctx.query;
            let data = {userID,username,psw,sex,dob,tel,site,type,time:Date.now()}
            console.log(data);
            let res = await db.insert('userinfo',data);
            ctx.body = res
        })
module.exports = router;