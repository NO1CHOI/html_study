//날씨 맑음
//강수 20%
//바람 3.4m/x
//습도 15%

// const weather = '맑음'
// const rain = '20%'
// const wind = '3.4m/s'
// const wet = '15%'

const weather = {
    day:'맑음',
    rain:'20%',
    wind:'3.4m/s',
    wet:'15%'
}

const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')

// const btn = document.querySelector('.btn')

//-----콘솔 확인-----------------
console.log(weather)
console.log(weather.day)
console.log(btn[1])

//---------------------------------

btn[0].addEventListener('click',function(){
    // console.log(this)
    result.innerHTML = weather.day  
})
btn[1].addEventListener('click',function(){
    result.innerHTML = weather.rain  
})
btn[2].addEventListener('click',function(){
    result.innerHTML = weather.wind
})
btn[3].addEventListener('click',function(){
    result.innerHTML = weather.wet  
})