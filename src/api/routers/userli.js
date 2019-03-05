const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();

router.post('/',async (ctx,next)=>{
    if(Object.keys(ctx.request.body)[0]=='_id'&&Object.keys(ctx.request.body)[1]=='dele'){
         var ObjectId = require('mongodb').ObjectID;
         let {_id}=ctx.request.body;
        let res = await db.delete('userinfo', {_id:ObjectId(_id)});
        console.log(res);
        ctx.body = 1;
    }else if(Object.keys(ctx.request.body)[0]=='val'){
         let {val}=ctx.request.body;
        let res = await db.find('userinfo',{username:val});         
        // res=res[0]; 
        if(res){
            console.log(res.length);
            if(res.length==1){
                res=res[0]; 
                ctx.body=[res]
            }else{
                console.log(res);
                ctx.body=res;
                // for(let i=0;i<res.length;i++){

                // }
            }
        }else{
             ctx.body = {
                code:100,
                msg:'fail'
            }
        }
    }else if(Object.keys(ctx.request.body)[0]=='_id'&&Object.keys(ctx.request.body)[1]=='look'){
        var ObjectId = require('mongodb').ObjectID;
         let {_id}=ctx.request.body;
        let res = await db.find('userinfo', {_id:ObjectId(_id)});
        res=res[0];
        if(res){
            ctx.body={
                _id:res._id,
                username:res.username,
                sex:res.sex,
                tel:res.tel,
                userID:res.userID,
                dob:res.dob,
                site:res.site,
                type:res.type
            }
        }else{
             ctx.body = {
                code:100,
                msg:'fail'
            }
        }
    }else if(Object.keys(ctx.request.body)[0]=='_id'&&Object.keys(ctx.request.body)[1]=='update'){
        var ObjectId = require('mongodb').ObjectID;
        let {_id}=ctx.request.body;
        let {username,sex,dob,tel,site,type}=ctx.request.body;
        let newData = {$set:{username,sex,dob,tel,site,type}}
        console.log(_id,newData);  
        let res = await db.update('userinfo',{_id:ObjectId(_id)},newData);
        ctx.body = res
        console.log(res);
        
    }
    });
router.get('/',async (ctx,next)=>{
    let res = await db.find('userinfo');
    ctx.body=res;
})
module.exports = router;