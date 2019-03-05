// token 
//      生成
//      验证




const jwt = require('jsonwebtoken');


// 私钥
var privateKey = 'simi123';

// 生成
exports.create = (username,expiresIn='1h') => {
    var token = jwt.sign({username}, privateKey, { 
        // privateKey:用于加密的私钥
        // expiresIn:token的有效期（单位：s）expiresIn='1h'->默认为1小时
        // username：用于加密的用户名
        expiresIn
     });
     return token;
}
// let res = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNTUxNzc2NDM4LCJleHAiOjE1NTE3ODAwMzh9.gGLiyFtvMmdU5TBqKqAwYP4MG-CSRnqgIT6bV1gQp5U", privateKey);//得出解密后的结果Object:{username:xxx...}
// console.log(res)

// 验证
exports.verify =(token)=>{
    let res =false;
   try{
       res = jwt.verify(token, privateKey);//得出解密后的结果Object:{username:xxx...}
   }catch(err){
       res = false;
   }

   console.log(res);

   return res;
}