function solution(name, yearning, photo) {
  const memory = {};

  //name과 yearning이 일대일 대응
  //name이 key(ex.주민번호)이고, yearning이 값(ex.이름)
  name.forEach(function (n, i) {
    memory[n] = yearning[i];
  });

  //photo안의 각 배열마다의 점수 구해서 반환
  //새로운 배열을 저장해서 반환해야하니까, forEach가 아니라 map
  return photo.map(function (eachOfPhoto) {
    let totalScore = 0;

    //photo안의 각 배열에 속한, 사람들의 점수 구하기
    eachOfPhoto.forEach(function (person) {
      //photo안의 각 배열에, 이름이 존재하면
      //그 해당하는 점수를 가져와서 누적하고, 없으면 0
      totalScore += memory[person] || 0;
    });

    // 현재 포토에 대한 총 점수를 반환
    return totalScore;
  });
}