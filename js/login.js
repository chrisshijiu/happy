$(function(){
   var s_radio= $(".s_radio");
   var mc =$(".mc");
   s_radio.eq(0).click(function(){
    //    console.log(1);
       mc.eq(0).css("display","block");
       mc.eq(1).css("display","none");
   })
   s_radio.eq(1).click(function(){
    // console.log(1);
    mc.eq(1).css("display","block");
    mc.eq(0).css("display","none");
})
})