$(()=>{
    // $('form').on("blur","input",function (event) {
    //     var target = $(event.target);
    //     var num=target.val().trim();
    //     if(num==''){
    //         target.parent('div').addClass('error')
    //     }else{
    //         if(target.index()==2){
    //            if( checkReg.chinese(num)){
    //               target.parent('div').addClass('ok');
    //            }else{
    //                target.parent('div').addClass('error').removeClass('ok');
    //                target.next().text('请输入正确的格式');
    //            }
    //         }else if(target.index()==3||target.index()==4){
    //            if( checkReg.tel(num)){
    //               target.parent('div').addClass('ok');
    //            }else{
    //                target.parent('div').addClass('error').removeClass('ok');
    //                target.next().text('请输入正确的格式');
    //            }
    //         }
    //         target.parent('div').addClass('ok');
    //         target.next().text('');
    //     }
    // })
    $('form').on("blur","div",function () {
        var num=$(this).children('input').val().trim();
        if(num==''){
            $(this).addClass('error')
        }else{
             $(this).addClass('ok');
            $(this).children('span').text('');
            if($(this).index()==2){
               if( checkReg.chinese(num)){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }else if($(this).index()==3||$(this).index()==5){
               if( checkReg.tel(num)){
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
        for (let i = 0; i < $('form div').length-1; i++) {
            // const element = array[i];
            if($('form div').eq(i).hasClass("ok")){
                j=1
            }else{
                j=0
               break;
            } 
        }
           if(j){
               let code=$('input').eq(0).val();
                let proname=$('input').eq(1).val();
                let name=$('input').eq(2).val();
                 let tel=$('input').eq(3).val();
                  let address=$('input').eq(4).val();
                   let fax=$('input').eq(5).val();
                   let des=$('input').eq(6).val();
               console.log(code);
               
        $.ajax({
            type: 'post',
            url: '/proadd',
            async: true,
            data: {
                "code":code,
                "proname":proname,
                "name":name,
                "tel":tel,
                "address":address,
                "fax":fax,
                "des":des
            },
              success: function (str) {
                  console.log(str);
                  
              }
           })
        }
    })
})