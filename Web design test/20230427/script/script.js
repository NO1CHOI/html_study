//jquery() ==$()
$('.sub').hide () //display:none 과같음
$('#popup').hide()
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

//jq 클래스 옮기기
