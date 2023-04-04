//출금하기 버튼 클릭
//얼마 출금하시겠습니까?
//3자리 간격 콤마 ?00,00원 출력되었습니다.
//남은 잔액은 ????원 남았습니다.
//.toLocaleString('ko-kr') 콤마넣기

const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order, result)
let bank = 10000000000000

atm()
order.addEventListener('click',atm)

function atm() {
    let money = Number(window.prompt('얼마 출금하시겠습니까?'))
    let money_type = money.toLocaleString('ko-kr')
    result.innerHTML = `출금하신 금액은 ${money_type}원 입니다.`
    let bank_total = bank - money
    result.innerHTML += `  잔액은 ${bank_total.toLocaleString('ko-kr')} 입니다.`
    
}