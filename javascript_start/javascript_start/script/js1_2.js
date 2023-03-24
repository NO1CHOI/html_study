let money1 = 10000
let money2 = 1000
let total = money1+money2
//객체 .매서드()
//객체.toLocalString('ko-kr)
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result')



console.log(money1,money2,total)
console.log(answer_btn,result)
console.log(total_replace)

answer_btn.addEventListener('click',function(){
    // console.log(this)
    result.value = `지갑엔 총 ${total_replace}원이 들어있습니다.`
})
