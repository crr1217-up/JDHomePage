$("#shortcut").load("nav/nav.html");
$("#search").load("search/search.html");
$('.fs1').load("fs/fs1.html");
$('.fs3').load("fs/fs3.html");
$('.seckill').load('seckill/seckill.html');

// 轮播图需要传递的参数：
//     1. 轮播的内容  ---》 dom节点列表
//     2. 动画效果  ----》 type : 'animate' , 'fade'
//     3. 是否自动轮播 ---》 
//     4. 是否显示左右按钮
//     5. 是否显示小圆点
//     6. 自动轮播时间
//     7. 每一次轮播对象的大小  width height
//     8. 自动轮播方向
$('.slider_wrapper').swiper({
    list: $('.slider_item'),
    type: 'fade',
    isAuto: true,
    showBtn: true,
    showSpot: true,
    autoTime: 3000,
    width: 590,
    height: 480,
    direction:'left'
})
$('.slider_wrapper2').swiper({
    list: $('.slider_item2'),
    type: 'fade',
    isAuto: true,
    showBtn: false,
    showSpot: false,
    autoTime: 5000,
    width: 190,
    height: 480,
    direction:'right'
})
$(".slider_wrapper3").swiper({
	list: $(".slide3"),
	type: "animate",
	isAuto: false,
	showBtn: true,
	showSpot: false,
	// autoTime: 3000,
	width: 800,
	height: 260,
	direction: "right"
});
$(".seckill-brand").swiper({
	list: $(".seckill-brand-item"),
	type: "animate",
	isAuto: true,
	showBtn: false,
	showSpot: true,
	autoTime: 3000,
	width: 180,
	height: 240,
	direction: "right"
});
