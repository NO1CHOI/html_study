let money = 10000
let snack = 2000
let ice = 1000
let total = money-snack-ice
let total_replace = total.toLocaleString('ko-kr')

const answer_btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result')

console.log(money,snack,ice,total)
console.log(answer_btn, result)

answer_btn.addEventListener('click',function(){
    result.value = `남은돈은 ${total_replace}입니다.`
})