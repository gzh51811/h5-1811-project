$(()=>{
     function pag(str,page,qty,length) {
        console.log(str);   
        let html='';   
        if(str.length>qty){
            $('.pag').css('display','block');
            for(let i=qty*(page-1);i<length;i++){
            html+=`<tr data-id="${str[i]._id}">
                <td>${str[i].userID}</td>
                <td>${str[i].username}</td>
                <td>${str[i].sex}</td>
                <td>20</td>
                <td>${str[i].tel}</td>
                <td>${str[i].type}</td>
                
                <td>
                    <a href="javascript:;"><img src="../img/read.png" alt="查看" title="查看"/></a>
                    <a href="javascript:;"><img src="../img/xiugai.png" alt="修改" title="修改"/></a>
                    <a href="#" class="removeProvider"><img src="../img/schu.png" alt="删除" title="删除"/></a>
                </td>
            </tr>`
            }
            
             
        }else{
            // console.log(1);
            $('.providerTable').html('')
             $('.pag').css('display','none');
             for(let i=0;i<str.length;i++){ 
                 var time = new Date(str[i].time) ;
                 var yea=time.getFullYear();
                 var month=time.getMonth()+1;
                 var date=time.getDate();
                 time=yea+'.'+month+'.'+date
             html+=`<tr data-id="${str[i]._id}">
                <td>${str[i].userID}</td>
                <td>${str[i].username}</td>
                <td>${str[i].sex}</td>
                <td>20</td>
                <td>${str[i].tel}</td>
                <td>${str[i].type}</td>
                
                <td>
                    <a href="javascript:;"><img src="../img/read.png" alt="查看" title="查看"/></a>
                    <a href="javascript:;"><img src="../img/xiugai.png" alt="修改" title="修改"/></a>
                    <a href="#" class="removeProvider"><img src="../img/schu.png" alt="删除" title="删除"/></a>
                </td>
            </tr>`
            }
        //    $('.providerTable').append(html);
        }
         let html1=` <tr class="firstTr">
                                <th width="10%">用户编码</th>
                                <th width="20%">用户名称</th>
                                <th width="10%">性别</th>
                                <th width="10%">年龄</th>
                                <th width="10%">电话</th>
                                <th width="10%">用户类型</th>
                                <th width="30%">操作</th>
                            </tr>`                        
                $('.providerTable').html(html1+html);
    }
     $.ajax({
            type: 'get',
            url: '/userli',
            async: true,
            // data: {
            //     val
            // },
            success: function (str) {
                   console.log(str);
                   var qty=5;
                   var page=1;
                   var length=qty*page;
            pag(str,page,qty,length)
            $('.next').click(function () {
                page++;
                length=qty*page;
                if(str.length<(page*qty)&&str.length>((page-1)*qty)){
                    length=str.length;
                    console.log(1);
                }else if(str.length<((page-1)*qty)){
                    page--;
                    length=str.length;
                }
                console.log(length);
                
                pag(str,page,qty,length)
            })
            $('.back').click(function () {
                page--;
                length=qty*page;
                if(page==0){
                    page=1;
                    length=qty*page;
                }
                console.log(page);
                
                pag(str,page,qty,length)
            })
                $('table').on('click','img',function () {  
                    if($(this).attr('alt')=='查看'){
                      location.href = './userView.html?' +$(this).parents('tr').attr('data-id');
                    }
                // })
                //  $('table').on('click','img',function () {  
                   else if($(this).attr('alt')=='修改'){
                      location.href = './userUpdate.html?' +$(this).parents('tr').attr('data-id');
                    }
                // })
                // $('table').on('click','img',function () {
                    // console.log($(this).parents('tr'));
                    
                 else if($(this).attr('alt')=='删除'){
                      var _id=$(this).parents('tr').attr('data-id');
                        $.ajax({
                            type: 'post',
                                url: '/userli',
                                async: true,
                                data: {
                                    _id:_id,
                                    dele:1
                                },
                                success:function (str) {
                                    // console.log(str);  
                                     $.ajax({
                                        type: 'get',
                                        url: '/userli',
                                        async: true,
                                        // data: {
                                        //     val
                                        // },
                                        success: function (str) {
                                            pag(str,page,qty,length)
                                        }
                                    })
                                }
                        })
                    }
                })
            }
        })
    $("._search").click(function () {
        let val= ($(".search input").eq(0).val());
            // console.log(val);
           $.ajax({
                type: 'post',
                url: '/userli',
                async: true,
                data: {
                    val
                },
                success: function (str) {
                    if(str.code==100){
                         $('.providerTable').html(`<tr class="firstTr">
                                <th width="10%">用户编码</th>
                                <th width="20%">用户名称</th>
                                <th width="10%">性别</th>
                                <th width="10%">年龄</th>
                                <th width="10%">电话</th>
                                <th width="10%">用户类型</th>
                                <th width="30%">操作</th>
                            </tr>`)         
                    }else{
                    var qty=5;
                    var page=1;
                    var length=qty*page;
                    pag(str,page,qty,length)
                    $('.next').click(function () {
                        page++;
                        length=qty*page;
                        if(str.length<(page*qty)&&str.length>((page-1)*qty)){
                            length=str.length;
                            console.log(1);
                        }else if(str.length<((page-1)*qty)){
                            page--;
                            length=str.length;
                        }
                        console.log(length);

                        pag(str,page,qty,length)
                    })
                    $('.back').click(function () {
                        page--;
                        length=qty*page;
                        if(page==0){
                            page=1;
                            length=qty*page;
                        }
                        console.log(page);

                        pag(str,page,qty,length)
                    })
                        }
                    }
                })
        })
})