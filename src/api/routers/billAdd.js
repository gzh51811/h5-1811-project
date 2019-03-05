const Router = require('koa-router');
const db = require('../db');


// 创建路由
const router = new Router();
router.post('/',async (ctx,next)=>{
    // 解构
    // console.log(333)
    let {val1,val2,val3,val4,val5,val6} = ctx.request.body;
    console.log(ctx.request.body)

    let data ={number:val1,Sname:val2,supply:val3,money:val4,pay:val5,times:val6}
    let res = await db.insert('order',data);
    console.log(res)
    ctx.body = {
        res
    }
})







module.exports = router;