$(function () {
    $(".all-type").hover(function () {
        console.log(1);
        
        $(".index-nav").css("display", "block");
    });
    $(".nav").mouseleave(function () {
        console.log(1);
        
        $(".index-nav").css("display", "none");
    })
})