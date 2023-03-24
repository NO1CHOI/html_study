// const h1 = document.getElementsByTagName('h1')
// const sub = document.getElementsByClassName('sub_title')
// const h3 = document.getElementsByTagName('h3')
// const p = document.getElementsByTagName('p')
// const main = document.getElementById('main')
// const btn = document.getElementById('btn')
// const a = document.getElementById('link')

// console.log(h1, sub, h3, p, main, btn, a)

//var VS let const
//document.getElementById, sByClassName, sByTagName = ES5 이전 버전 DOM
//querySelector ES6 DOM
const box_h4 = document.querySelector('.box > h4')
const h1_tag = document.querySelector('h1')
const h1_after = document.querySelector('h1::after')
console.log(h1_after, box_h4)
//객체.style.css속성 = '속성값'
// h1_after.style.content = 'ABC'
h1_tag.style.backgroundColor = '#ff0'


const h2_cls = document.querySelectorAll('.sub_title')
const h3_tag = document.querySelector('h3')
const p_tag = document.querySelector('p')
const main = document.querySelector('#main')
const btn = document.querySelector('#btn')
const link = document.querySelector('#link')

//변수값 확인
console.log(h1_tag) 
console.log(h2_cls[1])
console.log(h3_tag)
console.log(p_tag)
console.log(main)
console.log(btn)
console.log(link)

