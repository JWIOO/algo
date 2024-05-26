function binaryStringWithPadding(length, number) {
    return number.toString(2).padStart(length, "0");
  }
  
  //두 배열을 받아 각 요소를 이진수로 변환하고, 비트 OR 연산을 수행하여 결과를 반환
  function solution(length, arr1, arr2) {
    return arr1.map((value, index) => {
      //두 배열의 같은 인덱스 요소를 OR 연산한 후 이진수로 변환하고, 주어진 길이에 맞춰 문자열 패딩 메소드
      const mapRow = (value | arr2[index]).toString(2).padStart(length, "0");
      //이진수를 '#'과 ' '으로 변환하여 반환(정규 표현식)
      return mapRow.replace(/1|0/g, (bit) => (bit === "1" ? "#" : " "));
    });
  }