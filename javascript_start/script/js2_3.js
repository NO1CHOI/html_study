const money_in = document.querySelector('#result1')
const plus = document.querySelector('#result2')
const total = document.querySelector('#result')
const btn = document.querySelector('#answer_btn')

console.log(money_in, plus, total,btn)

btn.addEventListener('click', function(){
    //1. 버튼 클릭시 prompt 입금액 입력받기
    let num = Number(window.prompt('입금액을 입력하세요.'))
    //2. 1번값 입금액(money1) 출력하기
    money_in.value = num.toLocaleString('ko-kr')
    //3. 이자(money2) 100원 출력하기
    plus.value = 100
    //4. 입금액 + 이자 데이터 확인하기 (number 인지)
    console.log(typeof num)
    //5. 확인한 제이터 더해서 최종 변수 저장하기, 숫자+숫자=숫자
    let result = num + 100
    //6. 6번값 total변수에 3자리 숫자 붙여서 출력하기.
    total.value = result.toLocaleString('ko-kr')


    //내가한것
    // let next = window.prompt('입금액을 적으시오.')
    // money_in.value = next
    // let money_1 = Number(money_in.value)
    // let plus_1 = 100
    // plus.value = plus_1
    // let total_1= money_1+plus_1
    // console.log(total_1)
    // total.value = total_1.toLocaleString('ko-kr')
})
