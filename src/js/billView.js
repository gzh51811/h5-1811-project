$(()=>{
    let num = location.search;
    num = num.slice(4);
    // console.log(num);
    let providerView = $('.providerView')
    // console.log(e)
    $.ajax({
        type: 'get',
        url: '/billView',
        async: true,
        data: {
            num
        },
        success: (str) => {
            console.log(999)
            console.log(str.numner);
            $('.span1').html(str.numner);
            $('.span2').html(str.Sname);
            $('.span3').html(str.supply);
            $('.span4').html(str.money);
            $('.span5').html(str.pay);
            $('.span6').html(str.times);
    
        }
    })
})