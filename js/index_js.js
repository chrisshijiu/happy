$(function () {
    //今日直播 
    var zhibo_index_0 = $('#tv_zhiobo_ul li.zhibocur').index();
    zhibo_index_0 = parseInt(zhibo_index_0);
    var defaultIndex_0 = parseInt(zhibo_index_0/3);
    $("#zhibo_0").slide({ titCel: ".hd", mainCell: ".groDiv ul", autoPage: true, effect: "left", autoPlay: false, scroll: 3, vis: 3, pnLoop: false, defaultIndex: defaultIndex_0 });
    
    //限时抢
    $(".xsqg_list").slide({ titCel: ".hd", mainCell: ".xsqg_ul", autoPage: true, effect: "left", autoPlay: false, scroll: 3, vis: 3, pnLoop: false });
	
	
    //限时抢右边tab切换
    $(".floor_type li").hover(function(){
    	$(this).addClass("on").siblings().removeClass();
    	$(".xsqg_list").hide().eq($(this).index()).show();
    	$(".xsqg_djs").hide().eq($(this).index()).show();
    });


    //视频区 2n 个加无边距
//  $(".vedio_ul li:nth-child(2n),.qiang_ul li:nth-child(2n)").addClass("nomargin");

    //倒计时
	window.setInterval(function () {
        $('.djs_time').each(function () {
            //c = $(this).index();
            n_time = $(this).attr('data-endtime');
            n_time--;
            var day = 0,
			hour = 0,
			minute = 0,
			second = 0;//时间默认值		
            if (n_time > 0) {
                day = Math.floor(n_time / (60 * 60 * 24));
                hour = Math.floor(n_time / (60 * 60)) - (day * 24);
                minute = Math.floor(n_time / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(n_time) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;

            $(this).find(".djs_h").html(hour);
             $(this).find(".djs_m").html(minute);
              $(this).find(".djs_s").html(second);
            $(this).attr("data-endtime", n_time);
         
        });
    }, 1000);
});


//元素以及其他一些变量
var eleFlyElement = document.querySelector("#flyItem"), eleShopCart = document.querySelector("#shopCart");
var numberItem = $(".car_num").text();
// 抛物线运动
var myParabola = funParabola(eleFlyElement, eleShopCart, {
    speed: 120, //抛物线速度
    curvature: 0.0011, //控制抛物线弧度
    complete: function () {
        eleFlyElement.style.visibility = "hidden";
        $(".fly_item").css({ left: "0" });
        $(".icon_car").addClass("ani_icon_car");
        $(".car_num").html(++numberItem);

        $(".ani_num").animate({ top: "-25px", opacity: "0.6" }, function () {
            $(".ani_num").css({ top: "3px", opacity: "0" });
            $(".icon_car").removeClass("ani_icon_car");
        });
        //
    }
});

//今日 抢购左边加入购物车
$(".q_r_ul_addcar,.mryh_add_car").click(function (event) {

    var q = $(this);
    var img_src = $(this).parents("li").find(".q_r_ul_img img").attr("src");
    if ($(this).hasClass("mryh_add_car")) { img_src = $(this).parents("li").find(".a_con4_list .p_img img").attr("src"); }
    $("#flyItem img").attr("src", img_src);
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    eleFlyElement.style.left = event.clientX + scrollLeft + "px";
    eleFlyElement.style.top = event.clientY + scrollTop + "px";
    eleFlyElement.style.visibility = "visible";


    // 需要重定位
    myParabola.position().move();


});
