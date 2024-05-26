function solution(array, commands) {
    //배열을 계속 돌면서 새로운 그릇에 담기 위해 map 사용
    const results = commands.map(function (index) {
      //command 배열의 i, j, k 값을 인덱스로 직접 추출
      const i = index[0];
      const j = index[1];
      const k = index[2];
  
      //array에서 i번째부터 j번째까지(직전까지) 자른 배열 생성
      const eachArray = array.slice(i - 1, j);
  
      //자른 배열 정렬
      const sortedEachArray = eachArray.sort((a, b) => a - b);
  
      //정렬된 배열에서 k번째 숫자 반환
      return sortedEachArray[k - 1];
    });
  
    // 결과 배열 반환
    return results;
  }
  