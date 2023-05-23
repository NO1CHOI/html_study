//네이게이션
$('.sub').hide() //서브 숨기기
$('nav > ul > li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown();
})
$('nav > ul > li').on('mouseout',function(){
    $('.sub').stop().slideUp();
})

//공지,갤러리
$('.gallery').hide()
$('.title a:nth-child(1)').on('click',function(){
    $('.notice').show()
    $('.gallery').hide()
})
$('.title a:nth-child(2)').on('click',function(){
    $('.notice').hide()
    $('.gallery').show()
})


//팝업

$('#popup').hide()
$('.notice a:first-child').on('click',function(){
    $('#popup').show()
})
$('#popup a').on('click',function(){
    $('#popup').hide()
})


//슬라이드

$('.slide2').hide()
$('.slide3').hide()

let num = 0
setInterval(function(){
    num++
    if(num>2){num=0}
    console.log(num)
    $('.slide').fadeOut()
    $('.slide').eq(num).fadeIn()
},1000)