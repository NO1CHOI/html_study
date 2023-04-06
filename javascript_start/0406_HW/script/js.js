//나의 평균값을 정하고 아래 요구사항에 맞게 출력해주세요
/* 100~90이면 A학점, 
89~80이면 B학점, 
79~70이면 C학점, 
69~60이면 D학점, 
59 이하이면 F학점이 나오게해주세요. */

let exam = 55
if( exam == 100 || exam>=90 ){
    console.log(`${exam} 점은 A 입니다.`)
}else if(exam < 89 || exam > 80){
    console.log(`${exam} 점은 B 입니다.`)
}else if(exam < 79 || exam > 70){
    console.log(`${exam} 점은 C 입니다.`)
}else if(exam < 69 || exam > 60){
    console.log(`${exam} 점은 D 입니다.`)
}else{
    console.log(`${exam} 점은 F 입니다.`)
}