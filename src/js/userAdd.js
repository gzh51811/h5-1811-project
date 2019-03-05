$(()=>{
    var m;
    $('form').on("blur","div",function () {
        if($(this).index()!=4){
             if($(this).index()==0){
            var userID=$('input').eq(0).val();
                    $.ajax({
                       type: 'post',
                       url: '/useradd',
                       async: true,
                       data: {
                           "userID":userID        
                       },
                         success: function (str) {
                             m=str;
                             console.log(m);
                             
                             if(m){
                                 $('form div').eq(0).removeClass('error').addClass('ok');     
                                 $('form div').eq(0).children('span').text('')                           
                             }else{
                                  $('form div').eq(0).removeClass('ok').addClass('error');
                                  $('form div').eq(0).children('span').text('请输入正确的格式');
                             }
                         }
                    })
                    }else{
                        var num=$(this).children('input').val().trim();
                    }
            
        }
        if(num==''){
            $(this).addClass('error')
        }else{
             $(this).addClass('ok');
            $(this).children('span').text('');
            if($(this).index()==1){
               if( checkReg.chinese(num)){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }else if($(this).index()==6){
               if( checkReg.tel(num)){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }else if($(this).index()==5){
                if( checkReg.birthday(num)){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }else if($(this).index()==2){
                if( checkReg.psweasy(num)){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }else if($(this).index()==3){
                // console.log($(this).prev('div').children('input').val());
                // console.log(num);
                
                if(checkReg.pwwagain(num,$(this).prev('div').children('input').val())){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }
        } 
    })
           $('.save').click(function () { 
        var j=0;
        // if($("input[name='userlei']:checked").val()!='undefined')
        for (let i = 0; i < $('form div').length-1; i++) {
            // const element = array[i];
            if($('form div').eq(i).hasClass("ok")){
                j=1
            }else{
                j=0
               break;
            } 
        }
         console.log(j);
           if(j){
               let userID=$('input').eq(0).val();
               let username=$('input').eq(1).val();
               let psw=$('input').eq(3).val();
                               // let sex=$('input').is('').val();
              let sex=$("select option:selected").val()
                // let name=$('input').eq(2).val();
                 let dob=$('input').eq(4).val();
                  let tel=$('input').eq(5).val();
                   let site=$('input').eq(6).val();
                   let type=$("input[name='userlei']:checked").val();
                // if($('input').eq)
               console.log(sex);
               
        $.ajax({
            type: 'get',
            url: '/useradd',
            async: true,
            data: {
                "userID":userID,
                "username":username,
                "psw":psw,
                "sex":sex,
                "dob":dob,
                "tel":tel,
                "site":site,
                "type":type              
            },
              success: function (str) {
                  console.log(str);
                  
              }
           })
        }
    })
})