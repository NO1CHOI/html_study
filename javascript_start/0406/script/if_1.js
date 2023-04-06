console.log('논리데이터 연습-------------------------------------')
console.log(true)
console.log(false)
console.log(true+2) //3
console.log(false+10) //10
console.log(typeof true) //boolean 논리데이터
console.log(typeof false)
let bo =true+10
console.log(typeof bo)//number
console.log(true+null) // 1 
console.log(false+null) // 0

console.log('비교 연산자----------------------------')
/* let a = 10
let b = 20
let c = '20'
let d = 0

console.log(a,b,c)
console.log(a==b)
console.log(b==c)
console.log(b===c)
console.log(a!=b)
console.log(b!=c)
console.log(b!==c)
console.log(a>b)
console.log(a<=b)
console.log(!d) // ! 값을 반전시키기. 
console.log(!b)
 */
console.log('조건식----------')
/*
    if(날씨 == '비'){우산챙기기}
    if(날씨 != '맑음'){우산챙기기}
    if(점수 >= 60){자격증합격}
    if(점수 < 60){재시험}
*/

/* let weather = window.prompt('오늘 날씨 어때?')
if(weather == '비'){
    window.alert('우산챙기기')
}
 */

let a = true
let b = false
let c = 10
let d = 20
if(a==true){console.log('a는 참이다.')} // O 
if(c>10){console.log('C는 10을 초과한다.')} // X
if(d<c){console.log('c는 d보다 크다')} // X
if(d<=20){console.log('d는 20이하다.')} // O
if(b!=true){console.log('b는 false 이다.')} // O

//1.사용자 아이디
let userId ='admin'
if(userId == 'admin'){
    window.alert(`${userId}. 어서오세요.`)
}


