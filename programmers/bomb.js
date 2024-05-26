function solution(board) {
    //지뢰가 폭발할 수 있는 영역을 나타내는 2차원 배열 생성(초기화)
    let explosionMap = createExplosionMap(board);
  
    //안전 지대 개수 계산
    let safeZone = countSafeZone(explosionMap);
  
    return safeZone;
  }
  
  //8방향을 탐색하기(상대 좌표) (중앙포함 총 9개)
  const aroundX = [0, -1, -1, -1, 0, 0, 1, 1, 1];
  const aroundY = [0, -1, 0, 1, -1, 1, -1, 0, 1];
  
  //지뢰 폭발을 표시해주는 2차원 배열 생성
  function createExplosionMap(board) {
    //지뢰가 폭발할 수 있는 영역을 나타내는 2차원 배열 생성
    const explosionMap = new Array(board.length)
      .fill(null)
      .map(() => new Array(board[0].length).fill(0));
  
    //보드의 모든 칸을 돌자
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        //지뢰가 있으면, 폭발 영역 표시
        if (board[i][j] === 1) {
          markExplosion(i, j, explosionMap);
        }
      }
    }
    //지뢰 폭발 영역 표시된 2차원 배열 반환
    return explosionMap;
  }
  
  //지뢰 폭발 표시
  function markExplosion(x, y, explosionMap) {
    //주변 탐색하면서 폭발 영역 표시하자
    for (let i = 0; i < 9; i++) {
      const newX = x + aroundX[i];
      const newY = y + aroundY[i];
  
      //새로운 좌표가 유효한지(explsionMap 내에 속하는지) 확인해서 폭발(1) 표시
      if (isValidPosition(newX, newY, explosionMap)) {
        explosionMap[newX][newY] = 1; 
      }
    }
  }
  
  function isValidPosition(x, y, explosionMap) {
    return (
      x >= 0 && x < explosionMap.length && y >= 0 && y < explosionMap[0].length
    );
  }
  
  //안전 지대 개수를 계산
  function countSafeZone(explosionMap) {
    let safeZone = 0;
  
    //2차원 배열 순회
    for (let row of explosionMap) {
      for (let value of row) {
        //안전 지대(0)인 경우 개수를 증가
        if (value === 0) {
          safeZone++;
        }
      }
    }
  
    //안전 지대 개수 반환
    return safeZone;
  }
