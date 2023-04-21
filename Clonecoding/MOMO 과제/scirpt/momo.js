//탭 제목 마우스 올리는 이벤트 생성
//마우스 올린 대상에 active 클래스 적용
//그 외 나머지 초기화 active 클래스 제거 

const tab_title = document.querySelectorAll('#tab_title a')
const active =document.querySelector('.active') 

console.log(tab_title, active)

for(let i of tab_title){
    i.addEventListener('mouseover',()=>{
        for(let j of tab_title){j.classList.remove('active')}
        i.classList.add('active')
    })
}

//1. txt 모두 숨기기 opacity = 0
//2. tab_c 에 올렸을때
//3. txt 올린 대상만 서서히 보이기 opacity = 1

const tab_c_a =document.querySelectorAll('.tab_c a')
console.log(tab_c_a)
console.log(tab_c_a[0].children[0])

for(let i of tab_c_a){
    console.log(i,i.children[0])
    i.children[0].style.opacity = 0 // 1
    i.children[0].style.transition ='opacity 0.5s'
    for(let j of tab_c_a){
    j.addEventListener('mouseover',()=>{
        j.children[0].style.opacity = 1
        j.addEventListener('mouseout',()=>{
            j.children[0].style.opacity = 0
        })
    })
    }
}

//각 탬 제목에 해당하는 내용만 출력하기
//초기값 : 모든 내용 숨기기, 1번 내용 보이기
//탭 제목에 마우스 올렸을때 관련 내용 보이기

//변수값
const tab_c = document.querySelectorAll('.tab_c')

//초기값 : 모든 내용 숨기기, 1번 내용 보이기
for(let i of tab_c){i.style.display='none'}
tab_c[0].style.display = 'flex'

tab_title.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        for(let i of tab_c){i.style.display='none'}
        tab_c[i].style.display = 'flex'
    })
})
