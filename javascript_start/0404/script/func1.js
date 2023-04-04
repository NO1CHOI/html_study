const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order, result)
japangi() //함수호출

order.addEventListener('click',japangi)

//함수 기본 문법
//function 함수명() {실행재사용문법} -> 함수 작성과 호출은 별개이다.
function japangi() {
    let menu = window.prompt('주문하시겠습니까?')
    result.innerHTML = `주문하신 ${menu} 나왔습니다.`
}