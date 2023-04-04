let study = ['html','css','js','sass','jq','git','photoshop','illustrator']
let device = ['desktop','tablet','mobile','tv']
let weather = ['맑음','비','눈','흐림','태풍']
let num = 0
console.log(study,device,weather)
//-------------------------배열속성 및 메서드()
console.log(Array.isArray(study)) //true
console.log(Array.isArray(num)) // false
console.log(Array.isArray(weather)) //true
//-----------------------------pop
// console.log(study.pop()) // illustrator 가 반환된다
// console.log(study)
// console.log(study.pop())
// console.log(study)
//-----------------------------shift
console.log(study.shift()) //html 제거
console.log(study)
study.unshift('html5') // html5 추가
console.log(study)
study.pop() // illustrator 제거
console.log(study)
study.push('github')
console.log(study)
console.log('------------------------')
//study.concat(device)
console.log(study.concat(device))
console.log(device.concat(study))
console.log('------------------------')
device.sort()
console.log(device)
console.log('------------------------')
//let weather = ['맑음','비','눈','흐림','태풍']
console.log(weather.slice(0,2))  // 맑음,비
console.log(weather.slice(1,3))  // 비 , 눈
console.log(weather.slice(0,-1)) // 맑음,비,눈,흐림
console.log(weather.slice(2)) // 눈,흐림,태풍
console.log(weather.slice(-1))
console.log('------------------------')
//let weather = ['맑음','비','눈','흐림','태풍']
// weather.splice(0,2)
weather.splice(0,1,'sunny')
console.log(weather)
console.log('------------------------')

let yoli = ['월','화','수','목','금','토','일']
console.log(yoli)
yoli.pop()
yoli.push('일요일')
console.log(yoli)
console.log(yoli.join('요일/ '))