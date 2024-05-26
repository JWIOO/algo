function solution(keymap, targets) {
    //keymap을 순회하면서 각 문자(알파벳)의 최소 입력 횟수를 계산하자.
    //만약에 같은 문자(알파벳)가 나오면, 최소값 비교해서 저장하자.
  
    const minKey = new Map();
  
    for (let i = 0; i < keymap.length; i++) {
      let chunk = keymap[i];
  
      for (let j = 0; i < keymap.length; j++) {
        let letterOfChunk = chunk[j];
        //없으면 지금 있는 인덱스가 최솟값으로 들어가고 몇번째 문자인지 j+1로 저장,
        if (!minKey.has(letterOfChunk)) {
          minKey.set(letterOfChunk, j + 1);
        }
        //만약에 이미 있다면, 비교해서 최솟값을 저장
        else {
          minKey.set(letterOfChunk, Math.min(minKey.get(letterOfChunk)), j + 1);
        }
      }
    }
  
    //타겟 단어의 각 문자(target)에 대한 키 입력 횟수를 계산하고 누적( totalKey)하자.
    totalKeys = [];
    for (let k = 0; k < targets.length; k++) {
      let target = targets[k];
      let totalKey = 0;
      for (let l = 0; l < target.length; l++) {
        let letterOfTarget = target[l];
        //해당하는 문자가 없으면 -1 저장
        if (!minkey.has(letterOfTarget)) {
          totalKey = -1;
          break;
        }
        //해당 문자(알파벳)의 최소 키값 누적
        totalKey += minKey.get(letterOfTarget);
      }
  
      totalKeys.push(totalKey);
    }
  
    return totalKeys;
  }
  