$(()=>{
    $('form').on("blur","div",function () {
        if($(this).index()==0){
            var psw=$('input').eq(0).val();
            console.log(psw);
            
            $.ajax({
                       type: 'post',
                       url: '/psw',
                       async: true,
                       data: {
                           "_id":'5c7d2236176e541ef03e4c9f',
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
                "_id":'5c7d2236176e541ef03e4c9f',
                "psw":$('#newPassword').val()
            },
            success:function (str) {
               console.log(str);
                
            }
             })
        }
    })
})