var box1 = 10
let box2 = 20 //let 변하는 변수
const box3 = 30 // const 변하지않는 상수

console.log(`box1 변수의 값 = ${box1}`)
console.log(`box2 변수의 값 = ${box2}`)
console.log(`box3 상수의 값 = ${box3}`)
//box1 = box1+1
box1 +=1 //box1 = box1 +1
box1 +=10  // box1 = box1 + 10 . 복합대입자
console.log(`box1 변수의 값 = ${box1}`) //템플릿문자열
box2 = box2%2 // box2 = 20 이다. 산술연산자
console.log(`box2 변수의 값 =${box2}`)
//box2 = ++box1 //전위연산자
box2 = box1++ //후위연산자
console.log(`box2 변수 값= ${box2}`)
console.log(`box2=${box2}, box1=${box1}`)
box1 = box3
console.log(`box1=${box1}`,`box3=${box3}`)
console.log(box1.length)
//---------------------------------------------------

let array1 = ['blue','green','yellow']
let array2 = new Array('black', 'white', 'gray')
let array3 = new Array(10)

console.log(array1)
console.log(array1[0],array1[1],array1[2])
console.log(array1[0],array1[2],array1[1])// 가져오는 순서가 달라도 괜찮음

console.log(array2)

console.log(array3)
array3[9] = 'red'
console.log(array3)

//------------------------------------------------------
let array4 = [10,20,30,40,50]
console.log(array4)
console.log(array4[0]+1) // 101 vs 11 머가 나올가? - > 11
console.log(array4[1]%2) // 0
console.log(++array4[4])// 51
console.log(array4[3]++)// 40
total = array4[3]++
console.log(`total=${total}, array4[3]=${array4[3]}`) // total= 41,array[3]=42
