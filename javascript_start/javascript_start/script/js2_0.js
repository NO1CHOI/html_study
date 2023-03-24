let result1 = document.querySelector('#result1')
let result2 = document.querySelector('#result2')
let btn = document.querySelector('#answer_btn')


//1.answer_btn 클릭했을때
//2.prompt 값 입력 (인증번호)
//3.2번값의 데이터 타입이 result1 출력
//4/2번값의 데이터 결과가 result2 출력

btn.addEventListener('click',function(){
    btn = window.prompt('입력하세요.')
    result2.value = btn
    result1.value = typeof btn
})

