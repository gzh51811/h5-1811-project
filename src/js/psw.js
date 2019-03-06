$(()=>{
    // var
    let user = localStorage.getItem('user');
    console.log(JSON.parse(user));
    let welcome = JSON.parse(user)
    $('.welcome').html(welcome.username);
    var _id=JSON.parse(localStorage.getItem('user'))._id;
    console.log(_id);
     // 退出
    $('._back').on('click',()=>{
        localStorage.removeItem('user');
        // location.reload();
        $(location).attr('href', '/html/login.html')
    })
    $('form').on("blur","div",function () {
        if($(this).index()==0){
            var psw=$('input').eq(0).val();
            console.log(psw);
            
            $.ajax({
                       type: 'post',
                       url: '/psw',
                       async: true,
                       data: {
                           "_id":_id,
                           "psw":psw        
                       },
                         success: function (str) {
                             m=str;
                             console.log(m);       
                             if(m){
                                 $('form div').eq(0).removeClass('error').addClass('ok');     
                                 $('form div').eq(0).children('span').text('')                           
                             }else{
                                  $('form div').eq(0).removeClass('ok').addClass('error');
                                  $('form div').eq(0).children('span').text('请输入正确的密码');
                             }
                         }
                    })
        }else if($(this).index()==1){
           var psw=$('#newPassword').val();
                if( checkReg.psweasy(psw)){
                  $(this).addClass('ok').removeClass('error');
                   $(this).find('span').text('')
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
                  
               }
            }else if($(this).index()==2){
                 if(checkReg.pwwagain($('#newPassword').val(),$('#reNewPassword').val())){
                  $(this).addClass('ok').removeClass('error');
                   $(this).find('span').text('')
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }
    })
    $('.providerAddBtn input').click(function () { 
        var j=0;
        for (let i = 0; i < $('form div').length-1; i++) {
            if($('form div').eq(i).hasClass("ok")){
                j=1
            }else{
                j=0
               break;
            } 
        }
        if(j){
             $.ajax({
            type: 'get',
            url: '/psw',
            async: true,
            data:{
                "_id":_id,
                "psw":$('#newPassword').val()
            },
            success:function (str) {
               console.log(str);
                
            }
             })
        }
    })
})