(function () {
  //后台数据
    var menuList = [{
        titles: ['家用电器'],
        content: {
            tabs: ['家电馆', '镇乡专卖店', '家电服务'],
            subs: [{
                title: '电视',
                items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
            }, {
                title: '空调',
                items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
            }]
        }
    }, {
        titles: ['手机', '运营商', '数码'],
        content: {
            tabs: ['手机'],
            subs: [{
                title: '手机',
                items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
            }, {
                title: '手表',
                items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
            }]
        }
    }, {
        titles: ['电脑', '办公'],
        content: {
            tabs: ['家电馆', '镇乡专卖店', '家电服务'],
            subs: [{
                title: '电视',
                items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
            }, {
                title: '空调',
                items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
            }]
        }
    }, {
        titles: ['家居', '家具', '家装', '厨具'],
        content: {
            tabs: ['家居', '镇乡专卖店', '家电服务'],
            subs: [{
                title: '电视',
                items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
            }, {
                title: '空调',
                items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
            }]
        }
    }];

    function renderMenuDom(data) { 
        var frag = document.createDocumentFragment();
        data.forEach(function (ele,index) {
            var $dd = $('<dd class = "menu-item"></dd>').data('index', index);
            ele.titles.forEach(function (tit,ind) { 
                var $span = $('<span><a href="#"></a></span>').text(tit).appendTo($dd);
                if (ind != ele.titles.length - 1) {
                    var $line = $('<span>/</span>').appendTo($dd);
                 }
            });
            $dd.appendTo($(frag));
        })
        $(frag).appendTo($('.all-menu'))
    }
    renderMenuDom(menuList);
    
    function renderMenuDetil(data) { 
        var str = '';
        var str2 = '';
        data.tabs.forEach(function (ele) { 
            str +=`<li>
                <a href="#" class = "tab">${ele}
                    <i class="iconfont">&#xe743;</i>
                </a>
            </li>`
        })
        $('.tabs').html(str);
        var frag1 = document.createDocumentFragment();
        data.subs.forEach(function (ele) {
            var $dl = $('<dl></dl>');
            $(`<dt class="item-title">
                <a href="#">
                ${ele.title}
                    <i class="iconfont">&#xe743;</i>
                </a>
            </dt>`).appendTo($dl);
            var $dd = $('<dd class = "tab-item"></dd>');
            ele.items.forEach(function (item) { 
                var $a = $('<a href= "#">'+ item +'</a>').appendTo($dd);
            })
            $dl.append($dd).appendTo($(frag1));

        })
        $('.tab-items').html($(frag1));//每次渲染都会把原来的html结构替换掉
        // $('.menu-info').empty();
        // $('.menu-info').append($('.tabs')).append($('.tab-items'));

        
    } 

    var timer = null;
    $('.all-menu').on('mouseenter', 'dd', function () {
        var index = $(this).data('index');
        var data = menuList[index].content;
        renderMenuDetil(data);
        $('.menu-info').css({ display: 'inline-block' });
        $('.all-menu .menu-item').removeClass('ac');
        $(this).addClass('ac');
    }).mouseleave(function () {
        timer = setTimeout(function () {
            $('.menu-info').css({ display: 'none' });
            $('.all-menu dd').removeClass('ac');
        }, 500)
    });

    $('.menu-info').mouseenter(function () { 
        clearTimeout(timer);
    }).mouseleave(function () { 

            $('.all-menu dd').removeClass('ac');
            $('.menu-info').css({ display: 'none' });

    })

}())