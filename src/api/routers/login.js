const Router = require('koa-router');

const db = require('../db');

// 引入token
const token = require('../utils/token.js')
// 创建路由
const router = new Router();


router.post('/', async (ctx, next) => {
    // 解构
    let { username, psw, choice } = ctx.request.body;
    // console.log(username, psw);

    let res = await db.find('userinfo', { username,psw});
    // console.log(res);
    
        if(res!=''){
            if(res[0].psw==psw){
                // 登录成功，发送令牌
                let _token = token.create(username)
                ctx.body = {
                    _id:res[0]._id,
                    username:res[0].username,
                    choice:res[0].choice,
                    type:res[0].type,
                    token:_token,
                    status:"success"
                }
            }else{
                ctx.body = {
                    status:"fail"
                }
            }
        }else{
            ctx.body = {
                status:"fail"
            }
        }

});


module.exports = router;