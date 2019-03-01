const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
const router = new Router();

// 引入页面路由
const loginRouter = require('./login');
const proliRouter = require('./proli');
router.use(koaBody({
    // 支持formdata
    multipart:true,

    // 文件支持
    formidable:{
        // 指定保存路径
        uploadDir:'./uploads',
        keepExtensions:true,
        // 改文件名
        onFileBegin(filename,file){
            // filename: 上传文件的原始名
            // file:文件信息对象
            //   * path:

            // file.path = './uploads/'+filename
        }
    }
}));

router.use('/login',loginRouter.routes());
router.use('/proli',proliRouter.routes());
module.exports = router;