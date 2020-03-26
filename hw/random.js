//10 이상 20 이하의 정수를 임의로 30개 출력하는 코드를 구현하시오.

for(let i = 0; i < 30; i++){
    let random_value = Math.floor(Math.random()*20+10);
    console.log(random_value);
}