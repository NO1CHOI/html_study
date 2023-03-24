const btn1 = document.getElementById('btn1')
const btn = document.getElementByClassName('btn1')
console.log(btn1, btn, btn[0], btn[1], btn[2],btn[3])
console.log(btn1.innerHTML)

//내용변경 == 대입한다
btn[0].innerHTML = 'home'
btn[1].innerHTML = 'mail'
btn1.innerHTML = '확인완료'