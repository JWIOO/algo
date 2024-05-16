function solution(nums) {
    var answer;
    let count = [];
    
    
    
    //nums의 길이를 구해서 그거 절반이 최대인데,
    //중복을 세서(forEach), 중복이 있으면 그 개수
    
    
    nums.forEach(function(num) {
        //각 폰켓몬의 등장 횟수 기록하기
        //같은 종류의 폰켓몬이 등장하면, count[num]에 1을 더하기
        count[num] = (count[num] || 0) + 1;
    });
    
    
    //중복되는 폰켓몬의 "종류" 수를 계산
    //그 종류의 수를 구해서,
    let moreThanTwoCount = count.length;
    ????? = //그 중복 제거 되어야 하는데...
    
    
    //중복이 없는 경우와 있는 경우를 구분하여 최대 선택 가능한 포켓몬의 수를 결정
    
    //중복이 없는 경우, nums 길이 절반이 곧 최대
    if (moreThanTwoCount === nums.length) {
        answer = nums.length / 2;
    } else {
    
    //중복이 있는 경우,
    
        answer =  ????? ;
    }
    
    
    return answer;
    }