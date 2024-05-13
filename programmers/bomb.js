
//안전지역 = 전체안전지역 - 지뢰 - 위험지역
//return safe = board.length * board.length - 지뢰 - 위험지역
//위험지역을 구하는 게 관건
  //1.지뢰 발견하면 1씩 빼주고,
  //2.그 주변 8개(상하좌우대각선)을 이동/확인하여, 각각 막혔는지 아닌지 확인 (전체안전지역보다 작은 범위 내)
  //3.안 막혔으면 1을 빼고, 막혔으면 그냥 0을 빼기
//위험지역도 구하고 나면 안전지역 return 하기

function solution(board) {
var answer = 0;

    for (let i=0 ; i < board.length ; i++){
        for (let j=0 ; j < board[i].length ; j++){

             //1.지뢰 발견하면 1씩 빼주고,
            if( board[i][j] === 1 ){
                answer -= 1;

                //2.그 주변 8개(상하좌우대각선)을 이동/확인하여, 각각 막혔는지 아닌지 확인 (전체안전지역보다 작은 범위 내)
                for( let checking = 0 ; checking < 8 ; checking ++){

                    let checkingX = board[i][j] - x 상하좌우 1씩 만큼 ;
                    let checkingY = board[i][j] - y 상하좌우 1씩 만큼 ;

                    if ( checkingX === 1 && checkingY === 1 ){
                        answer =

                    }

                        //3.안 막혔으면 1을 빼고, 막혔으면 그냥 0을 빼기
                        if( board[checkingX][checkingY] === 1 ){}
                    }

                }

            }
        }
    }

return answer;
}
