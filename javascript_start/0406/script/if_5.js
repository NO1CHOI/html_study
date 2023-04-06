//로그인 정보 admin // 1234
let userId = 'admin'
let userPw = '1234'
//ver.1
/* if (userId == 'admin'){
    if(userPw !=1234){
        console.log('비밀번호 오류')
    }else{
        console.log('로그인 성공')
    }
}else{
    console.log('아이디오류')
} */

//ver.2
/* if(userId =='admin' && userPw == '1234'){
    console.log('! 로그인 성공! ')
}else {
    //아이디오류 , 비밀번호 오류
    if(userId != 'admin'){
        console.log('아이디 오류')
    }else{
        console.log('비밀번호 오류')
    }
} */
//----------------------------------------
// let value ='왼쪽'
// if (value =='오른쪽'){
//     console.log('오른쪽 버튼을 눌렀군요!')
// }else if(value=='왼쪽'){
//     console.log('왼쪽 버튼을 눌렀군요!')
// }else if(value=='가운데'){
//     console.log('가운데 버튼을 눌렀군요')
// }else {
//     console.log('확인할 수 없습니다.')
// }

let value ='오른쪽'
if (value =='왼쪽' || value =='가운데' || value =='오른쪽'){
    console.log(value+'버튼을 눌렀군요' /* `${value} 버튼을 누르셨군요!` */)
}else {
    console.log('확인할수없습니다.')
}


//논리연산자 정리하기
//true || true == true
//true && true == true

//true || false == true
//true && false == false

//false || false ==false
//false && false ==