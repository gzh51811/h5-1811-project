$(()=>{
    var _id=decodeURI(location.search).slice(1);
    $('form').on("blur","div",function () {
        if($(this).index()!=1){
            var num=$(this).children('input').val().trim();
        }
        if(num==''){
            $(this).addClass('error')
        }else{
             $(this).addClass('ok');
            $(this).children('span').text('');
            if($(this).index()==0){
               if( checkReg.chinese(num)){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }else if($(this).index()==3){
               if( checkReg.tel(num)){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }else if($(this).index()==2){
                if( checkReg.birthday(num)){
                  $(this).addClass('ok').removeClass('error');
               }else{
                   $(this).addClass('error').removeClass('ok');
                   $(this).children('span').text('请输入正确的格式');
               }
            }
        } 
    })
           $('.save').click(function () { 
        //        console.log(1);
            //    var a = $("input[name='userlei']:checked").val();
            //    alert("选中的radio的值是：" + a);
        //        console.log($('form div').eq(5).find('input').eq(1).attr('checked'));
          
        var j=1;
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
               let username=$('input').eq(0).val();
                // let sex=$('input').is('').val();
              let sex=$("select option:selected").val()
                // let name=$('input').eq(2).val();
                 let dob=$('input').eq(1).val();
                  let tel=$('input').eq(2).val();
                   let site=$('input').eq(3).val();
                   let type=$("input[name='userlei']:checked").val();
                // if($('input').eq)
               console.log(sex);
               
        $.ajax({
            type: 'post',
            url: '/userli',
            async: true,
            data: {
                "_id":_id,
                "update":1,
                "username":username,
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