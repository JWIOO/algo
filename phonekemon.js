function solution(nums) {
    var answer = 0;
  
    let netCount = [...new Set(nums)].length;
  
    if (netCount === nums.length) {
      answer = nums.length / 2;
    } else {
      answer = Math.min(netCount, nums.length / 2);
    }
    return answer;
  }
  