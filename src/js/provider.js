$( () =>{
     $.ajax({
            type: 'get',
            url: '/proli',
            async: true,
            // data: {
            //     val
            // },
            success: function (str) {
                // var arr = JSON.parse(str);
                // console.log(str)
                let html=str.map(function (item) {
                    return `<tr>
                <td>PRO-CODE—001</td>
                <td>${item.proname}</td>
                <td>${item.name}</td>
                <td>${item.tel}</td>
                <td>${item.fax}</td>
                <td>${item.time}</td>
                <td>
                    <a href="providerView.html"><img src="../img/read.png" alt="查看" title="查看"/></a>
                    <a href="providerUpdate.html"><img src="../img/xiugai.png" alt="修改" title="修改"/></a>
                    <a href="#" class="removeProvider"><img src="../img/schu.png" alt="删除" title="删除"/></a>
                </td>
            </tr>`
                })
                console.log(html);
                
                $('.providerTable').append(html);
            }
        })
    $("._search").click(function () {
    let val= ($(".search input").eq(0).val());
        // console.log(val);
       $.ajax({
            type: 'post',
            url: '/proli',
            async: true,
            data: {
                val
            },
            success: function (str) {
                // // var arr = JSON.parse(str);
                // console.log(str)
                 let html=` <tr class="firstTr">
                                <th width="10%">供应商编码</th>
                                <th width="20%">供应商名称</th>
                                <th width="10%">联系人</th>
                                <th width="10%">联系电话</th>
                                <th width="10%">传真</th>
                                <th width="10%">创建时间</th>
                                <th width="30%">操作</th>
                            </tr>
                            <tr>
                                <td>PRO-CODE—001</td>
                                <td>${str.proname}</td>
                                <td>${str.name}</td>
                                <td>${str.tel}</td>
                                <td>${str.fax}</td>
                                <td>${str.time}</td>
                                <td>
                                <a href="providerView.html"><img src="../img/read.png" alt="查看" title="查看"/></a>
                                <a href="providerUpdate.html"><img src="../img/xiugai.png" alt="修改" title="修改"/></a>
                                <a href="#" class="removeProvider"><img src="../img/schu.png" alt="删除" title="删除"/></a>
                                </td>
                            </tr>`
                
                console.log(html);
                
                $('.providerTable').html(html);
            }
        })
    })
    
})