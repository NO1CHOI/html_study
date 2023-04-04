//----------------DOM 변수
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const result = document.querySelector('#result')

console.log(btn1,btn2,btn3,result)

let qa = window.confirm('Let과 Const의 차이점을 서술하시오.')
// let qa = window.prompt('Let과 Const의 차이점을 서술하시오.')
btn1.addEventListener('click',function(){
    //console.log(this) //확인하는 console이다 this 를 넣어 무엇을 클릭했는지 확인하기
    result.innerHTML = `let 은 변수 <br> const 는 상수이다.` //innerHTML 을 쓸때 안에 다른 태그도 쓸수있다.
})
btn2.addEventListener('click',function(){
    qa = window.confirm(`변수와 배열의 차이점을 서술하시오.`)
    result.innerHTML = ' 변수는 한번에 한가지 값만 저장할 수 있습니다.<br>배열은 2개 이상의 데이터값을 가질 경우 사용합니다'
})
btn3.addEventListener('click', function(){
    qa = window.confirm(`증감연산자의 전위연산과 후위연산의 차이점을 서술하시오.`)
    result.innerHTML = '증감연산자는 데이터의 앞/뒤 작성하는 위치에 따라 결과를 다르게 낼 수 있습니다.<br> 전위연산은 값을 먼저 계산하고 값을 내는것.<br>후위연산은 먼저 값을 낸다음 계산하는것이다.'
})
