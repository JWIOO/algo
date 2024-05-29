function solution(new_id) {
    //1단계 : 모든 대문자를 소문자로
    new_id = new_id.toLowerCase();
  
    //2단계 : 모든 문자제거( 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외 )
    new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
  
    //3단계 : 마침표가 2개 이상 연속되면 1개로 치환
    new_id = new_id.replace(/\.{2,}/g, ".");
  
    //4단계 : 마침표가 처음이나 끝에 위치하면 제거
    new_id = new_id.replace(/^\.|\.$/g, "");
  
    //5단계 : 빈 문자열이면 new_id에 "a"를 대입
    if (new_id.length === 0) {
      new_id = "a";
    }
  
    //6단계 : new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    //만약 제거 후에 마침표가 끝에 위치하면 끝에 위치한 마침표 제거
    if (new_id.length >= 16) {
      new_id = new_id.slice(0, 15);
      new_id = new_id.replace(/\.$/, "");
    }
  
    //7단계 : new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙이기
    for (; new_id.length < 3; ) {
      new_id += new_id[new_id.length - 1];
    }
  
      //1-7단계 다 끝낸 new_id 반환
    return new_id;
  }
  