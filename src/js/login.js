
$(()=>{
    let user = $('#user');
    let password = $('#password');
    $('.inputbox input').blur(()=>{
        $('.hint').css('display','none')
    })
    $('#btn').click(()=>{
        let username = user.val();
        let psw = password.val()
        $.ajax({
            type:'post',
            url:'/login',
            async:true,
            data:{
                username,
                psw

            },
            success:(str)=>{
                console.log(str);
                if(str.status=='success'){
                    // console.log(7777,str)
                    $(location).attr('href', '/html/home.html')
                }else if(str.status=='fail'){
                    // console.log('密码错误')
                    $('.hint').css('display','block')
                }
                // let a = JSON.stringify(str);
                // console.log(a)
                localStorage.setItem('user',JSON.stringify(str));//只能写入json字符串
            }

        })        
    })
})
