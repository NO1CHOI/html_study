//1.아이디를 안적고 로그인 누를시 
//'아이디를 입력하세요 라고 나오게 하기' #error_result
const user_id = document.querySelector('#user_id')
const user_pw = document.querySelector('#user_pw')
const error_result = document.querySelector('#error_result')
const login_btn = document.querySelector('#login_btn')

login_btn.addEventListener('click',()=>{
    if(user_id.value == ''){
        error_result.innerHTML = '아이디를 입력하세요.'
    }
})