$(() => {
    let btn = $('.providerAddBtn');
    let num = location.search;
    num = num.slice(4);
    console.log(num)
    $.ajax({
        type: 'post',
        url: '/billUpdate',
        async: true,
        data: {
            num
        },
        success: (str) => {
            console.log(str.Sname)
            $("#providerId").val(str.number);
            $("#providerName").val(str.Sname);
            $("#people").val(str.supply);
            $("#money").val(str.money);
            $("#pay").val(str.pay);
            $("#times").val(str.times);
        }
    })

    btn.on('click', () => {
        // 点击获取每个input的值
        let val1 = $("#providerId").val();
        let val2 = $("#providerName").val();
        let val3 = $("#people").val();
        let val4 = $("#money").val();
        let val5 = $("#pay").val();
        let val6 = $("#times").val();

        // console.log(this.val1, val2, val3, val4, val5, val6)
        // 向后台发起请求
        $.ajax({
            type: 'get',
            async: true,
            url: '/billUpdate',
            data: {
                // number:val1,
                // Sname:val2,
                // supply:val3,
                // money:val4,
                // pay:val5,
                // times:val6
                val1,
                val2,
                val3,
                val4,
                val5,
                val6
            },
            success: (str) => {
                console.log(str.res.n)
                if (str.res.n) {
                     $(location).attr('href', '/html/billList.html')

                } else {
                    alert('修改失败')
                }
            }

        })

    })
})