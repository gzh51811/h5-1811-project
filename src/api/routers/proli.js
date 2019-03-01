const Router = require('koa-router');
const db = require('../db');
// var bodyParser = require('koa-bodyparser');
// var app = new Koa();
// app.use(bodyParser());

// 创建路由
var router = new Router();

router.post('/',async (ctx,next)=>{
    //解构
    // console.log(ctx.request.body);
    let {val}=ctx.request.body;
    let res = await db.find('provide',{proname:val});
    res=res[0];
    if(res){
        ctx.body={
            _id:res.id,
            proname:res.proname,
            name:res.name,
            tel:res.tel,
            fax:res.fax,
            des:res.des
        }
    }else{
         ctx.body = {
            code:100,
            msg:'fail'
        }
    }
    console.log(res)
    // ctx.bod={
    //     of:1
    // }
})
router.get('/',async (ctx,next)=>{
    let res = await db.find('provide');
    ctx.body=res;
})
module.exports = router;