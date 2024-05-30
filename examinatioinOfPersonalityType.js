function solution(survey, choices) {
    //성격 유형 초기화
    let types = {
      R: 0,
      T: 0,
      C: 0,
      F: 0,
      J: 0,
      M: 0,
      A: 0,
      N: 0,
    };
  
    //각 질문에 대해 점수 계산
    survey.forEach((question, index) => {
      //질문의 두 성격 유형 분리
      let type1 = question[0]; 
      let type2 = question[1]; 
  
      //참여자들의 선택지
      let choice = choices[index];
  
      //선택지에 따라 점수 계산
      
      if (choice < 4) {
        types[type1] += 4 - choice; 
      }
      else if (choice > 4) {
        types[type2] += choice - 4; 
      }
      //4선택할 때는 그냥 무시
  
      //이제 최종적으로 성격 유형을 진단하자
    });
  
    function examinationOfType(type1, type2) {
      if (types[type1] >= types[type2]) {
        return type1;
      } 
      else if (types[type1] < types[type2]) {
        return type2;
      }
    }
    //이제 성격 판단 최종
    let typeRT = examinationOfType("R", "T");
    let typeCF = examinationOfType("C", "F");
    let typeJM = examinationOfType("J", "M");
    let typeAN = examinationOfType("A", "N");
  
    let result = typeRT + typeCF + typeJM + typeAN;
  
    return result;
  }
  