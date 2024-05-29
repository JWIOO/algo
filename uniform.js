//케이스 1: 분실O, 여벌O
//케이스 2: 분실O, 여벌X
//케이스 3: 분실X, 여벌O
//케이스 4: 분실X, 여벌X

function solution(n, lost, reserve) {
  //Case1: 여벌 체육복이 있지만 도난당한 학생을 구분 (케이스 1: 분실O, 여벌O)
  let bothLostAndReserve = lost.filter((student) => reserve.includes(student));

  //애초에 체육복이 없는 학생들과 여벌 체육복이 있는 학생들 구분
  let realLost = lost.filter(
    (student) => !bothLostAndReserve.includes(student)
  );
  let realReserve = reserve.filter(
    (student) => !bothLostAndReserve.includes(student)
  );

  //애초에 체육복을 도난당하지 않은 학생 수 (케이스 4: 분실X, 여벌X)
  let canAttendStudent = n - realLost.length;

  //체육복을 빌려줄 수 있는 경우를 확인(앞번호, 뒷번호)하기 위해
  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  realLost.forEach((student) => {
    let prev = realReserve.indexOf(student - 1);
    let next = realReserve.indexOf(student + 1);

    //앞뒷번호 애들한테 빌릴 수 있는지 확인 (케이스 2: 분실O, 여벌X)

    //앞번호 학생에게 빌릴 수 있는지 확인
    if (prev !== -1) {
      realReserve.splice(prev, 1); //체육복 빌려주기
      canAttendStudent++;
    } else if (next !== -1) {
      //뒷번호 학생에게 빌릴 수 있는지 확인
      realReserve.splice(next, 1); //체육복 빌려주기
      canAttendStudent++;
    }
  });

  return canAttendStudent; // 최종적으로 체육수업을 들을 수 있는 학생 수 반환
}
