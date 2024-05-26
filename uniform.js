function solution(n, lost, reserve) {
    //case1: 분실O & 여벌O =) 못 빌려준다!
    //case2: 분실O & 여벌X =) 빌려야 한다.
    //case3: 분실X & 여벌O =) 빌려줘야 한다.
    //case4: 분실X & 여벌X =) 못 빌려준다!
  
  
  //분실을 lost, 여벌을  reserve라고 하고, O/X로 변수명 지정함
  
    //case1: 분실O & 여벌O =) 못 빌려준다!
    let lostOreserveO = lost.filter(person => reserve.includes(person))
      
  
   
    //case4: 분실X & 여벌X =) 못 빌려준다!
   let lostXreserveX = n - lost.length;
  
  
  
   //진짜 잃어버린 애들
   let realLost = lost.filter((person) => !reserve.includes(person))
  
   //진짜 여벌 있는 애들
   let realReserve = reserve.filter((person) => !lost.includes(person))
  
   //case2: 분실O & 여벌X =) 빌려야 한다.
   //애들이 앞번호, 뒷번호 애들한테 빌릴 수 있을까?
   //잃어버린애 좌표 구하고, 그 앞뒤 찾아보기
  
   realLost.forEach(person =>{
       let back = realReserve.indexOf(person, -1 )
       let front = realReserve.indexOf(person, +1 )
  
   })
   let back = ??