var timer = null;
$(".searInp input").on('input',function(){
    var val = $(this).val();
    //console.log(val);
    if (val) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            $.ajax({
				url: "https://suggest.taobao.com/sug",
				type: "GET",
				data: {
					area: "c2c",
					code: "utf-8",
					q: val,
					callback: "renderDom"
                },
				dataType: "jsonp"
			});
         },500)
     }
	
});
function renderDom(res) { 
    console.log(res);
    var str = "";
    var val = $(".searInp input").val();
    if (val) {
        $(".sear-drop").show();
    } else { 
         $(".sear-drop").hide();
    }
    var result = res.result;
    console.log(result);
    $('.sear-drop').empty();
    $(`<li class = 'tpl'>
        <div class = 'search-result'></div>
        <div>约<span class = 'pro-count'></span>个商品</div>
    </li>`).appendTo($('.sear-drop'));
    result.forEach(function (ele, index) {
        var $li = $(".sear-drop .tpl").clone(true).removeClass('tpl');
        $li.find('.search-result').text(ele[0]);
        $li.find('.pro-count').text(parseInt(ele[1]));
        $li.appendTo($('.sear-drop'));
        // str +=`<li>
        //     <div class = 'search-result'>${ele[0]}</div>
        //     <div>约<span class = 'pro-count'>${parseInt(ele[1])}</span>个商品</div>
        // </li>`
    });
    //$('.sear-drop').html(str);
}

$('.sear-drop').mouseleave(function () {
    setTimeout(function () { 
         $(".sear-drop").hide();
    },500)
});
var timer2 = null; 
var timer3 = null;
$('.logo').mouseenter(function () { 
    clearTimeout(timer2);
    clearTimeout(timer3);
    $(".logo span").css({ opacity: 0});
    $('.logo a').css({
        backgroundImage: 'url(" //img1.360buyimg.com/da/jfs/t1/26944/24/11628/65522/5c90a819E2b15c8a2/16219e29729eab94.gif?v=' + Math.random() + '")',
        opacity: 1,
        backgroundColor: '#fff'
    }).show();
    timer3 = setTimeout(function () {
        $('.logo span').fadeTo(300, 1)
    }, 3000);
    
}).mouseleave(function () { 
    clearTimeout(timer2);
     clearTimeout(timer3);
    timer2 = setTimeout(function () { $(".logo a").hide();},800);
});

var changePh = ["华为笔记本", "BB霜", "大牌口红", "N95口罩"];
function ChangePh(data) { 
    var index = 0;
    setInterval(function () {
        $('.inp').attr('placeholder', data[index]);
        index < data.length ? index++ : index = 0;
    }, 2000);
}
ChangePh(changePh);
