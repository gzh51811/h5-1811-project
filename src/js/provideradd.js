$(()=>{
    //  console.log($('form div').eq(i).find('input').val());
    // for(let i=0;i<$('form div').length-1;i++){ 
    //     //  console.log($('form div').eq(i).find('input').val());
    //     if($('form div').eq(i).find('input').val()==''){
    //         $('form div').eq(i).addClass('error')
    //     }
    // }
    $('form').on("blur","input",function (event) {
        var target = $(event.target);
        var num=target.val().trim();
        if(num==''){
            target.parent('div').addClass('error')
        }else{
            if(target.index()==2){
               if( checkReg.chinese(num)){
                  target.parent('div').addClass('ok');
               }else{
                   target.parent('div').addClass('error').removeClass('ok');
                   target.next().text('请输入正确的格式');
               }
            }else if(target.index()==3||target.index()==4){
               if( checkReg.tel(num)){
                  target.parent('div').addClass('ok');
               }else{
                   target.parent('div').addClass('error').removeClass('ok');
                   target.next().text('请输入正确的格式');
               }
            }
            target.parent('div').addClass('ok');
            target.next().text('');
        }
    })
    
})