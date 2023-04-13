//주문영역 상품 이미지 view (작은 이미지 클릭 시 큰 이미지로 변경)
const big = document.querySelector('#order .big img')
const thum = document.querySelectorAll('#order .thum a')
console.log(big , thum)

thum.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//href 새로고침 기능 막기
        console.log(target)
        console.log(index)
        big.src = `./images/product_0${index+1}.jpg`
    })
})

//주문영역 상품 옵션 선택
const brand = document.querySelector('#brand')
const galaxy = document.querySelector('#galaxy')
const iphone = document.querySelector('#iphone')
console.log(brand, galaxy, iphone)

iphone.style.display = 'none'//아이폰 숨기기 (초기값)
galaxy.disabled = true // 비활성화 (초기값)

brand.addEventListener('change',()=>{
    if(brand.options[2].selected == true){//아이폰
        brand_dis(iphone,false)
        // iphone.style.display = 'block'
        // galaxy.style.display = 'none'
    }else if(brand.options[1].selected == true){//갤럭시
        brand_dis(galaxy, false)
        // iphone.style.display = 'none'
        // galaxy.style.display = 'block'
        // galaxy.disabled = false
    }else {//필수옵션안내(위 조건 아이폰, 갤럭시가 모두 아닌 경우)
        brand_dis(galaxy,true)
        galaxy.options[0].selected = true
        // galaxy.style.display = 'none'
        // iphone.style.display = 'none'
        // galaxy.style.display = 'block'
        // galaxy.disabled = true
        // galaxy.options[0].selected = true
    }
})

function brand_dis(target, boolean){
    galaxy.style.display = 'none'
    iphone.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean
}
console.log('-----------------------')
//기종 선택 시 주문영역에 기종명 출력하기
const order_model = document.querySelector('.order_product .model')
const galaxy_op = document.querySelectorAll('#galaxy option')
const iphone_op = document.querySelectorAll('#iphone option')

console.log(order_model,galaxy_op,iphone_op)

//갤럭시 기종 출력
galaxy.addEventListener('change',()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_index)
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index])//내가 선택한 객체의 마지막 자식에게 삽입하라는 메소드
})

//아이폰 기종 출력



//수량 변화시 total 변화
const num_input = document.querySelector('#order_num')
const total_price = document.querySelector('.total_price')
let price = 17000
let total

console.log(num_input, total_price,price)


num_input.addEventListener('change',()=>{
    if(num_input.value>0){
        console.log(num_input.value)
        total = price*num_input.value
        console.log(total)
        total_price.innerHTML = total.toLocaleString('ko-kr')
    }else {
        window.alert('최소 주문 수량입니다.')
        num_input.value = 1
    }
})

cancel.addEventListener('click',()=>{
    num_input.value = 1
    total_price.innerHTML = price.toLocaleString('ko-kr')
})