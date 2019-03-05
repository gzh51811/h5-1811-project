$(() => {
    let btn = $('.providerAddBtn [type="button"]')
    btn.on('click', () => {
        let val1 = $('#billId').val();
        let val2 = $('#billName').val();
        let val3 = $('#billCom').val();
        let val4 = $('#money').val();
        let val5 = $('#pay').val();
        let val6 = $('#billNum').val();
        // console.log(val1, val2, val3, val4, val5, val6)
        if (val1 != '' && val2 != '' && val3 != '' && val4 != '' && val5 != '' && val6 != '') {
            $.ajax({
                type: 'post',
                url: '/billAdd',
                async: true,
                data: {
                    val1,
                    val2,
                    val3,
                    val4,
                    val5,
                    val6
                },
                success: (str) => {
                    console.log(str);
                    $(location).attr('href', '/html/billList.html')
                }
            })
        }else{
            alert('插入失败，请填写完整')
        }

    })
})