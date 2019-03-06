const Router = require('koa-router');

const db = require('../db');

// 引入token
const {verify} = require('../utils/token.js')
// 创建路由
const router = new Router();


router.post('/', async (ctx, next) => {
   console.log(ctx.request.body) 
   let {token} = ctx.request.body;
   let res = verify(token);
   console.log(res)
   if(res){
       ctx.body = {
           res,
           status:200
       };
   }else{
    ctx.body = {
        status:304
    };
   }
   
    
});


module.exports = router;