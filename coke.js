//a = give
//b = receive
//n = final

function solution(give, receive, has) {
    //받을 수 있는 최종 콜라 수
    let final = 0;
    //가지고 있는 콜라(has)가 줘야 하는 콜라(give)보다 작아질 때까지 반복
    while (has >= give) {
      //가지고 있는 콜라룰 쥬어야 하는 콜라로 교환하여 받을 수 있는 콜라 개수 누적
      final += Math.floor(has / give) * receive;
  
      //가지고 있는 콜라에서 줘야 하는 콜라로 교환하고 남은 콜라 수 계산
      //그래서 이게 다음 rep에서 사용할 콜라 개수임
      has = Math.floor(has / give) * receive + (has % give);
    }
    return final;
  }
  