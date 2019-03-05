$( () => {
//   console.log( decodeURI(location.search).slice(1));
var _id=decodeURI(location.search).slice(1);
   $.ajax({
        type: 'post',
            url: '/userli',
            async: true,
            data: {
                _id:_id,
                look:1
            },
             success: function (str) {
                $('.providerView').html(` <p><strong>用户编号：</strong><span>${str.userID}</span></p>
            <p><strong>用户名称：</strong><span>${str.username}</span></p>
            <p><strong>用户性别：</strong><span>${str.sex}</span></p>
            <p><strong>出生日期：</strong><span>${str.dob}</span></p>
            <p><strong>用户电话：</strong><span>${str.tel}</span></p>
            <p><strong>用户地址：</strong><span>${str.site}</span></p>
            <p><strong>用户类别：</strong><span>${str.type}</span></p>

            <a href="userList.html">返回</a>`)
                 
             }
   })
} )