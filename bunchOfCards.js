function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
  
    for (let k = 0; k < goal.length; k++) {
      if (cards1[i] === goal[k]) {
        i++;
      } else if (cards2[j] === goal[k]) {
        j++;
      } else {
        return "No";
      }
    }
  
    return "Yes";
  }