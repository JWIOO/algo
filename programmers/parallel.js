
function solution(dots) {
    const [dot1, dot2, dot3, dot4] = dots;
  
    //네 점 사이의 기울기 계산
    const slope = (dot1, dot2) => (dot1[1] - dot2[1]) / (dot1[0] - dot2[0]);
  
    const slope12 = slope(dot1, dot2);
    const slope13 = slope(dot1, dot3);
    const slope14 = slope(dot1, dot4);
    const slope23 = slope(dot2, dot3);
    const slope24 = slope(dot2, dot4);
    const slope34 = slope(dot3, dot4);
    
  
    //기울기 비교해서 평행하면 1, 아니면 0출력
    if (slope12 === slope34 || slope13 === slope24 || slope14 === slope23) {
      return 1;
    } else {
      return 0;
    }
  }