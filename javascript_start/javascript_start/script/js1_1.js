//answer_btn
//answer_input
//day1
//day2
//day3
//total

let day1 = 10
let day2 = 5
let day3 = 8
let total = day1+day2+day3
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')

console.log(day1, day2, day3)
console.log(total)
console.log(answer_btn)
console.log(answer_input) 

//속성을 읽는다
//객체.속성.

//속성을 변경한다.
//객체.속성 = 변경값
//leghth, innerHTML(일반적인 태그), style,input일땐 value = 속성
// answer_input.value = `${total} 장`

//요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족시 실행 결과
    // console.log(this)
    answer_input.value = `정답은 ${total}장 입니다.`
})