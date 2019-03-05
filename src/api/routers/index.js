const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
const router = new Router();

// 引入页面路由
const loginRouter = require('./login');
const proliRouter = require('./proli');
<<<<<<< HEAD
const proaddRouter = require('./proadd');
const userliRouter = require('./userli');
const useraddRouter = require('./useradd');
const pswRouter = require('./psw.js');
=======
>>>>>>> adb1779dc2dc4c23644f55d89e3887c3f1390d8f
const billListRouter = require('./billList')
const billAddRouter = require('./billAdd')
const billUpdateRouter = require('./billUpdate');
const billViewRouter = require('./billView');
const tokenverifyRouter = require('./tokenverify');
<<<<<<< HEAD
=======
const proaddRouter = require('./proadd');
const userliRouter = require('./userli');
const useraddRouter = require('./useradd');
const pswRouter = require('./psw.js');
>>>>>>> adb1779dc2dc4c23644f55d89e3887c3f1390d8f

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
<<<<<<< HEAD
router.use('/proadd',proaddRouter.routes());
router.use('/userli',userliRouter.routes());
router.use('/useradd',useraddRouter.routes());
router.use('/psw',pswRouter.routes());
=======
>>>>>>> adb1779dc2dc4c23644f55d89e3887c3f1390d8f
router.use('/billList',billListRouter.routes());
router.use('/billAdd',billAddRouter.routes());
router.use('/billUpdate',billUpdateRouter.routes());
router.use('/billView',billViewRouter.routes());
router.use('/tokenverify',tokenverifyRouter.routes());
<<<<<<< HEAD
=======
router.use('/proadd',proaddRouter.routes());
router.use('/userli',userliRouter.routes());
router.use('/useradd',useraddRouter.routes());
router.use('/psw',pswRouter.routes());
>>>>>>> adb1779dc2dc4c23644f55d89e3887c3f1390d8f
module.exports = router;