
function solution(num, total) {
var answer = [];

if( num % 2 === 1){
    answer.push(Math.floor(total/num))
}

else{
    for( let i = Math.floor(total/num); i>=Math.floor(total/num/2); i--)
    answer.push(Math.floor(total/num))
    answer.push(Math.floor(total/num)+1)
}

return answer;
}
