function solution(a, b) {
    let tempB = b;
  
    //분모b를 2로 나누어질 수 있을 때까지 나누기
    while (tempB % 2 === 0) {
      tempB /= 2;
    }
  
    //분모b를 5로 나누어질 수 있을 때까지 나누기
    while (tempB % 5 === 0) {
      tempB /= 5;
    }
  
    //분자a가 나누어 떨어지면 유한 소수(1) 출력, 아니면 무한 소수(2) 출력
    if (a % tempB === 0) {
      return 1; // 유한 소수
    } else {
      return 2; // 무한 소수
    }
  }