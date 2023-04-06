//1.사용자 아이디
// let userId ='admin'
// if(userId == 'admin'){
//     window.alert(`${userId}. 어서오세요.`)
// }

//2.사용자 숫자 입력 -> 짝수면 -> 당신이 좋아하는 숫자
let userNum = 12
if(userNum%2 == 0){
    console.log('당신이 좋아하는 숫자는 짝수입니다.')
}

//3.나이입력 -> 10살 이상이면 탑승가능 놀이기구
let userAge = 56
if(userAge >= 10){
    console.log('이 놀이기구는 10살 이상만 탑승 가능입니다.')
}

//4. 24시간 기준 현재 시간 입력 -> 12시 이후면 오후 ?시 입니다.
let time = 15
if (time <= 24){
    console.log(`지금 시간은 ${time} 시 입니다.`)
}

//-----------------
let print = window.confirm('인쇄할까요?')
console.log(print) //확인을 누르면 true 가 나오고 취소를 누르면 falsd 가 낭ㄴ다
if(print == true){
    window.print()
}