const koa = require('koa');
// 静态资源服务中间件
const static = require('koa-static');

// 3、引入路由
    const routers = require('./api/routers/index');

// 1、创建koa应用
const app = new koa();
// 2、创建静态资源服务
app.use(static('./'));

// 处理status为404或null时，完善response信息
app.use(routers.allowedMethods());
app.use(routers.routes());

// 监听端口
app.listen(10086,()=>{
    console.log('server is running on http://localhost:10086');
    
})
