$(() => {
    // 查询
    let commodity = $('.search [type="text"]');
    let search = $('.search [type="button"]');
    // console.log(search)
    // 封装数据下渲染
    function xuanran(str) {
        let html = str.map((item) => {
            return `<tr>
                        <td>${item.number}</td>
                        <td>${item.Sname}</td>
                        <td>${item.supply}</td>
                        <td>${item.money}</td>
                        <td>${item.pay}</td>
                        <td>${item.times}</td>
                        <td>
                            <a class="billView"><img src="../img/read.png" alt="查看" title="查看"/></a>
                            <a class="updateBill"><img src="../img/xiugai.png" alt="修改" title="修改"/></a>
                            <a class="removeBill"><img src="../img/schu.png" alt="删除" title="删除"/></a>
                        </td>
                    </tr>`
        }).join('');
        $(".providerTable1").html(html)

    }

    // 数据渲染 
    $.ajax({
        type: 'get',
        url: '/billList',
        async: true,
        success: (str) => {
            remove();
            xuanran(str);
        }
    })
    search.on('click', function () {
        $(".providerTable1").html('')
        // 获取下拉菜单的值
        let sel = $('#sel  option:selected');
        let val1 = commodity.val();
        // let val2 = sel.text();
        // console.log(sel.text())



        // Ajax请求
        $.ajax({
            type: 'post',
            url: '/billList',
            async: true,
            data: {
                val1
            },
            success: (str) => {
                if (str.status == 'success') {
                    // console.log(str.res[0].supply)


                    xuanran(str.res);
                    // for(var i=0;i<str.res.length;i++){
                    //     if(str.res[i].supply){
                    //         if(sel.text()=='北京市粮油总公司'){
                    //             console.log(str.res);
                    //             console.log(sel.text());
                    //         }else if(sel.text()=='广州市五得利面粉厂'){
                    //             console.log(444)
                    //         }
                    //     }
                    // }

                } else {
                    alert('没有查找到数据')
                }
            }
        })
    })

    // 修改---传参数
    $(".providerTable1").on('click', '.updateBill', function () {
        console.log($(this).parent().parent().find('td').eq(0).html());
        $(location).attr('href', '/html/billUpdate.html?id=' + $(this).parent().parent().find('td').eq(0).html())

    })
    remove()
    // 删除---点击哪个获取哪个的编号
    function remove() {
        $(".providerTable1").on('click', '.removeBill', function () {
            console.log(99)
            $('#yes').on('click', () => {
                let num = $(this).parent().parent().find('td').eq(0).html();
                $.ajax({
                    type: 'get',
                    url: '/billList',
                    async: true,
                    data: {
                        num
                    },
                    success: (str) => {
                        xuanran(str)

                    }
                })
                $('.zhezhao').css('display', 'none');
                $('#removeBi').fadeOut();

            })

        })

    }

// 详情
    $('.providerTable1').on('click','.billView',function(){
        console.log($(this).parent().parent().find('td').eq(0).html())
        $(location).attr('href', '/html/billView.html?id=' + $(this).parent().parent().find('td').eq(0).html());
    })
// 获取用户名
    let user = localStorage.getItem('user');
    console.log(JSON.parse(user));
    let welcome = JSON.parse(user)
    $('.welcome').html(welcome.username);
    // 退出
    $('.back').on('click',()=>{
        localStorage.removeItem('user');
        // location.reload();
        $(location).attr('href', '/html/login.html')
    })
})