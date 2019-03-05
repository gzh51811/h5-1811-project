const Router = require('koa-router');
const db = require('../db');



// 创建路由
const router = new Router();

router.get('/', async (ctx, next) => {
    let { num } = ctx.query;
    console.log(ctx.query);
    let res = await db.find('order', { number: num });
    console.log(res);
    ctx.body = {
        numner:res[0].number,
        Sname:res[0].Sname,
        supply:res[0].supply,
        money:res[0].money,
        pay:res[0].pay,
        times:res[0].times,
    }

})






module.exports = router;
