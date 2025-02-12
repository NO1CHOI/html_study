// ------------------------변수
//1. KR
const kr_lnb = document.querySelector('header .right li:first-child >a')
const kr_lnb_open = document.querySelector('header .lang')
console.log(kr_lnb, kr_lnb_open)
// 2. 전체메뉴+닫기
const all_nav = document.querySelector('header .right>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')
console.log(all_nav,all_nav_open,all_nav_close)
//3. ACC gnb + sub
const nav_acc = document.querySelectorAll('nav>ul>li>a')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
console.log(nav_acc,nav_acc_sub)
// --------------------------------- event
// 이벤트 전 모두 숨기기
// 객체.속성.속성 = 값
// 객체.style.display = 'none'
kr_lnb_open.style.display = 'none'
all_nav_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'
//2. 햄버거 메뉴를 클릭했을 때, 전체메뉴 내용이 뜰 수 있게 
all_nav.addEventListener('click',function(){
    // console.log(this)
    all_nav_open.style.display = 'block'
})
//3. 전체메뉴 내용이 뜬 상태에서 , 닫기버튼 누르면 닫히게..
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display = 'none'
})
//6. 마우스 올렸을때, 서브 메뉴 나올 수 있게 mouseover, mouseout
nav_acc[12].addEventListener('mouseover',function(){
    // console.log(this)
    nav_acc_sub[0].style.display = 'block'
})
nav_acc[12].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display = 'none'
})
//7. 5-6 통일 mouseove, mouseout로 lang 나올수 있게 
let kr_lnb_lang = true
kr_lnb.addEventListener('click',function(){
    if(kr_lnb_lang){
        kr_lnb_open.style.display = 'block'
    }else{
        kr_lnb_open.style.display = 'none'
    } kr_lnb_lang = !kr_lnb_lang
})

/* kr_lnb.addEventListener('mouseover',function(){
    kr_lnb_open.style.display = 'block'
})
kr_lnb.addEventListener('mouseout',function(){
    kr_lnb_open.style.display = 'none'
}) */
// 화살표를 눌렀을 때, 팝업  내용이 보이게 
// ---------변수
const right_popup = document.querySelector('#right_popup')
const popup_btn = document.querySelector('#popup_btn a:first-child')
console.log(right_popup, popup_btn)
// 1. right 500 숨기기
right_popup.style.transform = 'translateX(500px)'
// 2. popup_btn 클릭 -> right 보이기
let popup_btn_boolean = true
popup_btn.addEventListener('click',function(){
    right_popup.style.transition = 'all 0.5s'
    // right_popup.style.transform = 'translateX(0)'
    if(popup_btn_boolean){
        right_popup.style.transform = 'translateX(0)'
    }else{
        right_popup.style.transform = 'translateX(500px)'
    }popup_btn_boolean=!popup_btn_boolean
})