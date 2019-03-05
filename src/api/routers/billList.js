const Router = require('koa-router');
const db = require('../db');



// 创建路由
var router = new Router();
router.get('/',async (ctx,next) =>{
    let res = await db.find('order');
    let {num} = ctx.query;
    let res1 = await db.delete('order',{number:num})
    // console.log('删',res1)
    ctx.body = res
})
router.post('/', async (ctx, next) => {
    // 解构
    console.log(ctx.request.body)
    let { val1,val2 } = ctx.request.body;
    console.log(val1);
    let res = await db.find('order', { Sname: val1 });
    console.log(res)
    if (res != '') {
        for(var i=0;i<res.length;i++){
            if (res[i].Sname == val1) {
                ctx.body = {
                    // number: res[i].number,
                    // Sname: res[i].Sname,
                    // supply: res[i].supply,
                    // money: res[i].money,
                    // pay:res[i].pay,
                    // times:res[i].times,
                    res,
                    status: "success"
                }
            } else {
                ctx.body = {
                    status: "fail"
                }
            }
        }
        
    } else {
        ctx.body = {
            status: "fail"
        }
    }
});

// router.get('/',async (ctx, next) => {
//     console.log(ctx.query)
//     let {num} = ctx.query;
//     let res = await db.delete('order',{number:num})
//     console.log(res)


// })



module.exports = router;
