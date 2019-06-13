$(function () {

  /*00-获取页面标签，封装工具函数*/
  let oSlider = $(".slider");
  let oSliderBoxItem = $(".slider-box-item");
  let oSliderBox = $(".slider-box");
  let oSliderNav = $(".slider-nav");
  let timer;
  let index = 0;
  let oSliderBoxLeft = 0;
  let oSliderBoxItemCount = oSliderBoxItem.length;
  let oSliderBoxItemWidth = oSliderBoxItem.width();
  let switchSlider = (index) => {
    if (index == oSliderBoxItemCount - 1) {
      index = 0;
    }
    $(".slider-nav-item").eq(index).addClass("active").siblings().removeClass("active");
  }
  let next = () => {
    index++;
    /*临界值检查*/
    if (index >= oSliderBoxItemCount) {
      index = 1;
      oSliderBox.css("left", 0);
    }
    oSliderBoxLeft = index * oSliderBoxItemWidth;
    // oSliderBox.stop(true).animate({"left":- oSliderBoxLeft + "px"},1);
    oSliderBox.css("left", -oSliderBoxLeft + "px");
    oSliderBoxItem.eq(index).css('opacity', 0.5).animate({
      'opacity': 1
    }, 1000)
    switchSlider(index);
  }
  let autoPlay = () => {
    timer = setInterval(next, 3500);
  }


  /*01-设置标签样式*/
  oSliderBoxItem.each(function (i, ele) {
    // $(this).css("background",$.getRandomColor());

    // console.log(oSliderBoxItemCount, i);
    if (i == oSliderBoxItemCount - 1) return false;
    /*创建对应的图标并且插入到页面中*/
    $(`<li class="slider-nav-item">${i + 1}</li>`).appendTo(oSliderNav);
    $(".slider-nav-item").first().addClass("active");
  })

  /*02-设置自动播放*/
  // autoPlay();

  /*03-设置鼠标移入的时候停止自动播放，移开的时候重新播放*/
  // oSlider.hover(() => clearInterval(timer), autoPlay);

  /*05-鼠标移入小图标的时候显示对应的滑块*/
  $(".slider-nav-item").mouseenter(function () {
    var index = $(this).index();
    oSliderBoxLeft = index * oSliderBoxItemWidth;
    oSliderBox.stop(true).animate({
      "left": -oSliderBoxLeft + "px"
    });
    switchSlider(index);
  })
})