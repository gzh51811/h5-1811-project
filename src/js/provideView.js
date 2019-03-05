$( () => {
//   console.log( decodeURI(location.search).slice(1));
var _id=decodeURI(location.search).slice(1);
   $.ajax({
        type: 'post',
            url: '/proli',
            async: true,
            data: {
                _id:_id,
                look:1
            },
             success: function (str) {
                $('.providerView').html(` <p><strong>供应商编码：</strong><span>${str.code}</span></p>
            <p><strong>供应商名称：</strong><span>${str.proname}</span></p>
            <p><strong>联系人：</strong><span>${str.name}</span></p>
            <p><strong>联系电话：</strong><span>${str.tel}</span></p>
            <p><strong>传真：</strong><span>${str.fax}</span></p>
            <p><strong>描述：</strong><span>${str.des}</span></p>

            <a href="providerList.html">返回</a>`)
                 
             }
   })
} )