
function solution(a, b, c, d) {
    var answer = 0;
    var dice = [a, b, c, d];

    for( let i = 0 ; i<4 ; i++){
        for( let j = 0 ; j<4 ; j++){
            for( let k = 0 ; k<4 ; k++){
                for( let l = 0 ; l<4 ; l++){

                     // 모든 주사위가 같을 경우
                    if( dice[0] === dice[3]){
                        answer = dice[0] * 1111
                    }
                    
                    // 3개의 주사위가 같을 경우
                    else if (dice[0] === dice[1] && dice[1] === dice[2] && dice[2] !== dice[3]){
                        answer = (10 * dice[0] + dice[3])**2

                    }

                    // 2쌍의 주사위가 같을 경우
                    else if (dice[0] === dice[1] &&  dice[2] === dice[3] && dice[1] !== dice[2]){
                        answer = ( dice[0] + dice[3])*Math.abs(dice[0] - dice[3])

                    }

                    // 2개의 주사위가 같고, 나머지 2개는 다를 경우
                    else if (dice[0] === dice[1] && dice[1] !== dice[2] && dice[2] !== dice[3]){
                        answer = (dice[2] * dice[3])

                    }

                    // 모든 주사위가 다를 경우
                    else {
                        answer = Math.min(...dice);
                   

                    }

                }
            }
        }
    }
    return answer;
}

   
    