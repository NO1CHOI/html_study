//배열,객체
//배열: 2개 이상의 값 저장소
//객체: 2개 이상의 속성:값 저장소
//→ 두개의 차이점은 값에 대한 속성의 유무
//객체는 값에 의미있는 속성명이 함께 지정되기 때문에 의미있는 지정으로 대상을 쉽게 구분 가능하다.


//배열
let num = new Array(5,4,3)
console.log(num)
num[4] = 1
console.log(num)
//vs
let num2 = [1,2,3,4,5,6,7,8,9]
console.log(num2)
num2[20] = 'last'
console.log(num2)

//---------------------------------------------------
console.log('----------------객체')

let study = {
    subject:['html','css','js','sass','jq','git','photoshop','illustrator'],
    name:'최현아',
    age:20,
    area:'인천',
    goals:'풀스텍',
    birthday:'1995-05-30'
}
//html, css, js, sass , jq ,git , photoshop,illustrator
console.log(study)
console.log(study.name)
console.log(study.birthday)
console.log(study.goals,study.age)
//내일 최현아는 21살이 됩니다! 생일축하해주세요.
console.log(`내일 ${study.name}는 ${++study.age}이 됩니다! 생일축하해주세요.`)
//최현아의 시험점수는 html+css 100점,js 90점 입니다.
console.log(`${study.name}의 시험점수는 ${study.subject[0]}+${study.subject[1]}의 값은 100점. ${study.subject[2]}의 값은 90점입니다.`)






























