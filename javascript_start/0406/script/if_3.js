// let num = window.prompt('숫자입력')
// if (num%2 == 0){
//     console.log('짝수')
// }else{
//     console.log('홀수')
// }

//admin : 관리자 아이디
//아이디 입력받기
//admin 일 경우 - > 관리자님 어서오세요
//아닐경우 -> 관리자 페이지 접근불가

let userId = window.prompt('아이디를 입력하세요.')
if(userId == 'admin'){
    window.alert('관리자님 어서오세요.^3^ 뿌이뿌이뿌~')
}else{
    window.alert('관 리 자 외 접 근 불 가')
}