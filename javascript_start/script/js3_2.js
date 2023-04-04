//월-맑음
//화-맑음
//수-비
//목-비
//금-맑음
//토-흐림
//일-눈

let day = ['월','화','수','목','금','토','일']
let weather = ['맑음','비','흐림','눈','태풍']

const result = document.querySelectorAll('.result')
const btn = document.querySelector('#answer_btn')

console.log(result, btn)


btn.addEventListener('click',function(){
    //console.log(this)
    result[0].innerHTML = `${day[0]} ${weather[0]}`
    result[1].innerHTML = `${day[1]} ${weather[1]}`
    result[2].innerHTML = `${day[2]} ${weather[2]}`
    result[3].innerHTML = `${day[3]} ${weather[3]}`
    result[4].innerHTML = `${day[4]} ${weather[4]}`
    result[5].innerHTML = `${day[5]} ${weather[2]}`
    result[6].innerHTML = `${day[6]} ${weather[1]}`
})