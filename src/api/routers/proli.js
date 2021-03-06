const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();

router.post('/',async (ctx,next)=>{
    //解构
    // console.log(ctx.request.body);
    // console.log(Object.keys(ctx.request.body)[0]);
    if(Object.keys(ctx.request.body)[0]=='val'){
        let {val}=ctx.request.body;
        let res = await db.find('provide',{proname:val});         
        // res=res[0]; 
        if(res){
            console.log(res.length);
            if(res.length==1){
                res=res[0]; 
                ctx.body=[{
                    _id:res._id,
                    code:res.code,
                    proname:res.proname,
                    name:res.name,
                    tel:res.tel,
                    fax:res.fax,
                    time:res.time
                }]
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
        let res = await db.find('provide', {_id:ObjectId(_id)});
        res=res[0];
        if(res){
            ctx.body={
                _id:res._id,
                proname:res.proname,
                name:res.name,
                tel:res.tel,
                fax:res.fax,
                time:res.time,
                des:res.des,
                code:res.code
            }
        }else{
             ctx.body = {
                code:100,
                msg:'fail'
            }
        }
    }else if(Object.keys(ctx.request.body)[0]=='_id'&&Object.keys(ctx.request.body)[1]=='dele'){
         var ObjectId = require('mongodb').ObjectID;
         let {_id}=ctx.request.body;
        let res = await db.delete('provide', {_id:ObjectId(_id)});
        console.log(res);
        ctx.body = 1;
    }else if(Object.keys(ctx.request.body)[0]=='_id'&&Object.keys(ctx.request.body)[1]=='update'){
        var ObjectId = require('mongodb').ObjectID;
        let {_id}=ctx.request.body;
        let {code,proname,name,tel,address,fax,des}=ctx.request.body;
        let newData = {$set:{code,proname,name,tel,address,fax,des}}
        console.log(_id,newData);  
        let res = await db.update('provide',{_id:ObjectId(_id)},newData);
        ctx.body = res
        console.log(res);
        
    }
})
router.get('/',async (ctx,next)=>{
    let res = await db.find('provide');
    ctx.body=res;
})
module.exports = router;