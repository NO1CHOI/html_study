//웹디자인 기능사 js 부분 요약
//1.nav - sub
//2.공지사항 ,갤러리 탭 이동
//3.공지사항 첫 글 클릭 -팝업 
//4,팝업 닫기 기능
//5,슬라이드 애니메이션 (제자리 , 좌-우 , 상-하) -> 슬라이드 애니메이션을 넣지 못했을경우 실격

//1,nav - sub (전체나오기 , 개별나오기)
//메인메뉴에 마우스를 올리면 부드럽게 나타나면서 서브메뉴가 보이도록 한다.
//1-1) 우선 서브를 숨긴다.
$('.sub').hide()
//1-2) 메인메뉴를 마우스를 올리면 (mouse over)
$('nav > ul > li').on('mouseover',function(){
    //서브 메뉴가 부드럽게 보이게 한다. 
    //$('.sub').stop().slideDown() //sub 한번에 내리기
    $(this).find('.sub').stop().slideDown() //개별 내리기
})

//1-3)메인메뉴에서 마우스가 벗어나면 서브가 사라진다.
$('nav > ul > li').on('mouseout',function(){
    //$('.sub').stop().slideUp() //sub 한번에 올리기
    $(this).find('.sub').stop().slideUp() //개별로 올리기
})

//2.공지사항 ,갤러리 탭 이동
//각 탭을 클릭시 해당 탭에 대한 내용이 보여야한다.
//해당되지 않는 탭의 내용을 숨겨야 한다.
$('.c1 .title h2:first-child').on('click',function(){
    //$('.c1 .notice').show()
    $('.c1 .notice').css('display','block')//or display:flex  css에서 적용한 스타일에 따라 다르다
    $('.c1 .gallery').hide()

    //active 클래스 활성화
    $('.c1 .title h2').removeClass()
    $(this).addClass('active')
})
$('.c1 .title h2:last-child').on('click',function(){
    $('.c1 .notice').hide()
    //$('.c1 .gallery').show()
    $('.c1 .gallery').css('display','flex') //or display:block 
    //active 활성화
    $('.c1 .title h2').removeClass()
    $(this).addClass('active')
})

//3.공지사항 첫 글 클릭 -팝업
//공지사항 첫번째 콘텐츠 클릭할 경우 레이어 팝업 나타난다.

//3-1) 우선 팝업 숨기기
$('#popup').hide()
//3-2)공지사항 첫번째 콘텐츠를 클릭시 레이어 팝업이 나타난다.
$('.c1 .notice a:first-child').on('click',function(){
    $('#popup').show()
})

//3-3)레이어 ㅍ팝업내 닫기 버튼을 클릭하면 팝업이 닫혀야한다.
$('#popup .close').on('click',function(){
    $('#popup').hide()
})

//4,슬라이드 애니메이션 (제자리 , 좌-우 , 상-하)
//4-1)이미지만 바뀌면 안돼고 이미지가 좌 우 또는 우에서 좌로 이동하면서 전환되어야 한다.(translateX)
//4-2)슬라이드가 매 3초 이내로 하나의 이미지에서 다른 이미지로 변환되어야 한다.(setInterval-duration)
//4-3)웹사이트르 열었을때 자동으로 시작되어 반복적으로 슬라이드 되어야 하는것.

//0px 1200px 2400px

let num = 0
setInterval(function(){//반복적으로
    num++
    if(num>2){num=0}
    console.log(num)
    //이미지가 좌에서 우 또는 우에서 좌.
    $('#slide_container').css('transform',`translateX(-${1200*num}px)`)
},1000)//매 3초 이내로