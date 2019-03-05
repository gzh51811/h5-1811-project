$(()=>{
    let user = localStorage.getItem('user');
    if(!user){
        user = {}
    }else{
        user = JSON.parse(user)
    }
    console.log(user.username)
    // 验证
    // if(user._id){
    //     $('.welcome').html(user.username);
    // }
// token验证
    // user = JSON.parse(user)
    console.log(user.token)
    if(user.token){
        $.ajax({
            type:'post',
            url:'/tokenverify',
            async:true,
            data:{
               token:user.token
            },
            success:(str)=>{
                if(str.status==200){
                    $('.welcome').html(user.username);
                }else if(str.status==304){
                    $(location).attr('href', '/html/login.html')
                }
                console.log(str)
            }
        })
    }





    // 退出
    $('.back').on('click',()=>{
        localStorage.removeItem('user');
        // location.reload();
        $(location).attr('href', '/html/login.html')
    })
})