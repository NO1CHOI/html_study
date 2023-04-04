function fun1(a){//1.매개변수 a 생성
    console.log(a)//3.값이 대입된 매개변수를 전달 후 출력
}

fun1(10)//2. a 매개변수에 10 값 대입

console.log('---------------------------')
function fun2(a,b){
    //두 자리 더하기 계산기
    console.log(a+b)
}

fun2(10,20)
console.log('---------------------------')
//콜라 2개 출력
//사이다 1개 출력
//물 10잔 출력
function japangi(drink,num){
    console.log(`${drink} ${num}잔`)
}
japangi('콜라',3)
japangi('사이다',4)
japangi('물',10)
console.log('---------------------------')
const result = document.querySelector('#result')
function dan99(num){
    console.log(`구구단을 말해보자~ ${num*2}<br>`)
    result.innerHTML += (`${num}X1 = ${num}<br>`)
    result.innerHTML += (` ${num}X2 = ${num*2}<br>`)
    result.innerHTML += (` ${num}X3 = ${num*3}<br>`)
    result.innerHTML += (` ${num}X4 = ${num*4}<br>`)
    result.innerHTML += (` ${num}X5 = ${num*5}<br>`)
    result.innerHTML += (` ${num}X6 = ${num*6}<br>`)
    result.innerHTML += (` ${num}X7 = ${num*7}<br>`)
    result.innerHTML += (` ${num}X8 = ${num*8}<br>`)
    result.innerHTML += (` ${num}X9 = ${num*9}<br>`)
}

dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)

console.log('---------------------------')

const cat = {
    name:'쿠키',
    birthday:'12.25',
    birth:function(){
        return `${cat.name}야~ ${cat.birthday}일 생일 축하해~!`
    }
}

console.log(cat)
console.log(cat.birth())
