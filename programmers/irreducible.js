```jsx

function solution(a, b) {

    //최대공약수 구하기
let GCD = (a, b) => {
    let gcd = 1;

    for(let i=2; i < Math.min(a, b) + 1; i++){
        if(a % i === 0 && b % i === 0){
            gcd = i;
        }
    }

    return gcd;
};

    //최대공약수를 저장하고, a, b 각각 나누어서 기약분수 만들기
    let realGcd = GCD(a, b);
    let irreducibleA = (a/realGcd);
    let irreducibleB = (b/realGcd);

    //irreducible fraction의 분모의 공약수들(divisor) 구하기
    let divisor = [];

    for(let j=1; j<Math.min(irreducibleA, irreducibleB)+1; j++){
        if(irreducibleA % j === 0 && irreducibleB % j === 0){
            divisor.push(j);
        }
    }

    //divisor에 2 혹은 5만 존재하는지 확인하기
    for(let k=0; k<divisor.length ; k++){
        if( divisor[k] !== 1 && divisor[k] !== 2 && divisor[k] !==  5){
            return 2;
        }
         
        else{ return 1;}
}

}
```