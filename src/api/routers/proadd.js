const Router = require('koa-router');
const db = require('../db');
// var bodyParser = require('koa-bodyparser');
// var app = new Koa();
// app.use(bodyParser());

// 创建路由
var router = new Router();
router.post('/',async (ctx,next)=>{
        console.log(ctx.request.body);
        let {code,proname,name,tel,address,fax,des}=ctx.request.body;
        let data = {code,proname,name,tel,address,fax,des,time:Date.now()}
        console.log(data);
        let res = await db.insert('provide',data);
        ctx.body = res
    })
module.exports = router;