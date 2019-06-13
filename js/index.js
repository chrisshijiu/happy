$(function () {
    var tv_bottom = $(".tv-bottom");
    var new_bottom = $(".new-bottom");
    var activity_bottom = $(".activity-bottom");
    var activity_bottom1=$(".activity-bottom1");
    $.ajax({
        type: 'get',
        url: "./server/api/tv.php",
        data: {},
        success: function (res) {
            console.log(res);

            var arr = JSON.parse(res);
            console.log(arr);
            var str = arr.map(function (item) {
                return `<a href="" class="contain">
                <div class="tv-bottom-left">
                    <div class="tv-bottom-left-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="disco">
                        <div>下单立减10元</div>
                    </div>
                        <p>${item.desc}</p>
                    <span class="RMB-span">
                        ￥
                    </span>
                    <span class="num-span">
                        ${item.price}
                    </span>
                    <span class="pre-span">
                        <del>￥${item.yuan}</del>
                    </span>
                    <div class="btn-buy">
                        立即订购
                    </div>
                </div>
            </a>`
            }).join("");
            console.log(str);

            tv_bottom.html(str);
        }
    })
    $.ajax({
        type: 'get',
        url: "./server/api/new.php",
        data: {},
        success: function (res) {
            var arr = JSON.parse(res);
            var str = arr.map(function (item) {
                return `<a href="" class="contain">
                <img src="${item.img}" alt="">
                <h3 class="new-h3">${item.desc1}</h3>
                <p class="new-p">${item.desc2}</p>
                <span class="RMB-span">
                        ￥
                    </span>
                    <span class="num-span">
                        ${item.price}
                    </span>
                    <span class="pre-span">
                        <del>￥${item.yuan}</del>
                    </span>
            </a>`
            }).join("");
            console.log(str);
            new_bottom.html(str);
        }
    })
    $.ajax({
        type: 'get',
        url: "./server/api/activity.php",
        data: {},
        success: function (res) {
            var arr = JSON.parse(res);
            var str = arr.map(function (item) {
                return `<a href="" class="contain">
                <img src="${item.img}" alt="">
                <h3 class="new-h3">${item.desc1}</h3>
                <p class="new-p">${item.desc2}</p>
                <span class="RMB-span">
                        ￥
                    </span>
                    <span class="num-span">
                        ${item.price}
                    </span>
                    <span class="pre-span">
                        <del>￥${item.yuan}</del>
                    </span>
            </a>`
            }).join("");
            console.log(str);
            activity_bottom.html(str);
        }
    })
    $.ajax({
        type: 'get',
        url: "./server/api/activity1.php",
        data: {},
        success: function (res) {
            var arr = JSON.parse(res);
            var str = arr.map(function (item) {
                return `<a href="" class="contain">
                <img src="${item.img}" alt="">
                <h3 class="new-h3">${item.desc1}</h3>
                <p class="new-p">${item.desc2}</p>
                <span class="RMB-span">
                        ￥
                    </span>
                    <span class="num-span">
                        ${item.price}
                    </span>
                    <span class="pre-span">
                        <del>￥${item.yuan}</del>
                    </span>
            </a>`
            }).join("");
            console.log(str);
            activity_bottom1.html(str);
        }
    })
})