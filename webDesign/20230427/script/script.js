//jquery() ==$()
$('.sub').hide () //display:none 과같음
$('#popup').hide()
$('.gallery').hide()

$('nav > ul > li').on('mouseover',()=>{
    $('.sub').stop(true).slideDown() 
})
$('nav > ul > li').on('mouseout',()=>{
    $('.sub').stop(true).slideUp()
})

//공지사항 첫번째를 주르면 팝업이 나오게 하기
$('.container .notice a:first-child').on('click',()=>{
    $('#popup').show()
})

//팝업 닫기 버튼을 눌렀을때 팝업 없애기
$('#popup a').on('click',()=>{
    $('#popup').hide()
})

//공지사항 제목 클릭 시 공지사항 내용만 보이기
$('.title a:first-child').on('click',()=>{
    $('.notice').show()
    $('.gallery').hide()
    //jq .ver
    //classList.remove()
    $('.tab_wrap .title a').removeClass()
    //classList.add()
    $('.tab_wrap .title a:first-child').addClass('active')
})
//갤러리 제목 클릭 시 갤러리 내용만 보이기
$('.title a:last-child').on('click',()=>{
    $('.notice').hide()
    $('.gallery').show()
        //classList.remove()
        $('.tab_wrap .title a').removeClass()
        //classList.add()
        $('.tab_wrap .title a:last-child').addClass('active')
})

//slide
//위 -> 아래 또는 아래-> 위 3초 간격으로 마지막 이미지에서 첫번쨰 이미지로
// 자동으로 시작해야함!

//위아래로 움직이게하기
// let count = 0
// $('#slide_container').css('transition','all 0.3s')
// //setInterval() //매 초마다 반복 이란 명령어
// setInterval(()=>{
//     count++ //1부터 시작해야하니 증감연산법을써준다
//     if(count>2){count=0}
//     console.log(count) // 12012012012.....
//     //$(대상).css('속성','값')
//     $('#slide_container').css('transform',`translateY(-${300*count}px)`)
// },3000) // 3초동안 반복하라

//좌우로 움직이게 하기
let count = 0
$('#slide_container').css('transition','all 0.3s')

setInterval(()=>{
    count++
    if(count>2){count=0}
    console.log(count)
    $('#slide_container').css('transform',`translateX(-${1200*count}px)`)
},1000)