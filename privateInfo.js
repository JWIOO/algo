function solution(today, terms, privacies) {
    //오늘 날짜 today
    //약관의 유효 기간(1차원 문자 배열) terms
    //개인정보 privacies
    //오늘 날짜보다 지나면 파기해야되고, 나는 이 파기해야할 개인정보 번호들을 구하는 거임
  
    //개인정보의 각 요소에서 날짜(a)와 약관 종류(b)을 갖고 온다.
    //그 a에, b에 해당하는 유효기간을, 더해준다.(c)
    //그 c가, 오늘날짜 이전인지 이후인지 확인한다.
    //======================================
  
    let expriration = new Date(today);
  }
  
  
  terms.forEach(term => {
  
  let tyepNduration = term.slpit(' ')//공백으로 나눠서
  let type = tyepNduration[0] //앞에 있는 거는 약관 종류(b)
  let duration = tyepNduration[1] //뒤에 있는 거는 기간( )
  
  
  })
  
  //개인정보의 각 요소에서 날짜(a)와 약관 종류(b)을 갖고 온다.
  privacies.forEach((privacy, index) => {
    let dateNtype = privacy.split(" "); //공백으로 나눠서
    let date = dateNtype[0]; //앞에 있는 거는 날짜(a)
    let type = dateNtype[1]; //뒤에 있는 거는 약관 종류(b)
  
  
  
  
  
  });
  
    //그 a에, b에 해당하는 유효기간을, 더해준다.(c)
  let expirationMonth = month + 