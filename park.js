function solution(park, routes) {
    //E일 때, W +1
    //W일 때, W -1
    //S일 때, H +1
    //N일 때, H -1
  
    //S(시작위치)를 찾아줘야 함
    //그리고 routes 배열안에 담긴 방향 따라서 움직이기
    //범위 넘어가면 안됨 + 이후의 명령으로 넘어감
  
    //S(시작위치)를 찾아줘야 함
  
    const start = "S";
    const startingPoint = park.findIndex((point) => point === start);
  
  //아 이거 아닌데, routes 가 "E 2" 이런식으로 있는 거 어떻게 꺼내오지
    for (height = 0; height < park.length; height++) {
      for (let width = 0; width < park.length; width++) {
        if (park[height][width] === "E") {
          width += 1;
        } else if (park[height][width] === "W") {
          width -= 1;
        } else if (park[height][width] === "S") {
          height += 1;
        } else if (park[height][width] === "N") {
          height -= 1;
        }
      }
    }
  }