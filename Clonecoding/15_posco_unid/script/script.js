//posco
//목표1: 개별서브나오기
//1.모든 서브 숨기기
//2.gnb 자식 li에 마우스를 올리면 자식 sub 보이기 (Node 관계처리)
//3.gnb 자식 li에서 나가면 자식 sub 숨기기


/* 
const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub')
 */
/* 
console.log(gnb, sub,bg)

for(let i of sub){
    // i.style.display = 'none'
    i.style.height = '0'
    i.style.overflow = 'hidden'
    i.style.transition= 'all 0.5s'
    for(let j of gnb){
        j.addEventListener('mouseover',()=>{
            // console.log(this)
            // j.children[1].style.display = 'block'
            i.style.height = '250px'
        j.addEventListener('mouseout',()=>{
            // j.children[1].style.display ='none'
            i.style.height = '0'
        })
        })
    }
}
*/


const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub')
const sub_bg = document.querySelector('.bg')

//1.모든 서브 숨기기
sub_bg.style.height = '0'
sub_bg.style.transition = 'height 0.3s'
for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden'
    i.style.transition = 'height 0.3s'
}

//2.gnb 자식 li에 마우스를 올리면 자식 sub 보이기 (Node 관계처리)
for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        for(let j of sub){j.style.height = '250px'}
        sub_bg.style.height = '300px'
    })
    //3.gnb 자식 li에서 나가면 자식 sub 숨기기
    i.addEventListener('mouseout',()=>{
        for(let j of sub){j.style.height = '0'}
        sub_bg.style.height = '0'
    })
}
