const Router = require('koa-router');

const db = require('../db');

// 创建路由
const router = new Router();


router.post('/', async (ctx, next) => {
    // 解构
    let { _user, _password, choice } = ctx.request.body;
    // console.log(_user, _password);

    let res = await db.find('user', { username: _user});
        if(res!=''){
            if(res[0].password==_password){
                ctx.body = {
                    username:res[0].username,
                    choice:res[0].choice,
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
    // res = res[0];
    // if(res){
    //     if(res.password==_password){
    //         ctx.body = {
                // // _id:res._id,
                // // username:res.username,
                // code:200,
                // msg:'success'    
            
    //         }
    //     }else{
    //         ctx.body = {
    //             code:100,
    //             msg:'fail'
    //         }
    //     }
        
    // }else{
    //     ctx.body = {
    //         code:100,
    //         msg:'fail'
    //     }
    // }
});


module.exports = router;