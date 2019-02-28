
$(()=>{
    let user = $('#user');
    let password = $('#password');
    $('#btn').click(()=>{
        let _user = user.val();
        let _password = password.val()
        $.ajax({
            type:'post',
            url:'/login',
            async:true,
            data:{
                _user,
               _password

            },
            success:(str)=>{
                console.log(str);
                
            }
        })        
    })
})
