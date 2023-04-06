const user_point = document.querySelector('#user_point')
const use_point = document.querySelector('#use_point')
const point_reset = document.querySelector('#point_reset')
const point_all_btn = document.querySelector('#point_all_btn')

let point = 1000 //보유 포인트 값
console.log(user_point,use_point,point_reset,point_all_btn)

//1.보유포인트가 미리 적립
user_point.value = point
point_reset.style.display ='none'
//2.전액 사용 클릭 시 보유 -> 사용 값 전환 (전환 후 보유0)
point_all_btn.addEventListener('click',()=>{
    // console.log(this)
    use_point.value = user_point.value
    user_point.value = 0
    reset_display()
})
//3.X 클릭 시 사용 -> 보유 값 전환 (전환 후 사용0)
point_reset.addEventListener('click',()=>{
    user_point.value = use_point.value
    use_point.value = 0
    reset_display()
})
//4.사용값 1 이상이면 x 가 보이고 아니면 x 숨기기
function reset_display(){
    if(use_point.value>=1){//사용 값이 1 이상이면
        point_reset.style.display = 'inline-block'
    }else{
        point_reset.style.display = 'none'
    }
}


