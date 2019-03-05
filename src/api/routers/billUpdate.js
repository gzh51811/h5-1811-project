const Router = require('koa-router');
const db = require('../db');


// 创建路由
const router = new Router();


router.post('/', async (ctx, next) => {
    // 解构
    let { num } = ctx.request.body;
    let res = await db.find('order', { number: num});
    ctx.body = {
        number: res[0].number,
        Sname: res[0].Sname,
        supply: res[0].supply,
        money: res[0].money,
        pay: res[0].pay,
        times: res[0].times,
    }


})
router.get('/', async (ctx, next) =>{
    // let {val1} = ctx.query;
    let {val1,val2, val3, val4, val5, val6 } = ctx.query;
    // console.log('额',ctx.query)
    let newDate = {$set:{Sname:val2, supply:val3, money:val4, pay:val5, times:val6}};

    let res = await db.update('order',{number:val1},newDate);
    console.log('呵呵',res)
    ctx.body = {
        res
    }
})








module.exports = router;