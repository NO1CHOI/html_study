const num_input = document.querySelector('#result')
const result_type = document.querySelector('#result1')
const result_val = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')

let number_type = Number(num_input.value)
console.log(number_type)

console.log(num_input, result_type, result_val, answer_btn)
console.log(num_input.value)//실시간input값 추적되지 않으므로 결과값 표시 안됨

answer_btn.addEventListener('click',function(){
    console.log(num_input.value)//버튼 추적 기능 확인
    console.log(typeof num_input.value)//str-> num
    //num_input의 값을 숫자로 변환하는 저장 변수
    let number_type = Number(num_input.value)
    //위 변수가 숫자인지 +1을 통해 숫자+숫자=숫자 인지 결과 확인
    console.log(number_type+1)
    //위 변수가 number 데이터 타입인지 typeof 연산자 확인
    console.log(typeof number_type)
    //모든 결과 console 확인 후 각 변수에 최종 데이터 결과 대입
    result_val.value = num_input.value
    result_type.value = typeof number_type
})