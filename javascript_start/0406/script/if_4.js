let id = 'admin'
let pw = '1234'
if(id == 'admin' || pw=='1234'){
    console.log('관리자 로그인 성공')
}else{
    console.log('로그인 실패')
}

//-------------------------------
//1~20 사이 숫자를 입력받고 해당 숫자가
//10보다 작으면 10이하입니다.
//아니라면 11이상입니다를 출력하세요.
/* 
let num = Number(window.prompt('1~20까지 숫자를 입력하세요.'))
if (num <= 10 && num > 0 ){
    console.log(`${num} 10 미만 입니다.`)
}else {
    console.log(`${num}는 10 이상 입니다.`)
}
 */
//---------------------------------

let a = 10
if(a > 10){
    console.log('a>10')
}else if(a == 10){
    console.log('a == 10')
}else if(a < 9){
    console.log('a<9')
}
console.log('if종료')
console.log('--------------------------')
let number = 1
if(number > 0 && number < 21){//1~20
    if(number <11){
        console.log('10이하')
    }else{
        console.log('10이상')
    }
        console.log('1단게 if 종료위치')
    }else{
    console.log('Error')
}
console.log('if 종료')