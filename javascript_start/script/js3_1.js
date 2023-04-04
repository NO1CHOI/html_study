//------------내가 한것-------------
// var result = new Array['id','pw']
// const btn = document.querySelector('#answer_btn')

// console.log(result)

// answer_btn.addEventListener('click',function(){
//     answer_btn = window.prompt('ID 를 입력하세요')
//     result[0] = 
// })

//---풀이-----------------------------------------
let userID = ['a','b','c','d','e','f']
let userPW = ['1','2','3','4','5','6']
//DOM 제어변수
const id_pw_result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')

console.log(id_pw_result, answer_btn)
console.log(id_pw_result[0],id_pw_result[1])

answer_btn.addEventListener('click',function(){
    id_pw_result[0].innerHTML = userID[4]
    id_pw_result[1].innerHTML = userPW[4]
})