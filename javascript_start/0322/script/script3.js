//증강연산자 연습하기
let num1 = 10;
let num2 = 20;
let result;
num1-- // 9
console.log(num1)
num1++ // 10
console.log(num1) 
result=num2++ // 20
console.log(result)
// result=++num2 //22
// console.log(result)
result += ++num2 // result = result+ ++num2
console.log(result) // 42
console.log('---------------------------')
//------------------------------------------------
// let age = window.prompt('당신의 나이는?')
// console.log('올해 당신의 나이는'+age+'살입니다.')
// console.log('내년 당신의 나이는'+(++age)+'살입니다.')
// //템플릿 문자열
// console.log(`내년 당신의 나이는 ${++1age}살입니다.`)
//구구단
let dan99 = window.prompt('구구단 몇단이 궁금해요?')
// 2x1=2
console.log(dan99*2)
console.log(`${dan99}x2=${dan99*2}`)
console.log(`${dan99}x3=${dan99*3}`)
console.log(`${dan99}x4=${dan99*4}`)
console.log(`${dan99}x5=${dan99*5}`)
console.log(`${dan99}x6=${dan99*6}`)
console.log(`${dan99}x7=${dan99*7}`)